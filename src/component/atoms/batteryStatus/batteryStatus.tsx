import * as S from './batteryStatus.styled';

const BatteryStatus = () => {
  // 대여소 정보를 전역 store에서 받아 사용
  const selectedStation = {
    num: 305,
    name: '강남역 앞',
    residualRatio: '35%',
  };

  return (
    <>
      <S.styledBatteryStatus>
        <S.batteryFill residualRatio={selectedStation.residualRatio} />
      </S.styledBatteryStatus>
    </>
  );
};

export default BatteryStatus;
