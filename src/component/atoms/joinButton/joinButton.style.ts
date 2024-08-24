import styled from '@emotion/styled';

import color from '../../../styles/color';
import typo from '../../../styles/typo';

export const styledJoinButton = styled.button`
  width: 158px;
  height: 42px;
  font: ${typo.Main.Body.SemiBold}
  background-color: ${color.PRIMARY_LIGHT};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  z-index: 5;

  &:hover {
    background-color: ${color.PRIMARY_DARK};
  }
`;
