import {Dialog, DialogTitle, DialogContent, DialogActions, IconButton} from '@mui/material';
import {styled} from '@mui/system'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      color: 'white',
      backgroundColor: '#171717',
    },
    '& .MuiDialogActions-root': {
        backgroundColor: '#171717',
      padding: theme.spacing(1),
    },
    '& .MuiPaper-root': {
      minWidth: "50%"
    }
  }));

  const DialogTitleEl = styled(DialogTitle)({
    backgroundColor: '#171717',
    color: 'white',
    m: 0,
    p: 2
  });

  const IconButtonEl = styled(IconButton)({
        position: 'absolute',
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
  });

  


  export {BootstrapDialog, DialogTitleEl, IconButtonEl}