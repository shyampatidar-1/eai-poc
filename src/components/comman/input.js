
const INPUTFIELD = ({
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
  showLabel = true,
  onRightIconClick = () => { },
  ...rest
}) => {


  return (
    <>
      {showLabel && (<label className={`${lableClassName}`} htmlFor="username">
        {labelName} {showAsterisk && <span className="text-danger">*</span>}
      </label>)}
      <div
        className={`input-group flex-row" ${disabled ? "userdisabled" : ""} `}
      >
        <input
          type={type}
          name={name}
          value={value}
          className={`form-control  ${className} ${error && "border-danger bg-error"
            }`}
          placeholder={placeHolder}
          onChange={handleChange}
          autoComplete="off"
          autoFocus={false}
          disabled={disabled}
          accept={accept}
          {...rest}
        />
        {showIcon && (
          <span className={`input-group-text border-radius_input ${disabled ? "userdisabled" : ""}`}>
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

export default INPUTFIELD;
