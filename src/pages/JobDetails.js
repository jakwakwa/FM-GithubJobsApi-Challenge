import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core/";
import JobLogo from ".././assets/jobdetailslogo.svg";
import { SecondaryButton } from "../components/Buttons/Buttons";
import DescriptionButton from "../components/Buttons/ApplyNowButton";
import Oval from ".././assets/oval.svg";

import LinearProgress from "@material-ui/core/LinearProgress";
import JobSkeletons from "../components/JobCard/JobCardSkeletons";
import JobDetailFooter from "./Components/JobDetailFooter";
import { themeColors } from "./../styles/theme/ThemeStyled";
import HowToBg from "../assets/desktop/bg-pattern-detail-footer.svg";
import { formatDistance, subDays } from "date-fns";

class JobDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const getDataFromApi = async () => {
      const PROXY =
        window.location.hostname === "localhost"
          ? "https://cors-anywhere.herokuapp.com"
          : "/cors-proxy";
      try {
        const response = await fetch(
          `${PROXY}/https://jobs.github.com/positions/${this.props.id}.json`,
          {
            method: "GET",
            mode: "cors",
          }
        );
        const jsonData = await response.json();

        this.setState({
          title: jsonData.title,
          type: jsonData.type,
          company: jsonData.company,
          companyUrl: jsonData.company_url,
          location: jsonData.location,
          description: jsonData.description,
          created_at: jsonData.created_at,
          loading: false,
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("Fetch error: ", error);
      }
    };
    getDataFromApi();
  }
  render() {
    if (this.state.loading) {
      return (
        <>
          <LinearProgress
            color="secondary"
            style={{
              position: "fixed",
              top: "0px",
              left: "0px",
              zIndex: "200",
              width: "100vw",
            }}
          />
          <Container maxWidth="lg">
            <Grid container>
              <JobSkeletons variant="text" />
              <JobSkeletons variant="text" />
              <JobSkeletons variant="text" />
            </Grid>
          </Container>
        </>
      );
    }

    const {
      title,
      type,
      company,
      companyUrl,
      location,
      description,
      created_at,
    } = this.state;

    return (
      <>
        <Container maxWidth="lg">
          <div>
            <CompanyDetailsSection>
              <div
                style={{
                  borderRadius: "6px",
                }}
              >
                <CompanyLogoWrapper>
                  <CompanyLogo />
                </CompanyLogoWrapper>

                <CompanyInfoWrapper>
                  <CompanyTitle>{company}</CompanyTitle>
                  <CompanySiteUrl>
                    {companyUrl.replace(/https:\/\/|http:\/\//gm, "")}
                  </CompanySiteUrl>
                </CompanyInfoWrapper>

                <CompanyButtonWrapper>
                  <a href={companyUrl} target="popup">
                    <SecondaryButton color="secondary" variant="contained">
                      Company Site
                    </SecondaryButton>
                  </a>
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
                    <span>
                      {formatDistance(
                        subDays(new Date(created_at), 1),
                        new Date(),
                        {
                          addSuffix: true,
                        }
                      )}
                    </span>
                    <OvalIcon></OvalIcon>
                    <span>{type}</span>
                  </JobTime>
                  <h1>{title}</h1>
                  <JobType>
                    {type}, {location}
                  </JobType>
                </TitleWrapper>
                <DescriptionButton
                  linkUrl={companyUrl}
                  buttonText={"Apply Now"}
                />
              </Grid>

              <HtmlWrapper
                dangerouslySetInnerHTML={{ __html: description }}
              ></HtmlWrapper>
            </JobDescription>

            <HowToSection>
              <h3>How to Apply</h3>
              <p>
                Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
                magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
                facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
                felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
              </p>

              <a href="/">https://examplelink.com/how-to-apply</a>
            </HowToSection>
          </div>
        </Container>

        <JobDetailFooter
          title={company}
          companySite={companyUrl.replace(/https:\/\/|http:\/\//gm, "")}
          weblink={companyUrl}
        />
      </>
    );
  }
}

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
  @media screen and (max-width: 600px) {
    width: 100%;
    float: initial;
  }
`;
const CompanyLogo = styled.div`
  background: url(${JobLogo}) no-repeat;
  width: 100%;
  height: 140px;
  border-top-left-radius: 6px;
  @media screen and (max-width: 600px) {
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
