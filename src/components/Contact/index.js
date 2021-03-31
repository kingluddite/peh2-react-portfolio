import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formState;

  // update form fields when user types into them
  function handleChange(event) {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("You're email is invalid");
      } else {
        setErrorMessage('');
      }
    } else if (!event.target.value.length) {
      setErrorMessage(`${event.target.name} is required.`);
    } else {
      setErrorMessage('');
    }
    if (!errorMessage) {
      // using computed property names here: [event.target.name]
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  }

  return (
    <section>
      <h1>Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="named">
            Name
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </label>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
