export const Text = ({ text }) => {
  return (
    <div>
      <p>
        I am a component using props displaying the dynamic string value -{" "}
        {text}
      </p>
    </div>
  );
};
