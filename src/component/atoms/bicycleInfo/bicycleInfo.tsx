import * as S from './bicycleInfo.styled';

const BicycleInfo = () => {
  // 대여소 정보를 전역 store에서 받아 사용
  const selectedStation = {
    num: 305,
    name: '강남역 앞',
    residualRatio: '35%',
  };

  const stationTitle = String(selectedStation.num) + '. ' + selectedStation.name;

  return (
    <>
      <S.styledBicycleInfo>
        <S.bicycleImage src="/pwa-512x512.png" alt="Bicycle" />
        <S.bicycleDetails>
          <S.stationTitle>{stationTitle}</S.stationTitle>
          <S.bicycleRate>
            <S.sparkleImage src="/sparkling-fill.png" />
            <S.bicycleRateText residualRatio={selectedStation.residualRatio}>
              잔여율 {selectedStation.residualRatio}
            </S.bicycleRateText>
          </S.bicycleRate>
        </S.bicycleDetails>
      </S.styledBicycleInfo>
    </>
  );
};

export default BicycleInfo;
