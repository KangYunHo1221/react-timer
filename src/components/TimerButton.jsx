import styled from 'styled-components';

const TimerButton = styled.button`
  width: 142px;
  height: 44px;
  background: ${({ theme, color }) => theme.colors[color]};
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }

  &:disabled {
    filter: brightness(0.6);
    cursor: auto;
  }
`;

const SmallTimerbutton = styled(TimerButton)`
  width: 100px;
  height: 33px;
  font-size: 14px;

  &:hover {
    background: white;
    color: black;
  }
`;

export { TimerButton, SmallTimerbutton };
