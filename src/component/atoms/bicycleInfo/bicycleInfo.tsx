import { FC } from 'react';

import {
  BicycleDetails,
  BicycleImage,
  BicycleRate,
  BicycleRateText,
  SparkleImage,
  StationTitle,
  StyledBicycleInfo,
} from './bicycleInfo.styled';

const BicycleInfo: FC = () => {
  // 대여소 정보를 전역 store에서 받아 사용
  const selectedStation = {
    num: 305,
    name: '강남역 앞',
    residualRatio: '35%',
  };

  const stationTitle = String(selectedStation.num) + '. ' + selectedStation.name;

  return (
    <>
      <StyledBicycleInfo>
        <BicycleImage src="/pwa-512x512.png" alt="Bicycle" />
        <BicycleDetails>
          <StationTitle>{stationTitle}</StationTitle>
          <BicycleRate>
            <SparkleImage src="/sparkling-fill.png" />
            <BicycleRateText residualRatio={selectedStation.residualRatio}>
              잔여율 {selectedStation.residualRatio}
            </BicycleRateText>
          </BicycleRate>
        </BicycleDetails>
      </StyledBicycleInfo>
    </>
  );
};

export default BicycleInfo;
