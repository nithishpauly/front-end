import axios from "axios";
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>classtype</th>
          <th>ph</th>
          <th>age</th>
          <th>PassengerName</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.classtype}</td>
            <td>{user.ph}</td>
            <td>{user.age}</td>
            <td>{user.passengerName}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Showdata;