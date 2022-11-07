import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';


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

var genderOfPerson = ""
if (actor.gender === 1){
    genderOfPerson = "Female"
} 
else {
    genderOfPerson = "Male"
}
    



  return (


    <>
    <Typography variant="h5" component="h3">
        <b>{actor.name}'s Biography</b>
      </Typography>
    
      <Typography variant="h6" component="p">
        
        {actor.biography}
      </Typography>

      <Paper 
      component="ul" 
        sx={root} 
        >
      
      <Chip
          icon={<PlaceTwoToneIcon fontSize="small" />}
          label={`Place of Birth: ${actor.place_of_birth}`}
        />
      <Chip
          icon={<CalendarIcon fontSize="small"/>}
          label={`Date of Birth: ${actor.birthday}`}
        />
        <Chip
          icon={<StarBorderIcon fontSize="small"/>}
          label={`Popularity: ${actor.popularity}`}
        />
        <Chip
          icon={
            genderOfPerson === "Female" ? <FemaleIcon/> :
            genderOfPerson === "Male" ? <MaleIcon/> : null
                }
          label={`${genderOfPerson}`}
        />

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


export default ActorDetails;

