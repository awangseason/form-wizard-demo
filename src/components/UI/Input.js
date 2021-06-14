import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    const errorClasses = [classes.ErrorMessage];

    if (props.invalid && Object.keys(props.shouldValidate).length !== 0 && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    else {
        errorClasses.push(classes.Hidden);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                data-testid={props.fieldName}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    data-testid={props.fieldName}
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            <div className={errorClasses.join(' ')}>{props.errorMessage}</div>
        </div>
    );

};

export default input;