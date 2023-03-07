import PropTypes from 'prop-types';
import { OptionsWrap, OptionBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <OptionsWrap>
    {options.map(option => (
      <OptionBtn
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
        option={option}
      >
        {option}
      </OptionBtn>
    ))}
  </OptionsWrap>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
