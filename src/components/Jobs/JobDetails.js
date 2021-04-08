import React from "react";
import styled from "styled-components";
import { Grid, Button } from "@material-ui/core/";
import JobLogo from "../../../assets/jobdetailslogo.svg";
//import data;
//import { urlUpdater } from "./utils/utils";

// ** Funtional Component **
//const JobDetails = (props) => {
//  return (
//    <pre>
//      <code>{JSON.stringify(props, null, 4)}</code>
//    </pre>
//  );
//};

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
      try {
        const response = await fetch(
          `https:cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.props.id}.json`,
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
    } = this.state;

    return (
      <>
        <div>
          <CompanyDetails>
            <Grid
              container
              style={{
                height: "140px",
                borderRadius: "6px",
              }}
            >
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                {/*// Goal is to align this to the LEFT*/}

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
                <Grid item xs={3}>
                  <Button color="secondary" variant="contained">
                    Company Site
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CompanyDetails>
          <CompanyJobDescription>
            <h1>{title}</h1>
            <JobType>
              {type}, {location}
            </JobType>
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
          <ApplyNowSection>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{ width: "60vw" }}
            >
              <div>
                <CompanyTitle>{company}</CompanyTitle>
                <CompanySiteUrl>{companyUrl}</CompanySiteUrl>
              </div>
              <div>
                <Button color="primary" variant="contained">
                  Apply Now
                </Button>
              </div>
            </Grid>
          </ApplyNowSection>
          <ApplyNowBackground></ApplyNowBackground>
        </div>
      </>
    );
  }
}

export default JobDetails;

const CompanyDetails = styled.div`
  margin-top: -50px;
  background: ${({ theme }) => theme.jobcards};
`;

const CompanyJobDescription = styled.div`
  margin-top: 50px;
  padding: 48px;
  background: ${({ theme }) => theme.jobcards};
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

const JobType = styled.div`
  color: #5964e0;
  font-weight: 700;
`;
const ApplyHowSection = styled.div`
  margin-top: 50px;
  padding: 41px;
  background-color: #5964e0;
  margin-bottom: 156px;
  & h3,
  p,
  span {
    color: white;
    margin-bottom: 28px;
  }
  & span {
    color: white;
    font-weight: 700;
    margin-bottom: 0;
  }
`;

const ApplyNowSection = styled.div`
  position: fixed;
  z-index: 2000;
  bottom: 0;
  margin-top: 0px;
  padding: 25px;
  height: 96px;
  /*background-color: #5964e0;*/
`;

const ApplyNowBackground = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 0px;
  left: 0;
  background: ${({ theme }) => theme.jobcards};
  height: 96px;
  width: 100vw;
`;
