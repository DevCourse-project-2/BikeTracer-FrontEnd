import { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapBox = () => {
  const [map, setMap] = useState<any>();
  const [markers, setMarkers] = useState<any>([]);

  const script = document.createElement('script');
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=6efc5d53e0d072261207430bf39a239f&libraries=services&autoload=false`;
  script.async = true;
  document.body.appendChild(script);

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3, // 확대 레벨
        };

        const newMap = new window.kakao.maps.Map(container, options); // 지도 생성

        // 커스텀 마커 이미지 설정
        const customMarkerImage = new window.kakao.maps.MarkerImage(
          '/Vector-basic.png',
          new window.kakao.maps.Size(40, 50),
          {
            offset: new window.kakao.maps.Point(27, 69),
          }
        );

        // 선택 시 표시할 마커 이미지 설정
        const selectMarkerImage = new window.kakao.maps.MarkerImage(
          '/Vector-select.png',
          new window.kakao.maps.Size(40, 50),
          {
            offset: new window.kakao.maps.Point(27, 69),
          }
        );

        // 마커 추가
        const positions = [
          new window.kakao.maps.LatLng(37.5665, 126.978),
          new window.kakao.maps.LatLng(33.450579, 126.56956),
          new window.kakao.maps.LatLng(33.4506468, 126.5707),
        ];

        const newMarkers = positions.map((position) => {
          const marker = new window.kakao.maps.Marker({
            position,
            image: customMarkerImage,
          });

          window.kakao.maps.event.addListener(marker, 'click', () => {
            marker.setImage(selectMarkerImage);
          });

          marker.setMap(newMap);
          return marker;
        });

        setMarkers(newMarkers);
      });
    };

    script.addEventListener('load', onLoadKakaoMap);

    return () => script.removeEventListener('load', onLoadKakaoMap);
  }, []);

  return (
    <>
      <div id="map" style={{ width: '100vw', height: '100vh' }}></div>
    </>
  );
};

export default MapBox;
