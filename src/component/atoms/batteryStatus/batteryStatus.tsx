import { FC } from 'react';

import { BatteryFill, StyledBatteryStatus } from './batteryStatus.styled';

const BatteryStatus: FC = () => {
  // 대여소 정보를 전역 store에서 받아 사용
  const selectedStation = {
    num: 305,
    name: '강남역 앞',
    residualRatio: '35%',
  };

  return (
    <>
      <StyledBatteryStatus>
        <BatteryFill residualRatio={selectedStation.residualRatio} />
      </StyledBatteryStatus>
    </>
  );
};

export default BatteryStatus;
