import React, { useState } from "react";
import { makeStyles, emphasize } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { PieChart } from "react-minimal-pie-chart";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "10px",
    marginRight: "10px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Stats() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [stats, setStats] = useState(["lecturers", "students", "subjects"]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Rooms</Typography>
        </AccordionSummary>
        <div style={{ marginLeft: "200px" }}>
          <AccordionDetails>
            <Typography>
              <Grid>
                <TextField
                  select
                  label="Buildings"
                  variant="outlined"
                  disabled={!stats.length}
                  style={{ width: "160px" }}
                >
                  {stats.map((option) => (
                    <MenuItem value={option}>{option}</MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Typography>
          </AccordionDetails>
        </div>
        <div>
          <PieChart
            style={{ width: "300px", height: "300px", marginLeft: "170px" }}
            data={[
              { title: "One", value: 50, color: "#E38627" },
              { title: "Two", value: 50, color: "#C13C37" },
            ]}
          />
        </div>
      </Accordion>
    </div>
  );
}