import styled from "styled-components";
import { useState } from "react";
import history from "../../history";

const SearchInput = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 80%;
  border: 1px solid #777;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.1);
  padding: 9px 6px;
  margin-top: 29px;
  color: #fff;
`;
function SearchBar() {
  const [data, setData] = useState("");
  const bringFilteredData = async (e) => {
    e.preventDefault();
    history.push(`/search/${data}`);
  };

  return (
    <form onSubmit={bringFilteredData}>
      <SearchInput
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setData(e.target.value);
        }}
        value={data}
      />
      {/* <input type="submit" value="search" /> */}
    </form>
  );
}

export default SearchBar;
