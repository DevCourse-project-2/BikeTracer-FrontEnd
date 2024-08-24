import styled from '@emotion/styled';

import color from '../../../styles/color';
import typo from '../../../styles/typo';

export const styledIsLoginInfo = styled.div`
  width: 360px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: ${color.WHITE};
  border-bottom: none;
  box-sizing: border-box;
  border-radius: 12px 12px 0 0;
  z-index: 3;
`;

export const textDiv = styled.div`
  width: 310px;
  display: auto;
`;

export const titleText = styled.div`
  font: ${typo.Main.SemiBold};
`;
export const detailText = styled.div`
  font: ${typo.Main.Caption.SemiBold};
`;

export const buttonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
