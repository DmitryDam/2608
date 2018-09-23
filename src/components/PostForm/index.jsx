import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PostForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };

  state = {
    inputValue1: "",
    inputValue2: ""
  };

  _handleInputChange1 = evt => {
    const value1 = evt.target.value;

    this.setState({
      inputValue1: value1
    });
  };
  _handleInputChange2 = evt => {
    const value2 = evt.target.value;

    this.setState({
      inputValue2: value2,
    });
  };

  _handleSubmit = evt => {
    evt.preventDefault();
    // onFormSubmit передается из APP как prop и тут вызывается.
    // Получает как аргументы this.state.inputValue1 this.state.inputValue2
    // <PostForm onFormSubmit={this.postRequest} /> => APP
    this.props.onFormSubmit(this.state.inputValue1,this.state.inputValue2);

    this.setState({
      inputValue1: "",
      inputValue2: ""
    });
    // this.form.reset();
    evt.target.reset();
  
  };

  render() {
    const { inputValue1,inputValue2 } = this.state;
    return (
      <form onSubmit={this._handleSubmit}>
        <input
          placeholder = "Input name"
          type="text"
          value1={inputValue1}
          onChange={this._handleInputChange1}
        />
        <input
          placeholder = "Input age"
          type="text"
          value2={inputValue2}
          onChange={this._handleInputChange2}
        />
        <br/>
        <button type="submit">submit</button>
      </form>
    );
  }
}
