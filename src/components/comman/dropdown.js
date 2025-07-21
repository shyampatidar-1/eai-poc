const DropDown = ({
  labelName = "",
  lableclassName = "",
  name,
  options,
  value,
  handleSelect,
  className = "",
  showastrict = false,
  disabled = false,
  message = "",
}) => {
  return (
    <div className="dropdown-container">
      {labelName && <label className={lableclassName}>
        {labelName}
        {showastrict && <span className="text-danger">*</span>}
      </label>}
      <select
        name={name}
        className={`form-select ${className}`}
        value={value}
        onChange={handleSelect}
        aria-label={labelName}
        disabled={disabled}
      >
        <option value="">Select</option>
        {options?.length > 0 &&
          options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {/* Display a message if the dropdown is disabled */}
      {disabled && message && (
        <div
          className="disabled-message"
          style={{ color: "red", marginTop: "5px", fontSize: "8px" }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default DropDown;

