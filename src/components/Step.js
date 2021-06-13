import Form from './UI/Form';

const Step = (props) => {
  const formFormat = [
    {
      firstName: {
        elementType: 'input',
        elementLabel: 'First name',
        elementConfig: {
          type: 'text'
        },
        validation: {
          required: true
        },
        errorMessage: 'Please enter the first name.'
      },
      lastName: {
        elementType: 'input',
        elementLabel: 'Last name',
        elementConfig: {
          type: 'text'
        },
        validation: {
          required: true
        },
        errorMessage: 'Please enter the last name.'
      },
      email: {
        elementType: 'input',
        elementLabel: 'Email',
        elementConfig: {
          type: 'email'
        },
        validation: {
          required: true,
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
          isNumeric: true
        },
        errorMessage: 'Phone number is invalid.'
      }
    },
    {
      streetNumber: {
        elementType: 'input',
        elementLabel: 'Street number',
        elementConfig: {
          type: 'text'
        },
        validation: {
          required: true,
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
      suburb: {
        elementType: 'input',
        elementLabel: 'Suburb',
        elementConfig: {
          type: 'text'
        },
        validation: {
          required: true
        },
        errorMessage: 'Please enter a suburb.'
      },
      postcode: {
        elementType: 'input',
        elementLabel: 'Postcode',
        elementConfig: {
          type: 'text'
        },
        validation: {
          required: true,
          minLength: 4,
          maxLength: 4,
          min: 800,
          max: 7999,
          isNumeric: true
        },
        errorMessage: 'Please enter a valid postcode.'
      }
    }
  ];


  if (props.currentStep >= 1 && props.currentStep <= formFormat.length)
    return (
      <div key={"step-"+props.currentStep}>
        <Form formFormat={formFormat[props.currentStep - 1]} afterSubmit={props.onCompleteStep} />
      </div>
    );
};
export default Step;