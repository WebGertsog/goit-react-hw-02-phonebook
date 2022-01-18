import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Label, Input, FormBtn } from "./ContactForm.styled";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  // Hand leChange
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  // Handle Submit
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddNewContact(this.state);
    this.reset();
  };

  // Reset
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    const nameID = nanoid();
    const numberID = nanoid();

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Label htmlFor={nameID}>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              id={nameID}
            />
          </Label>
          <Label htmlFor={numberID}>
            Number
            <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              id={numberID}
            />
          </Label>
          <FormBtn>Add contact</FormBtn>
        </form>
      </>
    );
  }
}

export default ContactForm;
