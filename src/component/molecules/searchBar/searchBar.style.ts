import styled from '@emotion/styled';

import color from '../../../styles/color';

export const SearchBarDiv = styled.div`
  display: flex;
  width: 304px;
  height: 40px;
  background-color: white;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const AlarmButton = styled.button`
  width: 30px;
  height: 40px;
  margin-left: 2%;
  background-image: url('/notification.png');
  background-size: 45%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  border: none;
`;

export const MenuButton = styled.button`
  width: 30px;
  height: 40px;
  background-image: url('/menu.png');
  background-size: 45%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  border: none;
`;

export const SearchText = styled.input`
  width: auto;
  height: auto;
  margin-left: 2%;
  color: black;
  font-size: 100%;
  background-color: white;
  border: none;

  &::placeholder {
    color: ${color.GY[400]};
  }
`;
