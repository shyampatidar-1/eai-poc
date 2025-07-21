
const NumberInput = ({
  className,
  disabled,
  type,
  value,
  name,
  id,
  placeHolder,
  handleChange,
  error,
  labelName,
  required = true,
  iconsrc = "",
  showIcon = false,
  showRightIcon = false,
  rightIconSrc = "",
  showAsterisk = true,
  lableClassName = "",
  accept = "",
  onRightIconClick = () => { },
  ...rest
}) => {


  return (
    <>
      <label className={`${lableClassName}`} htmlFor="username">
        {labelName} {showAsterisk && <span className="text-danger">*</span>}
      </label>
      <div
        className={`input-group flex-row ${disabled ? "userdisabled" : ""} `}
      >
        <input
          type="number"
          maxLength={15}
          name={name}
          value={value}
          className={`form-control  ${className} ${error && "border-danger bg-error"
            }`}
          placeholder={placeHolder}
          onChange={handleChange}
          disabled={disabled}
          accept={accept}
          {...rest}
          onKeyDown={(e) => {
            if (["e", "E", "+", "-", "."].includes(e.key)) {
              e.preventDefault();
            }
          }}
        />
        {showIcon && (
          <span className="input-group-text bg-white border-radius_input">
            <img src={iconsrc} alt="icon" />
          </span>
        )}
        {showRightIcon && (
          <span
            className="input-group-text bg-white border-radius_input"
            onClick={onRightIconClick}
            style={{ cursor: "pointer" }}
          >
            <img src={rightIconSrc} alt="toggle-icon" />
          </span>
        )}
      </div>
    </>
  );
};

export default NumberInput;
