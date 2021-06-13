import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import FormSummary from './components/FormSummary';
import Step from './components/Step';

function App() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [fields, setFields] = useState({});
  const stepOnCompleteHandler = (currentFields) => {
    setStep((currentStep) => {
      return currentStep + 1;
    });
    setFields((previousFileds) => {
      return { ...previousFileds, ...currentFields };
    });
  }
  const restartHandler = () => {
    setStep(1);
  }

  return (
    <React.Fragment>
      <ProgressBar currentStep={step} totalSteps={totalSteps} />
      {step !== 3 && <Step currentStep={step} onCompleteStep={stepOnCompleteHandler} />}
      {step === 3 && <FormSummary onClickDone={restartHandler} fields={fields} />}
    </React.Fragment>
  );
}

export default App;
