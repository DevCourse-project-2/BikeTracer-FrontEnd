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
  const serviceKey = import.meta.env.VITE_KAKAOMAP_JAVASCRIPT_SERVICE_KEY;
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${serviceKey}&libraries=services&autoload=false`;
  script.async = true;
  document.body.appendChild(script);

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };

        const newMap = new window.kakao.maps.Map(container, options);

        const customMarkerImage = new window.kakao.maps.MarkerImage(
          '/Vector-basic.png',
          new window.kakao.maps.Size(40, 50),
          {
            offset: new window.kakao.maps.Point(27, 69),
          }
        );

        // 임시 코드 - 선택 시 표시할 마커 이미지 설정, 이후 분리 필요
        const selectMarkerImage = new window.kakao.maps.MarkerImage(
          '/Vector-select.png',
          new window.kakao.maps.Size(40, 50),
          {
            offset: new window.kakao.maps.Point(27, 69),
          }
        );

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
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
    </>
  );
};

export default MapBox;
