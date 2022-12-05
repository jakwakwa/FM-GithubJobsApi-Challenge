import React from "react";

function JobCardResultText({ searchQuery, fullTimeInput }) {
  return (
    <div
      style={{
        textAlign: "left",
        marginTop: "-80px",
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
  );
}

export default JobCardResultText;
