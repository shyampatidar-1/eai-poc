
const Button = ({
  label,
  onClick,
  isLoading,
  icon,
  className,
  type,
  notShowLoading = false
}) => {
  return (
    <>
      <button
        type={type}
        className={`${className}`}
        onClick={onClick}
        disabled={isLoading}
      >
        {notShowLoading ? "" : isLoading && <i className={`fa fa-spinner fa-spin me-2 `}></i>}
        {label}
        {icon && (
          <img className={` ms-2`} src={icon} alt="button_icon" height={14} />
        )}
      </button>
    </>
  );
};

export default Button;
