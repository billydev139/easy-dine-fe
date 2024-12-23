import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  children,
  icon,
  onClick,
  type,
  className = "",
  to,
  background,
  navigate,
  textcolor,
  bordercolor,
  textSize
}) => {
  const classes = `  py-2 px-3 ${
    background ? background : "bg-white"
  }  rounded ${textSize? textSize:"text-base"}  ${
    textcolor ? textcolor : "text-primaryBlack"
  } font-medium   ${
    bordercolor ? bordercolor : "border-primaryBlack " 
  }  `;

  if (navigate) {
    return (
      <Link to={to} className={`${className}  ${classes}`}>
        <>{icon}</>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`${className}  ${classes}`}
        onClick={onClick}
        type={type}
      >
        {children}
        <>{icon}</>
      </button>
    );
  }
};

Button.propTypes = {
  background: PropTypes.any,
  bordercolor: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string,
  textSize:PropTypes.any,
  hoverbg: PropTypes.any,
  icon: PropTypes.any,
  navigate: PropTypes.any,
  onClick: PropTypes.any,
  textcolor: PropTypes.any,
  to: PropTypes.any,
  type: PropTypes.any,
};

export default Button;
