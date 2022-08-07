import React from "react";
import Example from "./modal";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      show: false,
      isEmpty: false,
      AnimalLocation: [],
    };
  }
  hanleInputValue = (e) => {
    this.setState({
      value: e.target.value,
      show: false,
      isEmpty: false,
    });
  };
  handleClick = async (e) => {
    e.preventDefault();
    if (this.state.value == "") {
      return;
    }
    try {
      let res = await fetch(`http://localhost:5000/animal/${this.state.value}`);
      res = await res.json();
      this.setState({
        AnimalLocation: res,
        show: true,
        isEmpty: res.length == 0,
      });

      // this.setState({
      //   show: true,
      //   isEmpty: false,
      // });
    } catch (e) {
      console.log(e);
    }
    console.log("clicked");
  };
  handleShow = (v) => {
    this.setState({
      show: v,
    });
  };
  render() {
    return (
      <div className="mysearchbar">
        <input
          value={this.state.value}
          placeholder="Search For Animal"
          onChange={this.hanleInputValue}
        ></input>
        <button type="submit" onClick={this.handleClick}>
          Go
        </button>
        <Example
          isEmpty={this.state.isEmpty}
          show={this.state.show}
          setShow={this.handleShow}
          animalName={this.state.value}
          AnimalLocation={this.state.AnimalLocation}
        />
      </div>
    );
  }
}

export default Search;
