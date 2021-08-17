import { Container } from "@material-ui/core";
import React from "react";
import Question from "./Question";
import styles from "./Faq.module.scss";
import { faqData } from "./faqData";

const FaqQuestion = () => {
  return (
    <div className={styles.question__wrapper}>
      <Container>
        {faqData?.map((data) => (
          <Question key={data.id} data={data} />
        ))}
      </Container>
    </div>
  );
};

export default FaqQuestion;
