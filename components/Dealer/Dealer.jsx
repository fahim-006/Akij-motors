import React from "react";
import DealerHeader from "./DealerHeader";
import ShowLocation from "./ShowLocation";
import styles from "./Dealer.module.scss";
import { Container } from "@material-ui/core";
import { district, divitions } from "./dealerData";
import DealerInformation from "./DealerInformation";

const Dealer = () => {
  return (
    <div>
      <DealerHeader />
      <div className={styles.Dealer__content}>
        <Container>
          <div>
            <ShowLocation header="Divitions" data={divitions} />
          </div>
          <div style={{ margin: "30px 0" }}>
            <ShowLocation header="District" data={district} />
          </div>

          <div className={styles.Dealer__information}>
            <DealerInformation />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dealer;
