// import React from 'react';
// import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
// import withRoot from '../withRoot';
// import MenuItem from '@material-ui/core/MenuItem';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import Button from '@material-ui/core/Button';
// import axios from 'axios';

// const styles = theme => ({
//   container: {
//     width: 400+theme.spacing.unit+theme.spacing.unit,
//     display: 'flex',
//     flexWrap: 'wrap',
//     marginRight: '25%',
//     marginLeft: '25%',
    
//   },
//   textField: {
//     // marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     minwidth: 300,
//     marginTop: theme.spacing.unit*2,
//     marginBottom: theme.spacing.unit*2,

//   },
//   dense: {
//     marginTop: 19,
//   },
//   menu: {
//     width: 200,
//   },
//   button: {
//     marginTop: theme.spacing.unit*5,
//     marginBottom: theme.spacing.unit,
//     // marginRight: '25%',
//     marginLeft: '100%',
//   },
//   leftIcon: {
//     marginRight: theme.spacing.unit,
//   },
//   rightIcon: {
//     marginLeft: theme.spacing.unit,
//   },
//   iconSmall: {
//     fontSize: 20,
//   },
// });

// const genders = [
//     {
//       value: 'Male',
//       label: 'Male',
//     },
//     {
//       value: 'Female',
//       label: 'Female',
//     },
//     {
//       value: 'Non-Binary',
//       label: 'Non-Binary',
//     },
//   ];
//   const yn = [
//     {
//       value: 'Yes',
//       label: 'Yes',
//     },
//     {
//       value: 'No',
//       label: 'No',
//     },
//     {
//       value: 'Prefer not to answer',
//       label: 'Prefer not to answer',
//     },
//   ];
//   const yn_na = [
//     {
//       value: 'Yes',
//       label: 'Yes',
//     },
//     {
//       value: 'No',
//       label: 'No',
//     },
//     {
//       value: 'N/A',
//       label: 'N/A',
//     },
//   ];
//   const income = [
//       {
//     value: '<40k',
//     label: '<40k',
//       },
//       {
//     value: '40-80k',
//     lable: '40-80k',
//       },
//       {
//     value: '80-120k',
//     label: '80-120k',
//       },
//       {
//     value: '120-200k',
//     label: '120-200k',
//       },
//       {
//     value: '>200k',
//     label: '>200k',
//       },
//     ];
//     const mealcost = [
//         {
//             value: '$5',
//             label: '$5',
//         },
//         {
//             value: '$10',
//             label: '$10',
//         },
//         {
//             value: '$15',
//             label: '$15',
//         },
//         {
//             value: '$20',
//             label: '$20',
//         },
//         {
//             value: '$25',
//             label: '$25',
//         },
//         {
//             value: '$35',
//             label: '$35',
//         },
//         {
//             value: '$50',
//             label: '$50',
//         },
//     ]
  
// class TextFields extends React.Component {
    
//   state = {
//     age: '18',
//     multiline: 'Controlled',
//     genders: 'Male',
//     labelWidth: 0,
//     yn: '',
//     yn_na: 'N/A',
//     income: '0',
//     mealcost: '0',
//   };

//   handleChange = name => event => {
//     this.setState({
//       [name]: event.target.value,
//     });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//         <div>
//         <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
//      <FormControl fullWidth className={classes.FormControl}>   
//       <TextField
//             required
//           id="email-input"
//           label="Email"
//         //   className={classes.textField}
//           type="email"
//           name="email"
//           autoComplete="email"
//           margin="normal"

