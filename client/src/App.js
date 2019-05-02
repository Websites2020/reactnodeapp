import React from 'react';
import './App.css';
// import Bootstrap from 'bootstrap';

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
    <div>
      <header className="App-header">
        <h1>Style Maker</h1>
      </header>
      <div className="App container">
      <div class="row">
        <div class="col">
          <p>{this.state.response}</p>
        </div>
      </div>
        <form onSubmit={this.handleSubmit}>
        <div class="row">
          <div class="col">
            <p>
              <strong>Write your message:</strong>
            </p>
          </div>
        </div>
        <div class="row">
        <div class="col-md-3"></div>
          <div class="col-md-6">
          <div className="form-group">
          <textarea
            width="20%"
            className="form-control"
            autofocus
            rows="4"
            cols="50"
            type="text"
            // value={this.state.post}
            // onChange={e => this.setState({ post: e.target.value })}
            value={this.state.value}
            onChange={this.handleChange}
          >
          </textarea>
          </div>
          <div class="col-md-3"></div>
          </div>
        </div>
          <br/>
          <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
          <div className={"form-group"}>
          <select className="form-control" width="20%" name="fonts" onChange={this.handleChange2}>
              <option value="font0">Normal</option>
              {/* <option value="gloria">gloria</option> */}
              <option value="marker">marker</option>
              <option value="picture">picture</option>
              {/* <option value="satisfy">satisfy</option>
              <option value="courgette">courgette</option> */}
              <option value="lucky">lucky</option>
              {/* <option value="kaushan">kaushan</option> */}
              <option value="vibes">vibes</option>
              <option value="fredoka">fredoka</option>
              {/* <option value="nokora">nokora</option> */}
              <option value="sacramento">sacramento</option>
              <option value="bangers">bangers</option>
              <option value="schoolbell">schoolbell</option>
          </select>
          </div>
          </div>
          <div class="col-md-4"></div>
          </div>
          {/* <button type="submit">Submit</button> */}
        </form>
        <p className={this.state.font}>{this.state.responseToPost}</p>
      </div>
    </div>
  );
}
}

export default App;
