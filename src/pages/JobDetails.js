import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core/";
import { SecondaryButton } from "../components/Buttons/Buttons";
import DescriptionButton from "../components/Buttons/ApplyNowButton";
import Oval from "../../public/oval.svg";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import {
  JobDetaiSkeletonTop,
  JobDetaiSkeletonMiddle,
  JobDetaiSkeletonBottom,
} from "../components/JobCard/JobCardSkeletons";
import { themeColors } from "./../styles/theme/ThemeStyled";
import HowToBg from "../../public/bg-pattern-detail-footer.svg";

const JobDetails = ({ data }) => {
  window.scrollTo(0, 0);
  const [state, setState] = React.useState({});
  const [mockLoader, setMockLoader] = React.useState(true);
  let { id } = useParams();

  let position,
    contract,
    company,
    website,
    location,
    description,
    postedAt,
    logo = undefined;

  if (data.length > 0) {
    position = state.position;
    contract = state.contract;
    company = state.company;
    website = state.website;
    location = state.location;
    description = state.description;
    postedAt = state.postedAt;
    logo = state.logo;
  }

  const getData = async (dataFromProps) => {
    const loadedData = [...dataFromProps];
    const jobSelected = loadedData[id - 1];

    await setState({
      position: jobSelected.position,
      contract: jobSelected.contract,
      company: jobSelected.company,
      website: jobSelected.website,
      location: jobSelected.location,
      postedAt: jobSelected.postedAt,
      logo: jobSelected.logo,
      description: jobSelected.description,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setMockLoader(false);
    }, 1000);
    getData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (mockLoader) {
    return (
      <>
        <Header />
        <Container style={{ marginTop: "-60px" }} flex maxWidth="md">
          <JobDetaiSkeletonTop
            widthPerc={100}
            height={"300px"}
            variant="text"
          />

          <JobDetaiSkeletonMiddle
            widthPerc={100}
            height={"300px"}
            variant="text"
          />
          <JobDetaiSkeletonBottom />
        </Container>
      </>
    );
  }

  if (state.position !== "") {
    return (
      <>
        <Header />
        <Container role="contentinfo" maxWidth="md">
          <div>
            <CompanyDetailsSection>
              <div
                style={{
                  borderRadius: "6px",
                }}
              >
                <CompanyLogoWrapper>
                  <LogoInnerWrapper>
                    <Logo src={`.${logo}`}></Logo>
                  </LogoInnerWrapper>
                </CompanyLogoWrapper>

                <CompanyInfoWrapper>
                  <CompanyTitle>{company}</CompanyTitle>
                  <CompanySiteUrl>{website}</CompanySiteUrl>
                </CompanyInfoWrapper>

                <CompanyButtonWrapper>
                  <SecondaryButton
                    href={website}
                    color="secondary"
                    variant="contained"
                  >
                    Company Site
                  </SecondaryButton>
                </CompanyButtonWrapper>
              </div>
            </CompanyDetailsSection>

            <JobDescription>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <TitleWrapper>
                  <JobTime>
                    <span>{postedAt}</span>
                    <OvalIcon></OvalIcon>
                    <span>{contract}</span>
                  </JobTime>
                  <h1>{position}</h1>
                  <JobType>
                    {contract}, {location}
                  </JobType>
                </TitleWrapper>
                <DescriptionButton linkUrl={website} buttonText={"Apply Now"} />
              </Grid>

              <HtmlWrapper>
                <p> {description}</p>
              </HtmlWrapper>
            </JobDescription>

            <HowToSection>
              <h3>How to Apply</h3>
              <p>
                Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
                magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
                facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
                felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
              </p>

              <a aria-current="page" href={website}>
                https://examplelink.com/how-to-apply
              </a>
            </HowToSection>
          </div>
        </Container>
        <ApplyNowSection>
          <Container maxWidth="md">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <CompanyTitle>{position}</CompanyTitle>
              <DescriptionButton
                linkUrl={`${website}/apply`}
                buttonText={"Apply Now"}
              />
            </Grid>
          </Container>
        </ApplyNowSection>
      </>
    );
  }
};

export default JobDetails;

const CompanyDetailsSection = styled.div`
  margin-top: -50px;
  background: ${({ theme }) => theme.jobcards};
  border-radius: 6px;
  height: 140px;
  @media screen and (max-width: 600px) {
    height: 205px;
  }
`;

const JobDescription = styled.div`
  margin-top: 32px;
  padding: 48px 48px 0 48px;
  background: ${({ theme }) => theme.jobcards};
  border-radius: 6px;
`;
const CompanyLogoWrapper = styled.div`
  float: left;
  width: 140px;
  background-size: contain;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: content-box;
  /* width: 100%; */
  padding: 20px;
  height: 140px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-right: 0px solid ${themeColors.secondary.checkBoxBgLight};
  border-bottom: 0px solid ${themeColors.secondary.checkBoxBgLight};

  /*padding: 25px;*/
  @media screen and (max-width: 600px) {
    padding: 10px;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    top: -21px;
    z-index: 90000;
    position: relative;
    border-radius: 15px;
  }
`;

const LogoInnerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Logo = styled.img`
  position: absolute;
  width: 100%;
`;

const CompanyInfoWrapper = styled.div`
  display: inline-block;
  width: 28%;
  margin-left: 40px;
  margin-top: 42px;
  @media screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    margin-top: 0;
    margin-left: 0;
  }
`;

const TitleWrapper = styled.div`
  @media screen and (max-width: 600px) {
    margin-bottom: 32px;
  }
`;
const CompanyButtonWrapper = styled.div`
  margin-right: 48px;
  margin-top: 46px;
  display: inline-block;
  float: right;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: block;
    float: initial;
    margin-right: 0;
    text-align: center;
    margin-top: 17px;
    margin-left: 0;
    margin-bottom: 32px;
  }
`;

const CompanyTitle = styled.h2`
  padding: 0px;
  color: ( { props.theme }) => props.theme.text};
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

const HtmlWrapper = styled.div`
  padding: 48px 0;
  & p {
    padding-bottom: 24px;
  }
  & p > strong {
    margin-bottom: 24px;
  }
`;

const JobTime = styled.p`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const JobType = styled.span`
  color: #5964e0;
  font-weight: 700;
  margin-top: 13px;
  display: inline-block;
`;

const HowToSection = styled.div`
  background: url(${HowToBg}) no-repeat top center;
  background-color: ${themeColors.primary.violet};
  width: 100%;
  margin-top: 50px;
  padding: 41px;
  margin-bottom: 92px;
  border-radius: 6px;
  & h3,
  p,
  span {
    color: white;
    margin-bottom: 28px;
  }
  & span {
    color: white;
    font-weight: 700;
    margin-bottom: 164px;
  }
  & a {
    color: ${themeColors.secondary.white};
    font-weight: 700;
    text-decoration: underline;
    &:hover {
      color: ${themeColors.secondary.white};
      opacity: 0.6;
    }
  }
`;

const OvalIcon = styled.span`
  position: relative;
  background: url(${Oval}) no-repeat;
  width: 4px;
  height: 4px;
  bottom: -12px;
  margin-left: 10px;
  margin-right: 10px;
`;

const ApplyNowSection = styled.div`
  position: relative;
  padding: 25px 0;
  background: ${({ theme }) => theme.jobcards};
`;
