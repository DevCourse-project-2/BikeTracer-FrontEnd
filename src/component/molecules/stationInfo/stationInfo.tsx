// eslint-disable-next-line simple-import-sort/imports
import * as S from './stationInfo.style';
import BatteryStatus from '../../atoms/batteryStatus/batteryStatus';
import BicycleInfo from '../../atoms/bicycleInfo/bicycleInfo';
import RegisterButton from '../../atoms/registerButton/registerButton';
import RegisterCancleButton from '../../atoms/registerCancleButton/registerCancleButton';

const StationInfo = () => {
  // 대여소 정보를 전역 store에서 받아 사용
  const selectedStation = {
    num: 305,
    name: '강남역 앞',
    residualRatio: '35%',
    isRegist: false, // true면 등록 취소 버튼 표시
  };

  return (
    <>
      <S.styledStationInfo residualRatio={selectedStation.residualRatio}>
        <BicycleInfo />
        <BatteryStatus />
        {selectedStation.isRegist ? <RegisterCancleButton /> : <RegisterButton />}
      </S.styledStationInfo>
    </>
  );
};

export default StationInfo;
