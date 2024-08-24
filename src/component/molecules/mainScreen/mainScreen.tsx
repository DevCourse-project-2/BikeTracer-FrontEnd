// eslint-disable-next-line simple-import-sort/imports
import * as S from './mainScreen.style';
import MapBox from '../../atoms/mapBox/mapBox';
import IsLoginInfo from '../isLoginInfo/isLoginInfo';
import SearchBar from '../searchBar/searchBar';
import StationInfo from '../stationInfo/stationInfo';

const MainScreen = () => {
  // 임시 코드 - zustand modal store 설정 필요
  const stationInfoModal = false;
  const isHaveUserInfo = false;

  return (
    <>
      <S.mapContainer>
        {isHaveUserInfo ? null : <S.modalOnOverlay />}
        <S.searchBarDiv>
          <SearchBar />
        </S.searchBarDiv>
        <S.mapBoxDiv>
          <MapBox />
        </S.mapBoxDiv>
      </S.mapContainer>
      <S.infoModal>
        {isHaveUserInfo ? null : <IsLoginInfo />}
        {stationInfoModal ? <StationInfo /> : null}
      </S.infoModal>
    </>
  );
};

export default MainScreen;
