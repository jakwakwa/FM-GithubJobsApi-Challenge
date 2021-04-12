import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core/";
import JobLogo from "../../../assets/jobdetailslogo.svg";
import { PrimaryButton, SecondaryButton } from "../Buttons/Buttons";
import Oval from "../../../assets/oval.svg";
import Moment from "react-moment";
import LinearProgress from "@material-ui/core/LinearProgress";
import JobSkeletons from "./JobSkeletons";

class JobDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  // good for ajax
  componentDidMount() {
    // TODO get id from props

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
          loading: false,
        });

        //setPositions(jsonData || []);
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
          <Grid container>
            <JobSkeletons variant="text" />
          </Grid>
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

    const dateToFormat = created_at;

    return (
      <>
        <Container maxWidth="lg">
          <div>
            <CompanyDetails>
              <div
                style={{
                  borderRadius: "6px",
                }}
              >
                <CompanyLogoWrapper>
                  <CompanyLogo />
                </CompanyLogoWrapper>

                <CompanyTitleUrlWrapper>
                  <CompanyTitle>{company}</CompanyTitle>
                  <CompanySiteUrl>{companyUrl}</CompanySiteUrl>
                </CompanyTitleUrlWrapper>

                <CompanyDetailsButtonWrapper>
                  <SecondaryButton color="secondary" variant="contained">
                    Company Site
                  </SecondaryButton>
                </CompanyDetailsButtonWrapper>
              </div>
            </CompanyDetails>
            <CompanyJobDescription>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <CompanyJobDescriptionTitleWrapper>
                  <JobTime>
                    <Moment fromNow>{dateToFormat}</Moment>
                    <OvalIcon></OvalIcon>
                    <p>{type}</p>
                  </JobTime>
                  <h1>{title}</h1>
                  <JobType>
                    {type}, {location}
                  </JobType>
                </CompanyJobDescriptionTitleWrapper>
                <ApplyNowButtonWrapper>
                  <PrimaryButton variant="contained">Apply Now</PrimaryButton>
                </ApplyNowButtonWrapper>
              </Grid>

              <DescriptionWrapper
                dangerouslySetInnerHTML={{ __html: description }}
              >
                {/*{description}*/}
              </DescriptionWrapper>
            </CompanyJobDescription>
            <ApplyHowSection>
              <h3>How to Apply</h3>
              <p>
                Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
                magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
                facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
                felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
              </p>

              <span>https://examplelink.com/how-to-apply</span>
            </ApplyHowSection>
          </div>
        </Container>
        <ApplyNowSection>
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <FooterTextWrapper>
                <CompanyTitle>{company}</CompanyTitle>
                <CompanySiteUrl>{companyUrl}</CompanySiteUrl>
              </FooterTextWrapper>

              <ApplyNowButtonWrapper>
                <PrimaryButton variant="contained">Apply Now</PrimaryButton>
              </ApplyNowButtonWrapper>
            </Grid>
          </Container>
        </ApplyNowSection>
      </>
    );
  }
}

export default JobDetails;

const CompanyDetails = styled.div`
  margin-top: -50px;
  background: ${({ theme }) => theme.jobcards};
  border-radius: 6px;
  height: 140px;
  @media screen and (max-width: 600px) {
    height: 205px;
  }
`;

const CompanyJobDescription = styled.div`
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
  /*border: none;
  outline: none;*/
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
    
  }
  /*border: none;
  outline: none;*/
`;
const CompanyTitleUrlWrapper = styled.div`
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
  /*border: none;
  outline: none;*/
`;

const CompanyJobDescriptionTitleWrapper = styled.div`
  @media screen and (max-width: 600px) {
    margin-bottom: 32px;
  }
`;
const CompanyDetailsButtonWrapper = styled.div`
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
  /*border: none;
  outline: none;*/
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

const DescriptionWrapper = styled.div`
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

const JobType = styled.div`
  color: #5964e0;
  font-weight: 700;
  margin-top: 13px;
`;
const ApplyHowSection = styled.div`
  margin-top: 50px;
  padding: 41px;
  background-color: #5964e0;
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
`;

const ApplyNowSection = styled.div`
  position: relative;
  padding: 25px 0;
  background: #fff;
`;

const FooterTextWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ApplyNowButtonWrapper = styled.div`
  /*width: 100%;*/
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const OvalIcon = styled.div`
  position: relative;
  background: url(${Oval}) no-repeat;
  width: 4px;
  height: 4px;
  bottom: -12px;
  margin-left: 10px;
  margin-right: 10px;
`;
