import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Chart from 'react-google-charts';
class Show extends Component {

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
        
        
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
      getDataFromDb = () => {
        fetch("/api/getData")
          .then(data => data.json())
          .then(res => this.setState({ data: res.data }));
      };
    
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

    return (
        <div>
<Chart
  width={'800px'}
  height={'400px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  pie_data={[
    ['data', 'Popularity'],
    ['Pepperoni', 33],
    ['Hawaiian', 26],
    ['Mushroom', 22],
    ['Sausage', 10], // Below limit.
    ['Anchovies', 9], // Below limit.
  ]}
  options={{
    title: 'Popularity of Types of Pizza',
    sliceVisibilityThreshold: 0.2, // 20%
  }}
  rootProps={{ 'data-testid': '7' }}
/>
        <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              RESPONSES
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Add Response</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Emal</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {data.map(dat =>
                  <tr>
                    <td><Link to={`/show/${dat.id}`}>{dat.id}</Link></td>
                    <td>{dat.email}</td>
                    <td>{dat.age}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Show;