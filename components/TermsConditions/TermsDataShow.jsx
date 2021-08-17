import React from "react";
import Typography from "@material-ui/core/Typography";

const TermsDataShow = ({ data, number }) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <Typography
        variant="h6"
        color="initial"
        style={{ fontSize: "18px", fontWeight: "bold" }}
      >
        {number}- {data?.title}
      </Typography>
      <Typography variant="subtitle1" color="initial">
        {data?.description}
      </Typography>
    </div>
  );
};

export default TermsDataShow;
