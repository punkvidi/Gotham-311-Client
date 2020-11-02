import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PointsContainer from "./PointsContainer.jsx";

export default function PointsModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    console.log("hello")
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Points Modal
      </Button>
      <Dialog open={open} onClose={handleClose}>
          <DialogContent>
          <h1>Thanks for submitting!</h1>
      <PointsContainer/>
      
          <h3 style={{ "display":"flex", "justifyContent":"center"}}>You just recieved 10 Gotham points!</h3>
          <div className="close-points-button" style={{ "display":"flex", "justifyContent":"center"}}>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Close
          </Button>
        </div>
          </DialogContent>
      </Dialog>
    </div>
  );
}
