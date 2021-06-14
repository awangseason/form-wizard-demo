import { render, screen } from '@testing-library/react';
import FormSummary from './FormSummary';

describe('FormSummary component', () => {
  const restartHandler = () => {
  }
  const fields = {
    firstName: {
      label: 'First name',
      value: 'Yi'
    },
    lastName: {
      label: 'Last name',
      value: 'Wang'
    }
  }
  test('renders form fields', () => {
    render(<FormSummary onClickDone={restartHandler} fields={fields} />);
    expect(screen.getByText('First name : Yi', false)).toBeInTheDocument();
    expect(screen.getByText('Last name : Wang', false)).toBeInTheDocument();
  });
  test('tests button function', () => {
    render(<FormSummary onClickDone={restartHandler} fields={fields} />);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });
});
