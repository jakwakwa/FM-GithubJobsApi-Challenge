import React from "react";

import styled from "styled-components";
import { IconButton } from "../Buttons/Buttons";

import SearchIc from "../../../public/icon-search-3.svg";

const MobileSearchButton = ({ handleMobileSearchClick, type, value }) => {
  return (
    <SearchMobile
      style={{
        marginTop: "13px",
        marginRight: "24px",

        position: "absolute",
        left: 0,
        top: "120px",
        width: "100%",
        padding: "0px 20px",
      }}
    >
      <IconButton
        onClick={handleMobileSearchClick}
        type={type}
        value={value}
        variant="contained"
      >
        <TextBtn> Search</TextBtn>
        <SearchIconLogo />
      </IconButton>
    </SearchMobile>
  );
};

export default MobileSearchButton;

const SearchIconLogo = styled.div`
  position: relative;
  background: url(${SearchIc}) no-repeat;
  width: 10px;
  height: 10px;
  background-size: 10px;
  /* bottom: 0px; */
  margin-left: 10px;
  margin-right: 10px;
`;

const TextBtn = styled.p`
  color: #fff;
`;

const SearchMobile = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 80px;
    /* background: ${({ theme }) => theme.jobcards}; */
    border-radius: 6px;
  }
`;
