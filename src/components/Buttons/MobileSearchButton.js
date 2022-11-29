import React from "react";

import styled from "styled-components";

import { IconButton } from "../Buttons/Buttons";

import SearchIc from "../../../public/icon-search.svg";

const MobileSearchButton = ({ type, value }) => {
  return (
    <div style={{ marginTop: "13px", marginRight: "24px" }}>
      <IconButton type={type} value={value} variant="contained">
        <SearchIconLogo />
      </IconButton>
    </div>
  );
};

export default MobileSearchButton;

const SearchIconLogo = styled.div`
  position: relative;
  background: url(${SearchIc}) no-repeat;
  width: 20px;
  height: 20px;
  bottom: 3px;
  margin-left: 10px;
  margin-right: 10px;
`;
