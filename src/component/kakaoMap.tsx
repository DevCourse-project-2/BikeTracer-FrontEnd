import {
  AlarmButton,
  BatteryFill,
  BatteryStatus,
  BicycleDetails,
  BicycleImage,
  BicycleInfo,
  BicycleQuantity,
  MapContainer,
  MenuButton,
  RegisterButton,
  RentalRate,
  SearchBar,
  SearchText,
  StationInfo,
  StationTitle,
} from './kakaoMap.style';
import MapBox from './mapBox';

const KakaoMap = () => {
  return (
    <>
      <MapContainer>
        <SearchBar>
          <SearchText placeholder="장소를 입력해주세요" />
          <AlarmButton />
          <MenuButton />
        </SearchBar>
        <StationInfo>
          <BicycleInfo>
            <BicycleImage src="/pwa-512x512.png" alt="Bicycle" />
            <BicycleDetails>
              <StationTitle>305 강남역 앞</StationTitle>
              <RentalRate>잔여율 35%</RentalRate>
              <BicycleQuantity>일반 3 새싹(만13세) 2</BicycleQuantity>
            </BicycleDetails>
          </BicycleInfo>
          <BatteryStatus>
            <BatteryFill />
          </BatteryStatus>
          <RegisterButton>등록하기</RegisterButton>
        </StationInfo>
        <MapBox />
      </MapContainer>
    </>
  );
};

export default KakaoMap;
