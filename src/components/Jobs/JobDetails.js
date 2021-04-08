import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core/";
import JobLogo from "../../../assets/jobdetailslogo.svg";
import { PrimaryButton, SecondaryButton } from "../Buttons/Buttons";
import Oval from "../../../assets/oval.svg";
import Moment from "react-moment";

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
      return <h1>loading...</h1>;
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
        <div>
          <CompanyDetails>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{
                height: "140px",
                borderRadius: "6px",
              }}
            >
              <Grid item xs={6}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <div>
                    <CompanyLogo />
                  </div>
                  <div style={{ marginLeft: "50px" }}>
                    <CompanyTitle>{company}</CompanyTitle>
                    <CompanySiteUrl>{companyUrl}</CompanySiteUrl>
                  </div>
                </Grid>
              </Grid>
              {/*// Goal is to align this to the RIGHT*/}
              <Grid item xs={3} align="right">
                <SecondaryButton
                  color="secondary"
                  variant="contained"
                  style={{ marginRight: "48px" }}
                >
                  Company Site
                </SecondaryButton>
              </Grid>
            </Grid>
          </CompanyDetails>
          <CompanyJobDescription>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <div>
                <JobTime>
                  <Moment fromNow>{dateToFormat}</Moment>
                  <OvalIcon></OvalIcon>
                  <p>{type}</p>
                </JobTime>
                <h1>{title}</h1>
                <JobType>
                  {type}, {location}
                </JobType>
              </div>
              <div>
                <PrimaryButton variant="contained">Apply Now</PrimaryButton>
              </div>
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
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus.
            </p>

            <span>https://examplelink.com/how-to-apply</span>
          </ApplyHowSection>

          {/*<ApplyNowBackground></ApplyNowBackground>*/}
        </div>
        <ApplyNowSection>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ height: "92px" }}
          >
            {/*// Goal is to align this to the LEFT*/}

            <Grid item xs={6}>
              <div>
                <CompanyTitle>{company}</CompanyTitle>
                <CompanySiteUrl>{companyUrl}</CompanySiteUrl>
              </div>
            </Grid>
            {/*// Goal is to align this to the RIGHT*/}
            <Grid item xs={2} align="right">
              <PrimaryButton color="secondary" variant="contained">
                Apply Now
              </PrimaryButton>
            </Grid>
          </Grid>
          <ApplyNowBg />
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
  overflow: hidden;
`;

const CompanyJobDescription = styled.div`
  margin-top: 32px;
  padding: 48px 48px 0 48px;
  background: ${({ theme }) => theme.jobcards};
  border-radius: 6px;
`;

const CompanyLogo = styled.div`
  background: url(${JobLogo}) no-repeat;
  width: 140px;
  height: 140px;
  /*border: none;
  outline: none;*/
`;

const CompanyTitle = styled.h2`
  padding: 0px;
`;

const CompanySiteUrl = styled.p`
  padding: 0px;
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
`;

const ApplyNowBg = styled.div`
  position: absolute;
  z-index: -1;
  left: -100px;
  bottom: 0;
  width: 100vw;
  height: 92px;
  background: ${({ theme }) => theme.jobcards};
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
