import React from "react";
import styles from "./Contact.module.scss";
import Typography from "@material-ui/core/Typography";

const ContactHeader = () => {
  return (
    <div className={styles.contact__wrapper}>
      <Typography variant="h4" color="initial">
        Contact Us
      </Typography>
    </div>
  );
};

export default ContactHeader;
