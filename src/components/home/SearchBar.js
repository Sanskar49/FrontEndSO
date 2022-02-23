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
  margin-top: 25px;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 80px;
    margin-left: -350px;
    width: 1150%;
  }

  @media screen and (max-width: 718px) {
    /* Pretty important Css I see */
    min-width: max-content;
  }
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
    </form>
  );
}

export default SearchBar;
