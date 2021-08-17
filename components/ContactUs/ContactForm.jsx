import {
  CardContent,
  Card,
  Container,
  Grid,
  Typography,
  InputLabel,
  Button,
} from '@material-ui/core';
import React from 'react';
import styles from './Contact.module.scss';
import Image from 'next/image';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const ContactForm = () => {
  return (
    <div className={styles.ContactForm__wrapper}>
      <Container>
        <div className={styles.ContactForm__header}>
          <Typography variant="h6" color="initial">
            Let&apos;s start a conversation
          </Typography>
        </div>
        <Card className={styles.ContactForm__card}>
          <CardContent>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid
                item
                md={6}
                sm={6}
                xs={12}
                className={styles.ContactForm__leftSide}
              >
                <form noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Name" fullWidth />
                  <Grid container spacing={2} style={{ margin: '15px 0' }}>
                    <Grid item md={6} sm={6} xs={12}>
                      <TextField id="standard-basic" label="Email" fullWidth />
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                      <TextField
                        id="standard-basic"
                        label="Phone Number"
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <div style={{ margin: '15px 0' }}>
                    <InputLabel style={{ marginBottom: '10px' }}>
                      Message
                    </InputLabel>
                    <TextareaAutosize
                      aria-label="minimum height"
                      rows={5}
                      style={{
                        width: '100%',
                        border: '1px solid#707070',
                        resize: 'none',
                      }}
                    />
                  </div>
                  <div className={styles.ContactForm__leftSide_button}>
                    <Button variant="contained" color="default">
                      Submit
                    </Button>
                  </div>
                </form>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <Image
                  src="/contact/imgpsh.png"
                  alt="contact page"
                  width={1500}
                  height={1100}
                  objectFit="contain"
                  loading="lazy"
                  layout="responsive"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default ContactForm;
