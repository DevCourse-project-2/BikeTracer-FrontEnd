/* eslint-disable import/order */
import JoinButton from '../../atoms/joinButton/joinButton';
import LoginButton from '../../atoms/loginButton/loginButton';
import * as S from './isLoginInfo.style';

const IsLoginInfo = () => {
  return (
    <>
      <S.styledIsLoginInfo>
        <S.textDiv>
          <S.titleText>로그인이 필요해요</S.titleText>
          <S.detailText>회원이 아니라면 회원가입을 해주세요!</S.detailText>
        </S.textDiv>
        <S.buttonDiv>
          <JoinButton />
          <LoginButton />
        </S.buttonDiv>
      </S.styledIsLoginInfo>
    </>
  );
};

export default IsLoginInfo;
