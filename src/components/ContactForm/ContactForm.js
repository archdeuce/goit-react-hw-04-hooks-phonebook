import { useState } from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import './ContactForm.css';

export default function ContactForm({ onCreate }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeHandler = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    if (name === '' || number === '') {
      alert('You need to specify the name and phone number.');
      return;
    }

    onCreate({ id: generate(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className="ContactForm__form" action="URL" onSubmit={submitHandler}>
        <label className="ContactForm__label" htmlFor="nameId">
          Name:
        </label>
        <input
          className="ContactForm__input"
          id="telId"
          name="name"
          type="text"
          autoComplete="off"
          value={name}
          onChange={changeHandler}
        ></input>
        <label className="ContactForm__label" htmlFor="telId">
          Number:
        </label>
        <input
          className="ContactForm__input"
          id="telId"
          name="number"
          type="tel"
          autoComplete="off"
          value={number}
          onChange={changeHandler}
        ></input>
        <button className="ContactForm__button" type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
