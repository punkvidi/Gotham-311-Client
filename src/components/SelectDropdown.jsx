import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectDropdown() {
  const classes = useStyles();
  const handleChange = (event) => {
    
  };

  return (
    <div className="select-list" style={{ "display":"flex", "justifyContent":"center"}}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Borough</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={10}>Bronx</MenuItem>
          <MenuItem value={20}>Brooklyn</MenuItem>
          <MenuItem value={30}>Queens</MenuItem>
          <MenuItem value={30}>Manhattan</MenuItem>
        </Select>
      </FormControl>
      </div>
  )
}