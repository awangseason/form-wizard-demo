import Button from './UI/Button';
import classes from './FormSummary.module.css';

const FormSummary = (props) => {

  return (
    <section>
      <div className={classes.Wrapper}>
        {Object.keys(props.fields).map((key) => {
          return (
            <div key={"field-" + key} className={classes.Field}>
              <label className={classes.Label}>{props.fields[key].label}</label> : <div className={classes.Value}>{props.fields[key].value}</div>
            </div>)
        })
        }
      </div>
      <Button clicked={props.onClickDone} btnType="Success">DONE</Button>
    </section>
  );
};

export default FormSummary;
