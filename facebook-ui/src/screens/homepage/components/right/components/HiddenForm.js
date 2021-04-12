import React, {Component} from 'react';


class HiddenForm extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
    date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    this.state = {
      create_time: date,
      content: '' ,
      user_id: 'Cuong Nguyen Nhat'
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    fetch('http://localhost:8000/posts/', {
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
          Content:
          <input type="text" value={this.state.value} name="content" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default HiddenForm;
