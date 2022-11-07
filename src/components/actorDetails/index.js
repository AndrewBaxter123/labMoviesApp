import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
      <PlaceTwoToneIcon fontSize="small" />
        {actor.place_of_birth}
      </Typography>
      <Typography variant="h6" component="p">
      <CalendarIcon fontSize="small" />
        {actor.birthday}
      </Typography>

      <Typography variant="h6" component="p">
        
        {actor.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
      </Paper>      
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      </Drawer>
      </>
  );
};

export default ActorDetails ;