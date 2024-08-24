// eslint-disable-next-line simple-import-sort/imports
import { FC } from 'react';

import { ButtonDiv, DetailText, StyledIsLoginInfo, TextDiv, TitleText } from './isLoginInfo.style';
import JoinButton from '../../atoms/joinButton/joinButton';
import LoginButton from '../../atoms/loginButton/loginButton';

const IsLoginInfo: FC = () => {
  return (
    <>
      <StyledIsLoginInfo>
        <TextDiv>
          <TitleText>로그인이 필요해요</TitleText>
          <DetailText>회원이 아니라면 회원가입을 해주세요!</DetailText>
        </TextDiv>
        <ButtonDiv>
          <JoinButton />
          <LoginButton />
        </ButtonDiv>
      </StyledIsLoginInfo>
    </>
  );
};

export default IsLoginInfo;
