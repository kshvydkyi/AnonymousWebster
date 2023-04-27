import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import React, {  useState  } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          x
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const DialogWindow = (props) => {
    const [open, setOpen] = useState(false);
  const navigate = useNavigate(); 
  function handleClose() {
    setOpen(false);
  }
  function handleMainPage() {
    navigate('/')
  }
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.state}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Success
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            You've just successfully registered, do not forget to confirm your email!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleMainPage}>
            Go to main page
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export {DialogWindow};
