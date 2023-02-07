import React from "react";
import Resume from './resume'
import PropTypes from "prop-types";

import "./index.css";

function ResumeApp(props) {
  
  return (
    <Resume userDetails={props.userDetails} />
  );
}

Resume.propTypes = {
  userDetails: PropTypes.any
};

export default ResumeApp;
