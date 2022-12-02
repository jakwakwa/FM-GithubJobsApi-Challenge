import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core/";
import { SecondaryButton } from "../components/Buttons/Buttons";
import DescriptionButton from "../components/Buttons/ApplyNowButton";
import Oval from "../../public/oval.svg";
import Data from "./../data/data.json";
import { useParams } from "react-router-dom";
import NoImage from "../../public/no-image.png";
import Header from "../components/Header/Header";
// import LinearProgress from "@material-ui/core/LinearProgress";
import JobSkeletons from "../components/JobCard/JobCardSkeletons";
import JobDetailFooter from "./Components/JobDetailFooter";
import { themeColors } from "./../styles/theme/ThemeStyled";
import HowToBg from "../../public/bg-pattern-detail-footer.svg";

const JobDetails = () => {
  const [state, setState] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);
  let { id } = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataFromApi = () => {
    const data = [...Data];

    const jsonData = data[id - 1];

    setState({
      position: jsonData.position,
      contract: jsonData.contract,
      company: jsonData.company,
      website: jsonData.website,
      location: jsonData.location,
      postedAt: jsonData.postedAt,
      logo: jsonData.logo,
      description: jsonData.description,
    });
  };

  useEffect(() => {
    getDataFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    position,
    contract,
    company,
    website,
    location,
    description,
    postedAt,
    logo,
  } = state;

  if (state.position === "") {
    return (
      <Container maxWidth="lg">
        <Grid container>
          <JobSkeletons variant="text" />
          <JobSkeletons variant="text" />
          <JobSkeletons variant="text" />
        </Grid>
      </Container>
    );
  }

  if (state.position !== "") {
    return (
      <>
        <Header />
        <Container maxWidth="lg">
          <div>
            <CompanyDetailsSection>
              <div
                style={{
                  borderRadius: "6px",
                }}
              >
                <CompanyLogoWrapper>
                  <CompanyLogo logo={logo} />
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

        <JobDetailFooter
          title={company}
          companySite={website}
          weblink={website}
        />
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

  /*padding: 25px;*/
  @media screen and (max-width: 600px) {
    width: 100%;
    float: initial;
  }
`;
const CompanyLogo = styled.div`
  padding: 20px;
  background: url(${(props) => `/${props.logo}`});
  /* background: url(${NoImage}) no-repeat; */
  background-size: contain;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: content-box;
  width: 100%;
  height: 140px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-right: 2px solid ${themeColors.secondary.checkBoxBgLight};
  border-bottom: 3px solid ${themeColors.secondary.checkBoxBgLight};
  @media screen and (max-width: 600px) {
    padding: 0;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    top: -21px;
    z-index: 90000;
    position: relative;
    border-radius: 15px;
  }
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
    /* styles to apply to the li tag */
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
  /*height: 162px;*/
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
