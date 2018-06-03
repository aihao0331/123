import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import Item from "./Item.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Netflix Page</h1>
        <h2>My List</h2>
        <div className="mylist">
          {this.props.mylist.mylist.map((element, index) => {
            return <Item data={element} key={index} btn="remove" />;
          })}
        </div>
        <h2>Recommendation</h2>
        <div className="recommendation">
          {this.props.mylist.recommendation.map((element, index) => {
            return <Item data={element} key={index} btn="add" />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylist: state.mylist
  };
};

export default connect(mapStateToProps)(App);
