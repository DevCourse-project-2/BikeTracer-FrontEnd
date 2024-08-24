import styled from '@emotion/styled';

import color from '../../../styles/color';
import { BatteryFillProps } from '../../../types/types';
import { getColor } from '../../../utils/getColor';

export const styledBatteryStatus = styled.div`
  width: 304px;
  height: 20px;
  background-color: ${color.GY[200]};
  border-radius: 10px;
  position: relative;
`;

export const batteryFill = styled.div<BatteryFillProps>`
  background-color: ${({ residualRatio }) => getColor(residualRatio)};
  height: 100%;
  border-radius: 10px;
  width: ${({ residualRatio }) => residualRatio || '80%'};
`;
