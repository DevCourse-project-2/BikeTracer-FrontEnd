import styled from '@emotion/styled';

import color from '../../../styles/color';
import typo from '../../../styles/typo';

export const styledRegisterButton = styled.button`
  width: 304px;
  height: 40px;
  font: ${typo.Main.Body.SemiBold}
  background-color: ${color.BLACK};
  color: white;
  border-radius: 12px;
  cursor: pointer;
  z-index: 5;

  &:hover {
    background-color: ${color.GY[800]};
  }
`;
