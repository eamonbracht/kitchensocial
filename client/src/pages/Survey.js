import React, { Component } from "react";
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import withRoot from '../withRoot';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Jumbotron from "../components/jumbo_survey";
import "../format.css";


const genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Non-Binary',
    label: 'Non-Binary',
  },
];
const student_options = [
  {
    value: 'Yes',
    label: 'Yes',
  },
  {
    value: 'No',
    label: 'No',
  },
  {
    value: 'Prefer not to answer',
    label: 'Prefer not to answer',
  },
];
const dining_plan_options = [
  {
    value: 'Yes',
    label: 'Yes',
  },
  {
    value: 'No',
    label: 'No',
  },
  {
    value: 'N/A',
    label: 'N/A',
  },
];
const income_options = [
    {
  value: '<40k',
  label: '<40k',
    },
    {
      value: '40-80k',
      label: '40-80k',
    },
    {
  value: '80-120k',
  label: '80-120k',
    },
    {
  value: '120-200k',
  label: '120-200k',
    },
    {
  value: '>200k',
  label: '>200k',
    },
  ];
  const pay_per_meal_options = [
      {
          value: '$5',
          label: '$5',
      },
      {
          value: '$10',
          label: '$10',
      },
      {
          value: '$15',
          label: '$15',
      },
      {
          value: '$20',
          label: '$20',
      },
      {
          value: '$25',
          label: '$25',
      },
      {
          value: '$35',
          label: '$35',
      },
      {
          value: '$50',
          label: '$50',
      },
  ]