//           // variant="outlined"
//       />
//       </FormControl>
//       <FormControl fullWidth className={classes.FormControl}>   
//       <TextField
//           id="standard-select-currency"
//           select
//           label="Gender"
//           className={classes.textField}
//           value={this.state.genders}
//           onChange={this.handleChange('genders')}
//           SelectProps={{
//             MenuProps: {
//               className: classes.menu,
//             },
//           }}
//           helperText="Please indicate your gender"
//           margin="normal"
//         >
//           {genders.map(option => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         </FormControl>
//         <FormControl fullWidth className={classes.FormControl}>   
//       <TextField
//           id="standard-number"
//           label="Age"
//           value={this.state.age}
//           onChange={this.handleChange('age')}
//           type="number"
//           className={classes.textField}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           margin="normal"
//         />
//         </FormControl>
//         <FormControl fullWidth className={classes.FormControl}>   
//         <TextField
//           id="standard-select-currency"
//           select
//           label="Are you a student?"
//           className={classes.textField}
//           value={this.state.yn}
//           onChange={this.handleChange('yn')}
//           SelectProps={{
//             MenuProps: {
//               className: classes.menu,
//             },
//           }}
//           helperText="Please indicate if you are a student"
//           margin="normal"
//         >
//           {yn.map(option => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         </FormControl>     
//         <FormControl fullWidth className={classes.FormControl}>   
//         <TextField
//           id="standard-select-currency"
//           select
//           label="If yes, are you on a dining plan?"
//           className={classes.textField}
//           value={this.state.yn_na}
//           onChange={this.handleChange('yn_na')}
//           SelectProps={{
//             MenuProps: {
//               className: classes.menu,
//             },
//           }}
//           helperText="Please indicate if you are on a dining plan"
//           margin="normal"
//         >
//           {yn_na.map(option => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         </FormControl>
//         <FormControl fullWidth className={classes.FormControl}>   
//         <TextField
//           id="standard-select-currency"
//           select
//           label="If no, what is your annual income?"
//           className={classes.textField}
//           value={this.state.income}
//           onChange={this.handleChange('income')}
//           SelectProps={{
//             MenuProps: {
//               className: classes.menu,
//             },
//           }}
//           helperText="Please indicate annual income"
//           margin="normal"
//         >
//           {income.map(option => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         </FormControl>
//         <FormControl component="fieldset" className={classes.formControl}>
//           <FormLabel component="legend">How many times a week do you cook at home? </FormLabel>
//           <RadioGroup
//             aria-label="Gender"
//             name="gender1"
//             className={classes.group}
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <FormControlLabel value="Almost never" control={<Radio />} label="Never" />
//             <FormControlLabel value="Once or twice a week" control={<Radio />} label="Once or twice a week" />
//             <FormControlLabel value="Maybe a few times" control={<Radio />} label="Maybe a few times" />
//             <FormControlLabel value="Pretty much everyday" control={<Radio />} label="Pretty much everyday" />
//             >
//           </RadioGroup>
//         </FormControl>
//         <FormControl component="fieldset" className={classes.formControl}>
//           <FormLabel component="legend">How many times do you order delivery per week?</FormLabel>
//           <RadioGroup
//             aria-label="Gender"
//             name="gender1"
//             className={classes.group}
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <FormControlLabel value="Almost never" control={<Radio />} label="Never" />
//             <FormControlLabel value="Once or twice a week" control={<Radio />} label="Once or twice a week" />
//             <FormControlLabel value="Maybe a few times" control={<Radio />} label="Maybe a few times" />
//             <FormControlLabel value="Pretty much everyday" control={<Radio />} label="Pretty much everyday" />
//             >
//           </RadioGroup>
//         </FormControl>
//         <FormControl component="fieldset" className={classes.formControl}>
//           <FormLabel component="legend">How often do you buy your meal per week?
// </FormLabel>
//           <RadioGroup
//             aria-label="Gender"
//             name="gender1"
//             className={classes.group}
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <FormControlLabel value="Almost never" control={<Radio />} label="Never" />
//             <FormControlLabel value="Once or twice a week" control={<Radio />} label="Once or twice a week" />
//             <FormControlLabel value="Maybe a few times" control={<Radio />} label="Maybe a few times" />
//             <FormControlLabel value="Pretty much everyday" control={<Radio />} label="Pretty much everyday" />
//             >
//           </RadioGroup>
//         </FormControl>
//         <FormControl component="fieldset" className={classes.formControl}>
//           <FormLabel component="legend">Which meal of the day do you eat most often from a restaurant?</FormLabel>
//           <RadioGroup
//             aria-label="Gender"
//             name="gender1"
//             className={classes.group}
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <FormControlLabel value="bfast" control={<Radio />} label="Breakfast (+/- coffee)" />
//             <FormControlLabel value="Lunch" control={<Radio />} label="Lunch" />
//             <FormControlLabel value="Din" control={<Radio />} label="Dinner" />
//             <FormControlLabel value="Snack/Desert" control={<Radio />} label="Snack/Desert" />
//             >
//           </RadioGroup>
//         </FormControl>
//         <FormControl component="fieldset" className={classes.formControl}>
//           <FormLabel component="legend">What kind of meals do you cook the most often at home?</FormLabel>
//           <RadioGroup
//             aria-label="Gender"
//             name="gender1"
//             className={classes.group}
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <FormControlLabel value="bfast" control={<Radio />} label="Breakfast (+/- coffee)" />
//             <FormControlLabel value="Lunch" control={<Radio />} label="Lunch" />
//             <FormControlLabel value="Din" control={<Radio />} label="Dinner" />
//             <FormControlLabel value="Events" control={<Radio />} label="Events" />
//             <FormControlLabel value="baking/Desert" control={<Radio />} label="Baking/Desert" />
//             >
//           </RadioGroup>
//         </FormControl>
        
