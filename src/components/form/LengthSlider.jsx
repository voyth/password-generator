import "./LengthSlider.css";

export default LengthSlider = ({ value, ...props }) => {
  return (
    <div id="length-container">
      <span>{value}</span>
      <input
        type="range"
        id="length"
        min={0}
        max={30}
        value={value}
        {...props}
      />
    </div>
  );
};
