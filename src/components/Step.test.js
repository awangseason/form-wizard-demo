import { render, screen } from '@testing-library/react';
import Step from './Step';

describe('Step component', () => {
  const stepOnCompleteHandler = () => {
  }

  test('renders for Step 1', () => {
    render(<Step currentStep={1} onCompleteStep={stepOnCompleteHandler} />);
    expect(screen.getByTestId('firstName')).toBeInTheDocument();
    expect(screen.getByTestId('lastName')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('phone')).toBeInTheDocument();
  });
  test('renders for Step 2', () => {
    render(<Step currentStep={2} onCompleteStep={stepOnCompleteHandler} />);
    expect(screen.getByTestId('streetNumber')).toBeInTheDocument();
    expect(screen.getByTestId('streetName')).toBeInTheDocument();
    expect(screen.getByTestId('streetType')).toBeInTheDocument();
    expect(screen.getByTestId('suburb')).toBeInTheDocument();
    expect(screen.getByTestId('postcode')).toBeInTheDocument();
  });
});
