import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  static getDerivedStateFromProps = (props, state) => {
    console.log("derived called");
    return { name: props.name };
  };
  update = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    console.log("Render called");
    return (
      <div>
        <p>name : {this.state.value}</p>
        <input value={this.state.name} onChange={this.update} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
