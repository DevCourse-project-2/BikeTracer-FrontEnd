import styled from '@emotion/styled';

import color from '../../../styles/color';
import typo from '../../../styles/typo';
import { BatteryFillProps } from '../../../types/types';
import { getColor } from '../../../utils/getColor';

export const styledBicycleInfo = styled.div`
  width: 304px;
  height: 84px;
  display: flex;
  align-items: left;
  color: ${color.BLACK};
  // border: 1px solid black; /* 컴포넌트 생성 이후 삭제 */
`;

export const stationTitle = styled.h1`
  width: 100%;
  color: ${color.BLACK}
  font-size: ${typo.Main.Title}
`;

export const bicycleImage = styled.img`
  width: 84px;
  height: 84px;
  margin-right: 5%;
  border-radius: 24px;
`;

export const bicycleDetails = styled.div`
  display: grid;
  width: 200px;
  height: 84px;
  align-items: center;
  color: ${color.BLACK};
  font-size: ${typo.Main.Caption.Regular};
`;

export const bicycleRate = styled.div`
  display: flex;
  align-items: center;
`;

export const sparkleImage = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;

export const bicycleRateText = styled.text<BatteryFillProps>`
  color: ${({ residualRatio }) => getColor(residualRatio)};
  font-size: ${typo.Main.Medium};
  font-weight: bold;
`;
