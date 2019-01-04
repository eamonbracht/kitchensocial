import React, { Component } from "react";
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import withRoot from '../withRoot';


const styles = theme => ({
    container: {
      width: 400+theme.spacing.unit+theme.spacing.unit,
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: '25%',
      marginLeft: '25%',
      
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
      marginLeft: '100%',
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
class TextFields extends Component {
  // initialize our state 
  questionstate = {
    age: '18',
    multiline: 'Controlled',
    genders: 'Male',
    labelWidth: 0,
    yn: '',
    yn_na: 'N/A',
    income: '0',
    mealcost: '0'
  };
  state = {
    data: [],
    id: 0,
    message: null,
    email: null,
    // intervalIsSet: false,
    // idToDelete: null,
    // idToUpdate: null,
    // objectToUpdate: null,
    
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
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

  // just a note, here, in the front end, we use the id key of our data object 
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify 
  // data base entries

  // our first get method that uses our backend api to 
  // fetch data from our data base
  getDataFromDb = () => {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };



  // onSubmit = (e) => {
  //   e.preventDefault();

  //   const { id, message, email} = this.state;

  //   axios.post('/api/putData', { isbn, title, author, description, published_year, publisher })
  //     .then((result) => {
  //       this.props.history.push("/")
  //     });
  // }
  // our put method that uses our backend api
  // to create new query into our data base
  onSubmit = (e) => {
    let currentIds = this.state.data.map(data => data.id);
    const {message, email} = this.state;

    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("/api/putData", {
      idToBeAdded,
      message,
      email
    });
  };


  


  // here is our UI
  // it is easy to understand their functions when you 
  // see them render into our screen
  render() {
    const { data } = this.state;
    const { classes } = this.props;
    const {blah, id, message, email} = this.state;

    return (
      <div>
        <ul>
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
                <li style={{ padding: "10px" }} key={data.message}>
                  <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                  <span style={{ color: "gray" }}> message: </span>
                  {dat.message}
                  <span style={{ color: "gray" }}> email: </span>
                  {dat.email}
                </li>
              ))}
        </ul>
        {/* <div style={{ padding: "10px" }}>
          <input
            type="text"
            onChange={e => this.setState({ message: e.target.value })}
            placeholder="add something in the database"
            style={{ width: "200px" }}
          />
          <button onClick={() => this.putDataToDB(this.state.message)}>
            ADD
          </button>
        </div> */}
        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onSubmit} >
      <FormControl fullWidth className={classes.FormControl} onChange={e => this.setState({ message: e.target.value })}value={message}>   
      <TextField
            required
          id="email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
      />
      </FormControl>
      <FormControl fullWidth className={classes.FormControl} onChange={e => this.setState({ email: e.target.value })}value="email">   
      <TextField
            required
          id="email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
      />
      </FormControl>
      <button type = "submit">
            ADD
          </button>
      </form>
      </div>
    );
  }
}
TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(TextFields));


// // our delete method that uses our backend api 
//   // to remove existing database information
//   deleteFromDB = idTodelete => {
//     let objIdToDelete = null;
//     this.state.data.forEach(dat => {
//       if (dat.id == idTodelete) {
//         objIdToDelete = dat._id;
//       }
//     });

//     axios.delete("/api/deleteData", {
//       data: {
//         id: objIdToDelete
//       }
//     });
//   };

//   // our update method that uses our backend api
//   // to overwrite existing data base information
//   updateDB = (idToUpdate, updateToApply) => {
//     let objIdToUpdate = null;
//     this.state.data.forEach(dat => {
//       if (dat.id == idToUpdate) {
//         objIdToUpdate = dat._id;
//       }
//     });

//     axios.post("/api/updateData", {
//       id: objIdToUpdate,
//       update: { message: updateToApply }
//     });
//   };