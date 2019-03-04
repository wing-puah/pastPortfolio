import styled from 'styled-components';
import theme from './theme';

const Button = styled.button`
  background: ${theme.palette.secondary.dark};
  width: ${props => props.width || '40px'};
  height: ${props => props.height || '40px'};
  position: relative;
  display: flex;
  justify-content: center;

  &:hover {
    background: ${theme.palette.secondary.main}
  }
`;

const ButtonRound = styled(Button)`
  border-radius: 50%;
  width: 30px;
  height: 30px;

  i {
    color: white;
    font-size: 20px;
  }
`;

export { Button, ButtonRound };
