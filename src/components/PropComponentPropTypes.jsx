import PropTypes from "prop-types";

export const PropComponentPropTypes = ({
  name,
  age,
  birthplace,
  likesPizza,
}) => {
  return (
    <div className="bioComp">
      <h2>My little Bio:</h2>
      <p>My name is {name}</p>
      <p>I am {age} year's old</p>
      <p>I was born in {birthplace}</p>
      <strong>Do you like pineapple pizza?</strong>
      {likesPizza ? (
        <p>I like pineapple pizza! 🍍🍕</p>
      ) : (
        <p>No, I do not like pineapple pizza! 🍍🍕</p>
      )}
    </div>
  );
};

PropComponentPropTypes.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  birthplace: PropTypes.string.isRequired,
  likesPizza: PropTypes.bool,
};

// In this code, propTypes is a way to ensure that the PropComponentPropTypes component receives the right type of data for its props. Here's a simple breakdown:

// name: Expected to be a string and is required.
// age: Expected to be a number and is required.
// birthplace: Expected to be a string and is required.
// likesPizza: Expected to be a boolean (either true or false). It's not marked as required, so it's optional.
// If the component doesn't receive the expected type of data for these props, propTypes will give a warning in the console during development. This helps catch mistakes and ensures the component gets the right kind of information to work properly.

// IF you want to see this error on the console, please proceed to the App.jsx file and remove the name prop with the stringValue "Jennie" within the component PropComponentPropTypes and see the message on the console
