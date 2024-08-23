import styled from '@emotion/styled';

export const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const SearchBar = styled.div`
  position: fixed;
  display: flex;
  width: 80%;
  height: 5%;
  left: 10%;
  top: 5%;
  background-color: white;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const SearchText = styled.input`
  height: 70%;
  width: 70%;
  margin-left: 2%;
  color: black;
  font-size: 100%;
  background-color: white;
  border: none;

  &::placeholder {
    color: gray; /* placeholder 텍스트 색상 설정 */
    opacity: 0.6; /* opacity 설정 (기본값 0.5) */
  }
`;

export const AlarmButton = styled.button`
  width: 7%;
  height: 90%;
  margin-left: 2%;
  background-image: url('/notification.png');
  background-size: 45%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  border: none;
`;

export const MenuButton = styled.button`
  width: 7%;
  height: 90%;
  background-image: url('/menu.png');
  background-size: 45%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  border: none;
`;

export const StationInfo = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  background-color: white;
  border-color: green;
  border-radius: 12px 12px 0 0;
  box-shadow: inset 0 0 0 3px #03c75a;
  bottom: 0px;
  align-items: center;
  z-index: 3;
`;

export const StationTitle = styled.h1`
  width: 100%;
  margin: 0;
  margin-top: 2%;
  padding: 0;
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

export const BicycleInfo = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  color: black;
`;

export const BicycleImage = styled.img`
  width: 40%;
  height: 60%;
  margin-left: 10%;
  border-radius: 24px;
`;

export const BicycleDetails = styled.div`
  margin-left: 10%;
  margin-right: 1%;
  display: grid;
  width: 100%;
  height: 60%;
  color: black;
  align-items: flex-start;
`;

export const RentalRate = styled.span`
  margin: 0;
  padding: 0;
`;

export const BicycleQuantity = styled.span`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

export const BatteryStatus = styled.div`
  background-color: #e0e0e0;
  border-radius: 10px;
  height: 10%;
  width: 80%;
  position: relative;
`;

export const BatteryFill = styled.div`
  background-color: #03c75a;
  height: 100%;
  border-radius: 10px;
  width: 35%;
`;

export const RegisterButton = styled.button`
  width: 80%;
  margin-top: 5%;
  font-size: 16px;
  background-color: black;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #333;
  }
`;