const styles = theme => ({
  container: {
    // width: '90%',
    display: 'block',
    flexWrap: 'wrap',
    marginRight: 'auto%',
    marginLeft: 'auto%',
    
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minwidth: 300,
    marginTop: theme.spacing.unit*2,
    marginBottom: theme.spacing.unit*2,

  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    marginTop: theme.spacing.unit*5,
    marginBottom: theme.spacing.unit,
    // marginRight: '25%',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class Survey extends Component {
  state = {
    data: [],
    id: 0,
    email: '',
    gender: 'Male',
    age: 0,
    student: '',
    dining_plan: 'N/A',
    income: null,
    cook_per_week: '',
    delivery_per_week: '',
    buy_per_week: '', 
    meal_of_day_restaurant: '',
    kind_meal_cooked_home: '',
    reason_dont_cook: '',
    reason_dont_cook_other: '',
    clean_ingred_cook_often: '', 
    cook_with_videos: '',
    cooking_social: '',
    pay_per_meal: '',
    spend_groceries: '',
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };
  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has 
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever 
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
    
    getDataFromDb = () => {
      fetch("/api/getData")
        .then(data => data.json())
        .then(res => this.setState({ data: res.data }));
    };
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  putDataToDB = (state) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("/api/putData", {
      id: idToBeAdded,
      email: this.state.email,
      gender: this.state.gender,
      age: this.state.age, 
      student: this.state.student, 
      dining_plan: this.state.dining_plan, 
      income: this.state.income, 
      cook_per_week: this.state.cook_per_week, 
      delivery_per_week: this.state.delivery_per_week, 
      buy_per_week: this.state.delivery_per_week, 
      meal_of_day_restaurant: this.state.meal_of_day_restaurant,
      kind_meal_cooked_home: this.state.kind_meal_cooked_home, 
      reason_dont_cook: this.state.reason_dont_cook, 
      reason_dont_cook_other: this.state.reason_dont_cook_other, 
      clean_ingred_cook_often: this.state.clean_ingred_cook_often,
      cook_with_videos: this.state.cook_with_videos, 
      cooking_social: this.state.cooking_social, 
      pay_per_meal: this.state.pay_per_meal, 
      spend_groceries: this.state.spend_groceries
    });
  };

  render() {
    const { data } = this.state;
    const { classes } = this.props;
    return (
      <div>
      {/* <ul>
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
                <li style={{ padding: "10px" }} key={data.email}>
                  <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                  <span style={{ color: "gray" }}> email: </span>
                  {dat.email}<br />
                  <span style={{ color: "gray" }}> Gender: </span> {dat.gender} <br />
                  <span style={{ color: "gray" }}> Age: </span> {dat.age}

                </li>
              ))}
        </ul> */}
              <Jumbotron/>

              <div class = "paper">

            <form onSubmit={()  => this.putDataToDB(data)} className={classes.container}>
          <FormControl fullWidth className={classes.FormControl}>   
          
          <TextField
          id="standard-required"
          label="email"
          margin="normal"
          placeholder = {this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          />
          <TextField
          id="standard-select-currency"
          select
          label="Gender"
          // className={classes.textField}
          value={this.state.gender}
          onChange={e => this.setState({ gender: e.target.value })}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please indicate your gender"
          margin="normal"
        >
          {genders.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <TextField
          id="standard-number"
          label="Age"
          placeholder= '18'
          onChange={e => this.setState({ age: e.target.value })}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Are you a student?"
          className={classes.textField}
          value={this.state.student}
          onChange={e => this.setState({ student: e.target.value })}          
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please indicate if you are a student"
          margin="normal"
        >
          {student_options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency"
          select
          label="If yes, are you on a dining plan?"
          className={classes.textField}
          value={this.state.dining_plan}
          onChange={e => this.setState({ dining_plan: e.target.value })}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please indicate if you are on a dining plan"
          margin="normal"
        >
          {dining_plan_options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency"
          select
          label="If no, what is your annual income?"
          className={classes.textField}
          value={this.state.income}
          onChange={e => this.setState({ income: e.target.value })}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please indicate annual income"
          margin="normal"
        >
          {income_options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </FormControl>
        <FormControl fullWidth component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">How many times a week do you cook at home? </FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={e => this.setState({ cook_per_week: e.target.value })}
            >
            <FormControlLabel value="Almost never" control={<Radio />} label="Never" />
            <FormControlLabel value="Once or twice a week" control={<Radio />} label="Once or twice a week" />
            <FormControlLabel value="Maybe a few times" control={<Radio />} label="Maybe a few times" />
            <FormControlLabel value="Pretty much everyday" control={<Radio />} label="Pretty much everyday" />
            >
          </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">How many times do you order delivery per week?</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={e => this.setState({ delivery_per_week: e.target.value })}
            >
            <FormControlLabel value="Almost never" control={<Radio />} label="Never" />
            <FormControlLabel value="Once or twice a week" control={<Radio />} label="Once or twice a week" />
            <FormControlLabel value="Maybe a few times" control={<Radio />} label="Maybe a few times" />
            <FormControlLabel value="Pretty much everyday" control={<Radio />} label="Pretty much everyday" />
            >
          </RadioGroup>        </FormControl>

          <FormControl fullWidth component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">How often do you buy your meal per week?</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={e => this.setState({ buy_per_week: e.target.value })}
            >
            <FormControlLabel value="Almost never" control={<Radio />} label="Never" />
            <FormControlLabel value="Once or twice a week" control={<Radio />} label="Once or twice a week" />
            <FormControlLabel value="Maybe a few times" control={<Radio />} label="Maybe a few times" />
            <FormControlLabel value="Pretty much everyday" control={<Radio />} label="Pretty much everyday" />
            >
          </RadioGroup>        </FormControl>

          <FormControl fullWidth component="fieldset" className={classes.formControl}>

          <FormLabel component="legend">Which meal of the day do you eat most often from a restaurant?</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={e => this.setState({ meal_of_day_restaurant: e.target.value })}
            >
            <FormControlLabel value="bfast" control={<Radio />} label="Breakfast (+/- coffee)" />
            <FormControlLabel value="Lunch" control={<Radio />} label="Lunch" />
            <FormControlLabel value="Din" control={<Radio />} label="Dinner" />
            <FormControlLabel value="Snack/Desert" control={<Radio />} label="Snack/Desert" />
            >
          </RadioGroup>        </FormControl>

          <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">What kind of meals do you cook the most often at home?</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={e => this.setState({ kind_meal_cooked_home: e.target.value })}
            >
            <FormControlLabel value="bfast" control={<Radio />} label="Breakfast (+/- coffee)" />
            <FormControlLabel value="Lunch" control={<Radio />} label="Lunch" />
            <FormControlLabel value="Din" control={<Radio />} label="Dinner" />
            <FormControlLabel value="Events" control={<Radio />} label="Events" />
            <FormControlLabel value="baking/Desert" control={<Radio />} label="Baking/Desert" />
            >
          </RadioGroup>        </FormControl>

          <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">What is the number one reason you don’t cook at home as often as you would like to?</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={e => this.setState({ reason_dont_cook: e.target.value })}
            >
            <FormControlLabel value="grocery store/prep" control={<Radio />} label="Don’t have the time to grocery shop and prep" />
            <FormControlLabel value="uncertain" control={<Radio />} label="Not sure how to/what to"/>
            <FormControlLabel value="convenient" control={<Radio />} label="Not convenient compared to eating out/ordering"/>
            <FormControlLabel value="clean-up" control={<Radio />} label="Don’t want to deal with clean-up afterwards" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
            >
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth className={classes.FormControl}>   
        <TextField
          id="standard-textarea"
          label="If other, please explain"
          placeholder="If other, please explain"
          multiline
          className={classes.textField}
          margin="normal"
          onChange={e => this.setState({ reason_dont_cook_other: e.target.value })}
        />
        </FormControl>
        <FormControl fullWidth component="fieldset">
          <FormLabel component="legend">If you did not have to buy and prep ingredients and clean up afterwards, would you cook a lot more often?</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={e => this.setState({ clean_ingred_cook_often: e.target.value })}
            >
            <FormControlLabel value="yes" control={<Radio />} label="Yes for sure" />
            <FormControlLabel value="maybe" control={<Radio />} label="maybe?"/>
            <FormControlLabel value="no" control={<Radio />} label="Hard pass"/>
            >
          </RadioGroup>
          <FormLabel component="legend">Would you feel more confident cooking if you had access to step-by-step videos?</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={e => this.setState({ cook_with_videos: e.target.value })}
            >
            <FormControlLabel value="yes" control={<Radio />} label="Yes, I would love that"/>
            <FormControlLabel value="no" control={<Radio />} label="I don’t really need them"/>
            >
          </RadioGroup>
          <FormLabel component="legend">How do you generally like to cook?</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={e => this.setState({ cooking_social: e.target.value })}
            >
            <FormControlLabel value="alone" control={<Radio />} label="Alone"/>
            <FormControlLabel value="with s/o" control={<Radio />} label="With significant other"/>
            <FormControlLabel value="with friends" control={<Radio />} label="With friends"/>
            >
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth className={classes.FormControl}>   
        <TextField
          id="standard-select-currency"
          select
          label="How much are you willing to pay for a meal?"
          className={classes.textField}
          value={this.state.pay_per_meal}
          onChange={e => this.setState({ pay_per_meal: e.target.value })}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          // helperText="Please indicate average meal cost from restaurant"
          margin="normal"
        >
          {pay_per_meal_options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">How much do you spend on groceries everymonth?</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.amount}
            onChange={e => this.setState({ spend_groceries: e.target.value })}
            >
            <FormControlLabel value="$50" control={<Radio />} label="$50"/>
            <FormControlLabel value="$100" control={<Radio />} label="$100"/>
            <FormControlLabel value="$150" control={<Radio />} label="$150"/>
            <FormControlLabel value=">$200" control={<Radio />} label=">$200"/>

            >
          </RadioGroup>
        </FormControl>
        <Button type = "submit" variant="contained" color="primary" className={classes.button}>Submit</Button>
      </form>
      </div>
      </div>
    );
  }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Survey));
