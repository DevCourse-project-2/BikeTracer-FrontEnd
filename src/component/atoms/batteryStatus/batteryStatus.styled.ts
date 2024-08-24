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

export const StyledBatteryStatus = styled.div`
  width: 304px;
  height: 20px;
  background-color: ${color.GY[200]};
  border-radius: 10px;
  position: relative;
`;

export const BatteryFill = styled.div<BatteryFillProps>`
  background-color: ${({ residualRatio }) => getColor(residualRatio)};
  height: 100%;
  border-radius: 10px;
  width: ${({ residualRatio }) => residualRatio || '80%'};
`;
