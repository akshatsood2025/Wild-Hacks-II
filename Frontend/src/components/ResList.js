import React, { Component } from "react";
import { x } from "./dummy";
import ResCard from "./ResCard";

class ResList extends Component {
  render() {
    return (
      <div className="reslist">
        <div className="resheading">Animals Near You</div>
        {x.map((res) => {
          return <ResCard res={res} />;
        })}
      </div>
    );
  }
}

export default ResList;
