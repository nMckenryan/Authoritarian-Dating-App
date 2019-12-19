import React, { Component } from "react";

class PopupWindow extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popInner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default PopupWindow;
