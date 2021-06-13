import { Fragment } from 'react';

import classes from './ProgressBar.module.css';

const ProgressBar = (props) => {
  return (
    <Fragment>
      <header className={classes.Header}>
        <h1>Form Wizard</h1>
      </header>
      <div className={classes.Bar}>
        Current {props.currentStep} of Total {props.totalSteps} Steps.
      </div>
    </Fragment>
  );
};

export default ProgressBar;
