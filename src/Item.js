import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "./actions";

class Item extends Component {
  handleClick = () => {
    if (this.props.btn === 'remove') {
      this.props.dispatch(actions.removeItem(this.props.data.id));
    } else {
      this.props.dispatch(actions.addItem(this.props.data));
    }
  }

  render() {
    const { title, img } = this.props.data;
    return (
      <div>
        <div>{title}</div>
        <img src={img} />
        <button onClick={this.handleClick}>{this.props.btn}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylist: state.mylist
  };
};

export default connect(mapStateToProps)(Item);
