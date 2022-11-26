import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import './Drop.css';
import { lime, purple } from "@mui/material/colors";
export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const lime=()=>{
    document.getElementById('box').style.background="lime";
  }
  const lavender=()=>{
    document.getElementById('box').style.background="lavender";
  }
  const crimson=()=>{
    document.getElementById('box').style.background="crimson";
  }
  const darkblue=()=>{
    document.getElementById('box').style.background="blue";
  }
  const teal=()=>{
    document.getElementById('box').style.background="teal";
  }
  const aquamarine=()=>{
    document.getElementById('box').style.background="aquamarine";
  }
  const aliceblue=()=>{
    document.getElementById('box').style.background="aliceblue";
  }

  return (
    
    <div className="log">
    <h1>Choose your colour !</h1>
    <div className="Drop_down">
    <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Colour Changer</InputLabel>
        <Select
          sx={{
            "&:hover": {
              "&& fieldset": {
                border: "3px solid black"
              }
            }
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root": {
                  backgroundColor: "white"
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "white"
                },
                "& .MuiMenuItem-root.Mui-selected:hover": {
                  backgroundColor: "white"
                }
              }
            }
          }}
          value={age}
          label="Color"
          onChange={handleChange}
        >
        
          <MenuItem value={10} onClick={lime}>Lime</MenuItem>
          <MenuItem value={20} onClick={lavender}>Lavender</MenuItem>
          <MenuItem value={30} onClick={crimson}>Crimson</MenuItem>
          <MenuItem value={30} onClick={darkblue}>Blue</MenuItem>
          <MenuItem value={30} onClick={teal}>Teal</MenuItem>
          <MenuItem value={30} onClick={aquamarine}>Aquamarine</MenuItem>
          <MenuItem value={30} onClick={aliceblue}>Alice Blue</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br /><br /><br /><br />
    <div className="box" id="box">
    </div>
    </div>
    </div>
  );
  
}