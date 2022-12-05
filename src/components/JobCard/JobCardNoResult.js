import React from "react";

function JobCardNoResult({ searchQuery, fullTimeInput }) {
  return (
    <>
      <div
        style={{
          paddingLeft: "20px",
          textAlign: "left",
          marginBottom: "50px",
        }}
      >
        <p>
          no results found...please search for something else or try again later
        </p>
      </div>
      <div
        style={{
          textAlign: "left",
          marginTop: "0px",
          marginBottom: "50px",
          paddingLeft: "20px",
        }}
      >
        <p style={{ display: "inline-block" }}>
          Searched for {"  "}
          <span style={{ fontWeight: "900" }}>
            {searchQuery.description
              ? `"${searchQuery.description}"`
              : `"ANY" description, company or expertise"`}{" "}
          </span>{" "}
          <span style={{ fontWeight: "900" }}>
            {" "}
            {searchQuery.location
              ? `located in "${searchQuery.location}"`
              : `at "ANY" location`}{" "}
          </span>
          {"  and  "}
          <span style={{ fontWeight: "900" }}>
            {searchQuery.fullTime === "" ||
            searchQuery.fullTime === "false" ||
            fullTimeInput === "false"
              ? `"ANY"`
              : "FT ONLY "}{" "}
          </span>
        </p>
        {""} type contacts
      </div>
    </>
  );
}

export default JobCardNoResult;
