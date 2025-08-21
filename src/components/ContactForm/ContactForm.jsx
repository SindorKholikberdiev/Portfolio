// Import React and the 'useState' hook from the 'react' library.
// 'useState' is used for managing state within a functional component.
import React, { useState } from "react";

// Import the CSS module for this component.
// This ensures styles are scoped locally and don't conflict with other components.
import styles from "./ContactForm.module.css";

// Define the ContactForm functional component.
// It accepts 'name' and 'onChangeName' as props from its parent component (e.g., App.js).
// This is known as a "controlled component" because the parent controls the 'name' state.
const ContactForm = ({ name, onChangeName }) => {
  // Initialize state for the form fields that are managed *within* this component.
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("hire"); // Set a default topic.

  // This function resets all form fields to their initial state.
  const handleReset = () => {
    onChangeName(""); // Calls the function passed via props to reset the name in the parent component.
    setEmail("");
    setMessage("");
    setTopic("hire");
  };

  // This function is called when the form is submitted.
  const handleSubmit = (event) => {
    // Prevents the default browser action of reloading the page on form submission.
    event.preventDefault();

    // Gathers all form data (from props and local state) into a single object.
    const submittedData = { name, email, message, topic };

    // Logs the submitted data to the console (this simulates sending it to a server).
    console.log("Form data submitted:", submittedData);

    // Shows a simple confirmation message to the user.
    alert("Thank you for your message!");

    // Resets the form fields after successful submission for a better user experience.
    handleReset();
  };

  // The JSX returned by the component, which defines its UI (User Interface).
  return (
    <div className={styles.contactFormContainer}>
      <h3>Send me a message</h3>
      {/* The form element. The 'onSubmit' event is handled by our 'handleSubmit' function. */}
      {/* 'noValidate' disables default browser validation, allowing for custom validation if needed. */}
      <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
        {/* Name Field - This input is fully controlled by the parent component. */}
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            id="name" // Links the label to the input for accessibility.
            type="text"
            value={name} // The value is read directly from the 'name' prop.
            onChange={(e) => onChangeName(e.target.value)} // Any change calls the 'onChangeName' function from props.
            placeholder="Your full name"
            required // HTML attribute to mark this field as mandatory.
          />
        </div>

        {/* Email Field - This input is controlled by this component's local state. */}
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@example.com"
            required
          />
        </div>

        {/* Topic Selection Field */}
        <div className={styles.field}>
          <label htmlFor="topic">Topic</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            id="topic"
            required
          >
            <option value="hire">Hire me</option>
            <option value="portfolio">Portfolio feedback</option>
            <option value="collab">Collaboration</option>
          </select>
        </div>

        {/* Message Text Area */}
        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5" // Sets the initial visible height of the textarea.
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        {/* Button Group */}
        <div className={styles.buttonGroup}>
          {/* The submit button. 'type="submit"' triggers the form's onSubmit event. */}
          <button type="submit" className={styles.btn}>
            Send Message
          </button>
          {/* The reset button. 'type="button"' prevents it from submitting the form. */}
          {/* We combine two classes: a general 'btn' class and a specific 'btnReset' class. */}
          <button
            type="button"
            onClick={handleReset}
            className={`${styles.btn} ${styles.btnReset}`}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

// Export the component to make it available for use in other parts of the application.
export default ContactForm;
