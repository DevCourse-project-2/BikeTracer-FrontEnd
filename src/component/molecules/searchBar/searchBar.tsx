import { FC } from 'react';

import { AlarmButton, MenuButton, SearchBarDiv, SearchText } from './searchBar.style';

const SearchBar: FC = () => {
  return (
    <>
      <SearchBarDiv>
        <SearchText placeholder="장소를 입력해주세요" />
        <AlarmButton />
        <MenuButton />
      </SearchBarDiv>
    </>
  );
};

export default SearchBar;
