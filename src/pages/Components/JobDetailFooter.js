import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core/";

import DescriptionButton from "../../components/Buttons/ApplyNowButton";

const JobDetailFooter = ({ title, weblink }) => {
  return (
    <ApplyNowSection>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <FooterTextWrapper>
            <CompanyTitle>{title}</CompanyTitle>
            <CompanySiteUrl>{weblink}</CompanySiteUrl>
          </FooterTextWrapper>
          <DescriptionButton />
        </Grid>
      </Container>
    </ApplyNowSection>
  );
};

export default JobDetailFooter;

const ApplyNowSection = styled.div`
  position: relative;
  padding: 25px 0;
  background: ${({ theme }) => theme.jobcards};
`;

const CompanyTitle = styled.h2`
  padding: 0px;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

const CompanySiteUrl = styled.p`
  padding: 0px;
  @media screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;
const FooterTextWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
