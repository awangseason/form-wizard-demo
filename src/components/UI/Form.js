import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import classes from './Form.module.css';

const Form = (props) => {
    const defaultFields = {};
    for (let key in props.formFormat) {
        defaultFields[key] = {
            value: '',
            valid: Object.keys(props.formFormat[key]).length === 0,
            touched: false
        };
    }
    const [fields, updateFields] = useState(defaultFields);
    const [formIsValid, updateFormIsValid] = useState(false);

    const inputChangedHandler = (event, inputIdentifier) => {
        const newValue = event.target.value;
        const newValid = checkValidity(newValue, props.formFormat[inputIdentifier].validation);
        const newTouched = true;
        const newFields = {...fields};
        newFields[inputIdentifier] = {
            value: newValue,
            valid: newValid,
            touched: newTouched
        };
        let newFormIsValid = true;
        for (let inputIdentifier in fields) {
            newFormIsValid = newFields[inputIdentifier].valid && newFormIsValid;
        }
        updateFields(newFields);
        updateFormIsValid(newFormIsValid);

    };
    const checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.min) {
            isValid = value >= rules.min && isValid;
        }

        if (rules.max) {
            isValid = value <= rules.max && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        if (rules.isPhone) {
            const pattern1 = /^0[2|3|4|7|8]\d{8}$/;
            const pattern2 = /^1[3|8]00\d{6}$/;
            const pattern3 = /^13\d{4}$/;
            isValid = (pattern1.test(value) || pattern2.test(value) 
                      || pattern3.test(value)) && isValid;
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let key in props.formFormat) {
            formData[key] = {
                label: props.formFormat[key].elementLabel,
                value: fields[key].value
            };
        }

        props.afterSubmit(formData);
        updateFields(defaultFields);
        updateFormIsValid(false);
    };

    const formElementsArray = [];
    for (let key in props.formFormat) {
        formElementsArray.push({
            id: key,
            config: props.formFormat[key]
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.Wrapper}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    label={formElement.config.elementLabel}
                    errorMessage={formElement.config.errorMessage}
                    elementConfig={formElement.config.elementConfig}
                    value={fields[formElement.id].value}
                    invalid={!fields[formElement.id].valid}
                    shouldValidate={formElement.config.validation}
                    touched={fields[formElement.id].touched}
                    changed={(event) => inputChangedHandler(event, formElement.id)} />
            ))}
            </div>
            <Button btnType="Success" disabled={!formIsValid}>CONTINUE</Button>
        </form>
    );
}
export default Form;
