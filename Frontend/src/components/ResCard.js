import React, { Component } from "react";
class ResCard extends Component {
  render() {
    const { res } = this.props;
    return (
      <div className="rescard">
        <img src={res.img} className="resimg"></img>
        <div className="resdesc">
          <div className="reshead">{res.name}</div>
          <div className="rescontent">{res.description}</div>
        </div>
        <div className="resloc">
          <img
            className="locimg"
            src="https://cdn-icons-png.flaticon.com/512/447/447031.png"
          ></img>
          {res.location}
        </div>
      </div>
    );
  }
}

export default ResCard;
