import * as S from './searchBar.style';

const SearchBar = () => {
  return (
    <>
      <S.searchBarDiv>
        <S.searchText placeholder="장소를 입력해주세요" />
        <S.alarmButton />
        <S.menuButton />
      </S.searchBarDiv>
    </>
  );
};

export default SearchBar;
