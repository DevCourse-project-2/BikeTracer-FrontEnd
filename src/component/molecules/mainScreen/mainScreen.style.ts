import styled from '@emotion/styled';

export const mapContainer = styled.div`
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  height: 760px;
`;

export const modalOnOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.3);
  z-index: 15;
  backdrop-filter: blur(3px);
`;

export const searchBarDiv = styled.div`
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1); /* 그림자 설정 */
  z-index: 10;
`;

export const mapBoxDiv = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const infoModal = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
`;