//         <FormControl component="fieldset" className={classes.formControl}>
//           <FormLabel component="legend">What is the number one reason you don’t cook at home as often as you would like to?</FormLabel>
//           <RadioGroup
//             aria-label="Gender"
//             name="gender1"
//             className={classes.group}
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <FormControlLabel value="grocery store/prep" control={<Radio />} label="Don’t have the time to grocery shop and prep" />
//             <FormControlLabel value="uncertain" control={<Radio />} label="Not sure how to/what to"/>
//             <FormControlLabel value="convenient" control={<Radio />} label="Not convenient compared to eating out/ordering"/>
//             <FormControlLabel value="clean-up" control={<Radio />} label="Don’t want to deal with clean-up afterwards" />
//             <FormControlLabel value="Other" control={<Radio />} label="Other" />
//             >
//           </RadioGroup>
//         </FormControl>
//         <FormControl fullWidth className={classes.FormControl}>   
//         <TextField
//           id="standard-textarea"
//           label="If other, please explain"
//           placeholder="If other, please explain"
//           multiline
//           className={classes.textField}
//           margin="normal"
//         />
//         </FormControl>
//         <FormControl component="fieldset" className={classes.formControl}>
//           <FormLabel component="legend">If you did not have to buy and prep ingredients and clean up afterwards, would you cook a lot more often?</FormLabel>
//           <RadioGroup
//             aria-label="Gender"
//             name="gender1"
//             className={classes.group}
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <FormControlLabel value="yes" control={<Radio />} label="Yes for sure" />
//             <FormControlLabel value="maybe" control={<Radio />} label="maybe?"/>
//             <FormControlLabel value="no" control={<Radio />} label="Hard pass"/>
//             >
//           </RadioGroup>
//         </FormControl>
//         <FormControl component="fieldset" className={classes.formControl}>
//           <FormLabel component="legend">Would you feel more confident cooking if you had access to step-by-step videos?</FormLabel>
//           <RadioGroup
//             aria-label="Gender"
//             name="gender1"
//             className={classes.group}
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <FormControlLabel value="yes" control={<Radio />} label="Yes, I would love that"/>
//             <FormControlLabel value="no" control={<Radio />} label="I don’t really need them"/>
//             >
//           </RadioGroup>
//         </FormControl>
//         <FormControl component="fieldset" className={classes.formControl}>
//           <FormLabel component="legend">How do you generally like to cook?</FormLabel>
//           <RadioGroup
//             aria-label="Gender"
//             name="gender1"
//             className={classes.group}
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <FormControlLabel value="alone" control={<Radio />} label="Alone"/>
//             <FormControlLabel value="with s/o" control={<Radio />} label="With significant other"/>
//             <FormControlLabel value="with friends" control={<Radio />} label="With friends"/>
//             >
//           </RadioGroup>
//         </FormControl>
//         <FormControl fullWidth className={classes.FormControl}>   
//         <TextField
//           id="standard-select-currency"
//           select
//           label="How much are you willing to pay for a meal?"
//           className={classes.textField}
//           value={this.state.mealcost}
//           onChange={this.handleChange('mealcost')}
//           SelectProps={{
//             MenuProps: {
//               className: classes.menu,
//             },
//           }}
//           helperText="Please indicate average meal cost from restaurant"
//           margin="normal"
//         >
//           {mealcost.map(option => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         </FormControl>
//         <FormControl fullWidth className={classes.margin}>
//           <InputLabel htmlFor="adornment-amount">How much do you spend on groceries everymonth?</InputLabel>
//           <Input
//             id="outlined-adornment-amount"
//             variant="outlined"
//             value={this.state.amount}
//             onChange={this.handleChange('amount')}
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>
//         <Button type = "submit" variant="contained" color="primary" className={classes.button}>
//         Submit
//         {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
//       </Button>
//       </form>
//       </div>
//     );
//   }
// }

// TextFields.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withRoot(withStyles(styles)(TextFields));
