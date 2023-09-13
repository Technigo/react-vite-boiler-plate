// In React, a component is like a LEGO piece for building websites. Props are the special instructions I give to that LEGO piece to make it look or act differently each time I use it!
export const PropComponent = ({ name, age, birthplace, likesPizza }) => {
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
