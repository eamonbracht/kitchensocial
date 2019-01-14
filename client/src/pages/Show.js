import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            intervalIsSet: false,
            idToDelete: null,
            idToUpdate: null,
            objectToUpdate: null,
        };
    }
    

      componentDidMount() {
        axios.get('/api/'+this.props.match.params.id)
          .then(res => {
            this.setState({ data: res.data });
            console.log(this.state.book);
          });
      }
      // never let a process live forever 
      // always kill a process everytime we are done using it
    //   componentWillUnmount() {
    //     if (this.state.intervalIsSet) {
    //       clearInterval(this.state.intervalIsSet);
    //       this.setState({ intervalIsSet: null });
    //     }
    //   }

// our delete method that uses our backend api 
  // to remove existing database information
  delete(id){
    console.log(id);
    axios.delete('/api/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
          const { data } = this.state;

    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            {/* <h3 class="panel-title"> */}
            <h3>
              {this.state.data._id}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/Responses"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span><i class="fas fa-arrow-left"></i>Back To List</Link></h4>
            <dl>
              <dt>ID:</dt>
              <dd>{data._id}</dd>
              <dt>Email:</dt>
              <dd>{data.email}</dd>
              <dt>Gender:</dt>
              <dd>{data.gender}</dd>
              <dt>Student</dt>
              <dd>{data.student}</dd>
              <dt>Dining Plan:</dt>
              <dd>{data.dining_plan}</dd>
              <dt>Income:</dt>
              <dd>{data.income}</dd>
              <dt>Meals cooked per week:</dt>
              <dd>{data.cook_per_week}</dd>
              <dt>Delivery per week</dt>
              <dd>{data.delivery_per_week}</dd>
              <dt>Meals bought per week:</dt>
              <dd>{data.buy_per_week}</dd>
              <dt>Meal most often eaten at restaurant:</dt>
              <dd>{data.meal_of_day_restaurant}</dd>
              <dt>Meal most often cooked at home:</dt>
              <dd>{data.kind_meal_cooked_home}</dd>
              <dt>Reason for not cooking at home:</dt>
              <dd>{data.reason_dont_cook}</dd>
              <dt>Other reason for not cooking at home:</dt>
              <dd>{data.reason_dont_cook_other}</dd>
              <dt>Cook if didn't have to buy, prep or clean ingredients:</dt>
              <dd>{data.clean_ingred_cook_often}</dd>
              <dt>Would videos make them feel more confident when cooking:</dt>
              <dd>{data.cook_with_videos}</dd>
              <dt>What they like to cook:</dt>
              <dd>{data.cooking_social}</dd>
              <dt>Amount willing to pay for a meal:</dt>
              <dd>{data.pay_per_meal}</dd>
              <dt>Amount spent on groceries per month:</dt>
              <dd>{data.spend_groceries}</dd>
            </dl>
            {/* <Link to={`/edit/${this.state.data.id}`} class="btn btn-success">Edit</Link>&nbsp; */}
            <button onClick={this.delete.bind(this, this.state.data.id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;