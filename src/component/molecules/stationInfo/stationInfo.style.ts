import styled from '@emotion/styled';

import color from '../../../styles/color';

// 임시 코드 - 인터페이스 분리와 getColor 함수 모듈화 필요
interface BatteryFillProps {
  residualRatio?: string;
}

const getColor = (residualRatio: string | undefined) => {
  if (!residualRatio) return color.PRIMARY;

  const residualRatioValue = parseFloat(residualRatio);

  if (residualRatioValue > 20) {
    return color.PRIMARY;
  } else {
    return color.RED;
  }
};

export const StyledStationInfo = styled.div<BatteryFillProps>`
  width: 360px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${color.WHITE};
  border: 3px solid ${({ residualRatio }) => getColor(residualRatio)};
  border-bottom: none;
  box-sizing: border-box;
  border-radius: 12px 12px 0 0;
  z-index: 3;
`;
