import styled from '@emotion/styled';

import color from '../../../styles/color';
import { BatteryFillProps } from '../../../types/types';
import { getColor } from '../../../utils/getColor';

export const styledStationInfo = styled.div<BatteryFillProps>`
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
