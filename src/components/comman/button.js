import Spinner from 'react-bootstrap/Spinner';
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
        {notShowLoading ? "" : isLoading && <Spinner animation="border" size="sm" className='me-2' />

        }
        {label}

        {icon && (
          <img className={` ms-2`} src={icon} alt="button_icon" height={14} />
        )}
      </button >
    </>
  );
};

export default Button;
