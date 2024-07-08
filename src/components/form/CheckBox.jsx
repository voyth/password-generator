import "./CheckBox.css";

export default CheckBox = ({ label, ...props }) => {
  return (
    <div className="form-control">
      <input type="checkbox" id={label} {...props} />
      <label htmlFor={label}>Includes {label}</label>
    </div>
  );
};
