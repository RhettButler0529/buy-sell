import "./input.styles.scss";

const Input = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {label && (
        <label
          className={`form-input-label ${
            otherProps?.value?.length ? "shrink" : ""
          } `}
        >
          {label}
        </label>
      )}
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default Input;
