import { render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Form field validation', () => {
  const onCompleteStep = () => {
  }
  const formFormat = {
    email: {
      elementType: 'input',
      elementLabel: 'Email',
      elementConfig: {
        type: 'email'
      },
      validation: {
        isEmail: true
      },
      errorMessage: 'Please enter a valid email.'
    },
    phone: {
      elementType: 'input',
      elementLabel: 'Phone',
      elementConfig: {
        type: 'text'
      },
      validation: {
        isPhone: true,
      },
      errorMessage: 'Phone number is invalid.'
    },
    streetNumber: {
      elementType: 'input',
      elementLabel: 'Street number',
      elementConfig: {
        type: 'text'
      },
      validation: {
        isNumeric: true
      },
      errorMessage: 'Please enter a valid street number.'
    },
    streetName: {
      elementType: 'input',
      elementLabel: 'Street name',
      elementConfig: {
        type: 'text'
      },
      validation: {
        required: true
      },
      errorMessage: 'Please enter a street name.'
    },
    streetType: {
      elementType: 'select',
      elementLabel: 'Street type',
      elementConfig: {
        options: [
          { value: '', displayValue: '-' },
          { value: 'Cl', displayValue: 'Cl' },
          { value: 'Ct', displayValue: 'Ct' },
          { value: 'St', displayValue: 'St' },
          { value: 'Pl', displayValue: 'Pl' },
          { value: 'Ave', displayValue: 'Ave' }
        ]
      },
      validation: {
        required: true
      },
      errorMessage: 'Please choose a street type.'
    },
    postcode: {
      elementType: 'input',
      elementLabel: 'Postcode',
      elementConfig: {
        type: 'text'
      },
      validation: {
        minLength: 4,
        maxLength: 4,
        min: 800,
        max: 7999,
        isNumeric: true
      },
      errorMessage: 'Please enter a valid postcode.'
    }
  }

  test('test validation: required', () => {
    render(<Form formFormat={formFormat} afterSubmit={onCompleteStep} />);
    const intputField = screen.getByTestId('streetName');
    expect(intputField).toBeInTheDocument();
    expect(screen.getByText('Please enter a street name.')).toHaveClass('Hidden');
    userEvent.type(intputField, 'Something');
    expect(screen.getByText('Please enter a street name.')).toHaveClass('Hidden');
    userEvent.clear(intputField);
    expect(screen.getByText('Please enter a street name.')).not.toHaveClass('Hidden');
  });

  test('test validation: isEmail', () => {
    render(<Form formFormat={formFormat} afterSubmit={onCompleteStep} />);
    const intputField = screen.getByTestId('email');
    expect(intputField).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid email.')).toHaveClass('Hidden');
    userEvent.type(intputField, 'yi@hotmail.com');
    expect(screen.getByText('Please enter a valid email.')).toHaveClass('Hidden');
    userEvent.clear(intputField);
    userEvent.type(intputField, 'ahotmail.com');
    expect(screen.getByText('Please enter a valid email.')).not.toHaveClass('Hidden');
  });

  test('test validation: isPhone', () => {
    render(<Form formFormat={formFormat} afterSubmit={onCompleteStep} />);
    const intputField = screen.getByTestId('phone');
    expect(intputField).toBeInTheDocument();
    expect(screen.getByText('Phone number is invalid.')).toHaveClass('Hidden');
    userEvent.type(intputField, '0400000000');
    expect(screen.getByText('Phone number is invalid.')).toHaveClass('Hidden');
    userEvent.clear(intputField);
    userEvent.type(intputField, '0700770000');
    expect(screen.getByText('Phone number is invalid.')).toHaveClass('Hidden');
    userEvent.clear(intputField);
    userEvent.type(intputField, '1800123456');
    expect(screen.getByText('Phone number is invalid.')).toHaveClass('Hidden');
    userEvent.clear(intputField);
    userEvent.type(intputField, '131234');
    expect(screen.getByText('Phone number is invalid.')).toHaveClass('Hidden');
    userEvent.type(intputField, '13');
    expect(screen.getByText('Phone number is invalid.')).not.toHaveClass('Hidden');
    userEvent.clear(intputField);
    userEvent.type(intputField, '1700770000');
    expect(screen.getByText('Phone number is invalid.')).not.toHaveClass('Hidden');
  });

  test('test validation: isNumeric', () => {
    render(<Form formFormat={formFormat} afterSubmit={onCompleteStep} />);
    const intputField = screen.getByTestId('streetNumber');
    expect(intputField).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid street number.')).toHaveClass('Hidden');
    userEvent.type(intputField, '666');
    expect(screen.getByText('Please enter a valid street number.')).toHaveClass('Hidden');
    userEvent.clear(intputField);
    userEvent.type(intputField, '666A');
    expect(screen.getByText('Please enter a valid street number.')).not.toHaveClass('Hidden');
  });

  test('test validation: Select', () => {
    render(<Form formFormat={formFormat} afterSubmit={onCompleteStep} />);
    const intputField = screen.getByTestId('streetType');
    expect(intputField).toBeInTheDocument();
    expect(screen.getByText('Please choose a street type.')).toHaveClass('Hidden');
    userEvent.selectOptions(intputField, 'Cl');
    expect(screen.getByText('Please choose a street type.')).toHaveClass('Hidden');
    userEvent.selectOptions(intputField, '');
    expect(screen.getByText('Please choose a street type.')).not.toHaveClass('Hidden');
  });

  test('test validation: postcode', () => {
    render(<Form formFormat={formFormat} afterSubmit={onCompleteStep} />);
    const intputField = screen.getByTestId('postcode');
    expect(intputField).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid postcode.')).toHaveClass('Hidden');
    userEvent.type(intputField, '0800');
    expect(screen.getByText('Please enter a valid postcode.')).toHaveClass('Hidden');
    userEvent.clear(intputField);
    userEvent.type(intputField, '7999');
    expect(screen.getByText('Please enter a valid postcode.')).toHaveClass('Hidden');
    userEvent.clear(intputField);
    userEvent.type(intputField, '8000');
    expect(screen.getByText('Please enter a valid postcode.')).not.toHaveClass('Hidden');
    userEvent.clear(intputField);
    userEvent.type(intputField, 'A000');
    expect(screen.getByText('Please enter a valid postcode.')).not.toHaveClass('Hidden');
  });
});

