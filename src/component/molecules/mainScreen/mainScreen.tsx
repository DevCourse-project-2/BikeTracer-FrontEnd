// eslint-disable-next-line simple-import-sort/imports
import { FC } from 'react';

import { InfoModal, MapBoxDiv, MapContainer, ModalOnOverlay, SearchBarDiv } from './mainScreen.style';
import MapBox from '../../atoms/mapBox/mapBox';
import IsLoginInfo from '../isLoginModal/isLoginInfo';
import SearchBar from '../searchBar/searchBar';
import StationInfo from '../stationInfo/stationInfo';

const MainScreen: FC = () => {
  // 임시 코드 - zustand modal store 설정 필요
  const stationInfoModal = false;
  const isHaveUserInfo = false;

  return (
    <>
      <MapContainer>
        {isHaveUserInfo ? null : <ModalOnOverlay />}
        <SearchBarDiv>
          <SearchBar />
        </SearchBarDiv>
        <MapBoxDiv>
          <MapBox />
        </MapBoxDiv>
      </MapContainer>
      <InfoModal>
        {isHaveUserInfo ? null : <IsLoginInfo />}
        {stationInfoModal ? <StationInfo /> : null}
      </InfoModal>
    </>
  );
};

export default MainScreen;
