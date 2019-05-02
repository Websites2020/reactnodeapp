import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        response: '',
        post: '',
        responseToPost: '',
        font: ''
      };
  this.handleChange = this.handleChange.bind(this);
  this.handleChange2 = this.handleChange2.bind(this);
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/world', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();
  //   this.setState({ responseToPost: body });
  // };

  handleChange(event) {
    this.setState({responseToPost: event.target.value});
  }

  handleChange2(event) {
    this.setState({font: event.target.value});
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Style Maker</h1>
      </header>

      <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Write your message:</strong>
          </p>
          <textarea
            rows="4"
            cols="50"
            type="text"
            // value={this.state.post}
            // onChange={e => this.setState({ post: e.target.value })}
            value={this.state.value}
            onChange={this.handleChange}
          >
          </textarea>
          <br/>
          <select name="fonts" onChange={this.handleChange2}>
              <option value="font0">Normal</option>
              <option value="font1">Cursive</option>
              <option value="font2">fun</option>
              <option value="font3">bold</option>
          </select>

          {/* <button type="submit">Submit</button> */}
        </form>
        <p className={this.state.font}>{this.state.responseToPost}</p>

    </div>
  );
}
}

export default App;