describe('Submit button function', () => {
  const onCompleteStep = () => {
  };
  const formFormat = {
    email: {
      elementType: 'input',
      elementLabel: 'Email',
      elementConfig: {
        type: 'email'
      },
      validation: {
        isEmail: true
      },
      errorMessage: 'Please enter a valid email.'
    },
    postcode: {
      elementType: 'input',
      elementLabel: 'Postcode',
      elementConfig: {
        type: 'text'
      },
      validation: {
        minLength: 4,
        maxLength: 4,
        min: 800,
        max: 7999,
        isNumeric: true
      },
      errorMessage: 'Please enter a valid postcode.'
    }
  };

  test('Button is not clickable if there is any field is invalid', () => {
    render(<Form formFormat={formFormat} afterSubmit={onCompleteStep} />);
    const button =screen.getByRole('button');
    expect(button).toBeDisabled();
    const intputField1 = screen.getByTestId('email');
    userEvent.type(intputField1, 'yi@hotmail.com');
    const intputField2 = screen.getByTestId('postcode');
    userEvent.type(intputField2, '8999');
    expect(button).toBeDisabled()
  });

  test('Button is clickable if all fields are valid', () => {
    render(<Form formFormat={formFormat} afterSubmit={onCompleteStep} />);
    const button = screen.getByRole('button')
    const intputField1 = screen.getByTestId('email');
    userEvent.type(intputField1, 'yi@hotmail.com');
    const intputField2 = screen.getByTestId('postcode');
    userEvent.type(intputField2, '7999');
    expect(button).not.toBeDisabled();
  });

}

);