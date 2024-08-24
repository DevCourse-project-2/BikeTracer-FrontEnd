import styled from '@emotion/styled';

import color from '../../../styles/color';

export const searchBarDiv = styled.div`
  display: flex;
  width: 304px;
  height: 40px;
  background-color: ${color.WHITE};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
export const searchText = styled.input`
  width: auto;
  height: auto;
  color: ${color.BLACK};
  font-size: 100%;
  border: none;

  &::placeholder {
    color: ${color.GY[400]};
  }
`;

export const alarmButton = styled.button`
  width: 30px;
  height: 30px;
  background-image: url('/notification.png');
  background-size: 45%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${color.WHITE};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${color.GY[100]};
  }
`;

export const menuButton = styled.button`
  width: 30px;
  height: 30px;
  background-image: url('/menu.png');
  background-size: 45%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${color.WHITE};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${color.GY[100]};
  }
`;
