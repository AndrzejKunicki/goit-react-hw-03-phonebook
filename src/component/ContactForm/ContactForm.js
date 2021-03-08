import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId} className={styles.label}>
          Name{" "}
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
            id={this.nameInputId}
            className={styles.input}
          />
        </label>
        <label htmlFor={this.numberInputId} className={styles.label}>
          Number{" "}
          <input
            type="number"
            value={number}
            name="number"
            onChange={this.handleChange}
            id={this.numberInputId}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.addBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
