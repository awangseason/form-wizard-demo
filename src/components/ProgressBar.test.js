import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  test('renders bar for the second step', () => {
    render(<ProgressBar currentStep={2} totalSteps={3}/>);
    const barTextElement = screen.getByText('Current 2 of Total 3 Steps.');
    expect(barTextElement).toBeInTheDocument();
  });
});
