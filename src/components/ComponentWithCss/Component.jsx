import "./style.css";

export const Component = () => {
  return (
    <div className="background">
      <p>
        In this boiler plate, we've organized things neatly so that each
        component is descriptive in nature. This component lives inside this
        folder, not only will you find the JSX file for the component, but
        there's also a separate CSS file just for its styles! This way, it's
        super easy to find and tweak the look of that specific component without
        getting lost in a sea of styles. Think of it like giving each component
        its own wardrobe, so its outfits (styles) are always right there when
        you need them!
      </p>
      <p>
        <strong>
          "In React, we use className instead of class for CSS styling due to
          the way JSX integrates with JavaScript. In JavaScript, the word class
          is a reserved keyword used for defining classes (a feature in the
          language). To avoid conflicts and confusion between defining a
          JavaScript class and specifying a CSS class, React's JSX uses the term
          className. This ensures that when the JSX is transpiled to pure
          JavaScript, there are no ambiguities or issues related to the use of
          the word class."
        </strong>
      </p>
    </div>
  );
};
