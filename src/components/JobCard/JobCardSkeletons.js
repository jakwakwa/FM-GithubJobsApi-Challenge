import React from "react";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";

export const JobCardSkeletons = ({ variant, widthPerc, height }) => {
  return (
    <Wrapper style={{ height: height }}>
      <Skeleton variant={variant} width={widthPerc} height={height} />
      <Skeleton variant={variant} width={widthPerc} height={height} />
    </Wrapper>
  );
};

export default JobCardSkeletons;
export const JobDetaiSkeletonSearch = () => {
  return (
    <WrapperDetailsTop
      style={{
        width: "100%",
        marginTop: "-40px",
        height: `${"80px"}`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "0px",
      }}
    >
      {/* <Skeleton variant={"rect"} width={"150px"} height={"150px"} /> */}
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "100%",
          flexDirection: "row",
          alignContent: "center",
          gap: "10px",
          padding: "0 10px",
          paddingTop: "30px",
        }}
      >
        <Skeleton variant={"text"} width={"100%"} height={"20px"} />
        <Skeleton variant={"text"} width={"100%"} height={"20px"} />
        <Skeleton variant={"text"} width={"100%"} height={"20px"} />
      </div>
    </WrapperDetailsTop>
  );
};
export const JobDetaiSkeletonTop = () => {
  return (
    <WrapperDetails
      style={{
        width: "100%",
        height: `${"150px"}`,

        flexDirection: "row",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <Skeleton variant={"rect"} width={"150px"} height={"150px"} />
      <div
        style={{
          width: "60%",
          display: "flex",
          height: "100%",
          flexDirection: "column",
          alignContent: "center",
          gap: "10px",
          paddingTop: "50px",
        }}
      >
        <Skeleton variant={"text"} width={"20%"} height={"20px"} />
        <Skeleton variant={"text"} width={"30%"} height={"20px"} />
      </div>
      <div
        style={{
          width: "20%",
          display: "flex",
          height: "100%",
          justifyContent: "flex-end",
          paddingTop: "30px",
          paddingRight: "50px",
        }}
      >
        <Skeleton variant={"text"} width={"200px"} height={"80px"} />
      </div>
    </WrapperDetails>
  );
};

export const JobDetaiSkeletonMiddle = () => {
  return (
    <WrapperDetails
      style={{
        width: "100%",
        height: `${"380px"}`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "20px",
        padding: "50px",
        paddingTop: "0px",
      }}
    >
      {/* <Skeleton variant={"rect"} width={"150px"} height={"150px"} /> */}
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "100%",
          flexDirection: "column",
          alignContent: "top",
          gap: "10px",
          paddingTop: "50px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              height: "100%",
              flexDirection: "column",
              alignContent: "top",
              gap: "10px",
              paddingTop: "0px",
            }}
          >
            <Skeleton variant={"text"} width={"30%"} height={"20px"} />
            <Skeleton variant={"text"} width={"50%"} height={"20px"} />
            <Skeleton variant={"text"} width={"40%"} height={"20px"} />
          </div>

          <div
            style={{
              width: "20%",
              display: "flex",
              height: "100%",
              justifyContent: "flex-end",
              paddingTop: "0px",
              paddingRight: "0px",
            }}
          >
            <Skeleton variant={"text"} width={"130px"} height={"80px"} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: "50px",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Skeleton variant={"text"} width={"100%"} height={"20px"} />
          <Skeleton variant={"text"} width={"100%"} height={"20px"} />
          <Skeleton variant={"text"} width={"100%"} height={"20px"} />
          <Skeleton variant={"text"} width={"100%"} height={"20px"} />
          <Skeleton variant={"text"} width={"50%"} height={"20px"} />
        </div>
      </div>
    </WrapperDetails>
  );
};

export const JobDetaiSkeletonBottom = () => {
  return (
    <WrapperDetailsBottom
      style={{
        width: "100%",
        height: `${"380px"}`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "20px",
        padding: "50px",
        paddingTop: "0px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "100%",
          flexDirection: "column",
          alignContent: "top",
          gap: "10px",
          paddingTop: "50px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              height: "100%",
              flexDirection: "column",
              alignContent: "top",
              gap: "10px",
              paddingTop: "0px",
            }}
          >
            <Skeleton variant={"text"} width={"30%"} height={"20px"} />
            <Skeleton variant={"text"} width={"50%"} height={"20px"} />
            <Skeleton variant={"text"} width={"40%"} height={"20px"} />
          </div>

          <div
            style={{
              width: "20%",
              display: "flex",
              height: "100%",
              justifyContent: "flex-end",
              paddingTop: "0px",
              paddingRight: "0px",
            }}
          >
            <Skeleton variant={"text"} width={"130px"} height={"80px"} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: "50px",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Skeleton variant={"text"} width={"100%"} height={"20px"} />
          <Skeleton variant={"text"} width={"100%"} height={"20px"} />
          <Skeleton variant={"text"} width={"100%"} height={"20px"} />
          <Skeleton variant={"text"} width={"100%"} height={"20px"} />
          <Skeleton variant={"text"} width={"50%"} height={"20px"} />
        </div>
      </div>
    </WrapperDetailsBottom>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.jobcards};
  height: 228px;
  gap: 10px;
  width: 32.333%;
  margin-right: 10px;
  border-radius: 6px;
  padding: 30px;
  padding-top: 50px;
  margin-bottom: 33px;

  @media (max-width: 768px) {
    flex-direction: column !important;

    width: 100% !important;
  }
`;

const WrapperDetails = styled.div`
  position: relative;
  background: ${({ theme }) => theme.jobcards};
  height: 228px;
  gap: 0px;
  width: 30%;
  margin-right: 30px;
  border-radius: 6px;
  padding: 0px;
  padding-top: 0px;
  margin-bottom: 33px;
`;

const WrapperDetailsTop = styled.div`
  display: flex !important;
  position: relative;
  background: ${({ theme }) => theme.jobcards};
  height: 228px;
  gap: 0px;
  width: 30%;
  margin-right: 30px;
  border-radius: 6px;
  padding: 0px;
  padding-top: 0px;
  margin-bottom: 33px;
  @media (max-width: 768px) {
    display: none !important;
  }
`;

const WrapperDetailsBottom = styled.div`
  position: relative;
  background: #5964e0;
  height: 228px;
  gap: 0px;
  width: 30%;
  margin-right: 30px;
  border-radius: 6px;
  padding: 0px;
  padding-top: 0px;
  margin-bottom: 33px;
`;
