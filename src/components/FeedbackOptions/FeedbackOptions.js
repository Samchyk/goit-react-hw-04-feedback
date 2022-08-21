import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, leaveFeedback }) {
  return (
    <div className={s.container}>
      {options.map(name => {
        return (
          <div className={s.btn} key={name}>
            <button
              onClick={() => leaveFeedback(name)}
              type="button"
              name={name}
            >
              {name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  leaveFeedback: PropTypes.func.isRequired,
};
