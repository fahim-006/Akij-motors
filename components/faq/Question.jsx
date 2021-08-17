import React from 'react';
import { BsDot } from 'react-icons/bs';
import { FaHandPointRight } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '15px',
  },
  heading: {
    fontSize: '18px',
    padding: '10px 0',
    fontWeight: '600',
  },
}));

export default function Question({ data }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        style={{ zIndex: '1' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{data.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {data.description.map((item) => (
              <ul key={item.id}>
                <li className="flex items-center py-1">
                  <FaHandPointRight
                    color="#13488E"
                    style={{ fontSize: '30px', marginRight: '10px' }}
                  />
                  {item.ans}
                </li>
              </ul>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
