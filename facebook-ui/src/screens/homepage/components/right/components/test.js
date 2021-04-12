import React, {Component} from 'react';


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
   };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);
    fetch('http://localhost:8000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
          <input type="text" value={this.state.value} name="password" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Test;
