import styled from 'styled-components';

export const OptionsWrap = styled.div`
  /* background-color: aqua; */
  display: flex;
  justify-content: space-around;
  width: 248px;
`;
export const OptionBtn = styled.button`
  padding: 8px;
  width: 68px;
  border: none;
  border-radius: 4px;

  background-color: ${props => {
    switch (props.option) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'grey';
      case 'bad':
        return 'red';
      default:
        return 'transparent';
    }
  }};

  font-weight: 500;
  color: white;

  cursor: pointer;
`;
