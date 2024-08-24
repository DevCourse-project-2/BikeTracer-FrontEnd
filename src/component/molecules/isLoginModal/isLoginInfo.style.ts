import styled from '@emotion/styled';

import color from '../../../styles/color';
import typo from '../../../styles/typo';

export const StyledIsLoginInfo = styled.div`
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

export const TextDiv = styled.div`
  width: 300px;
  display: auto;
`;

export const TitleText = styled.div`
  font: ${typo.Main.SemiBold};
`;
export const DetailText = styled.div`
  font: ${typo.Main.Caption.SemiBold};
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5%;
`;
