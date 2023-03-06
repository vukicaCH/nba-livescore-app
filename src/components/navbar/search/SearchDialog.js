import { useState } from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { fetchPlayers, deletePlayers } from '../../../features/players/searchPlayersSlice';
import { useDispatch, useSelector } from 'react-redux';
import SearchResults from './SearchResults';
import ErrorPage from '../../ErrorPage'

const CustomDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    display: 'flex',
    flexDirection: 'row',
    gap: '0',
    position: 'absolute',
    top: '130px',
  },
  '& .MuiDialogContent-root': {
    padding: '10px'
  },
  '& .MuiDialogActions-root': {
    padding: '0'
  },

}));

const SearchDialog = () => {
  const dispatch = useDispatch();

  const error = useSelector(state => state.searchPlayers.error);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(deletePlayers())
  };

  const onInputChange = (e) => {
    dispatch(fetchPlayers(e.target.value))
  }

  if(error){
    return(
      <ErrorPage message='Too many search request! Take a rest for a moment' />
    )
  }

  return (
    <div>
      <Button variant='text' onClick={handleClickOpen}>
        <SearchIcon />
      </Button>
      <CustomDialog
        open={open}
        onClose={handleClose}
        fullWidth
        style={{zIndex: '5'}}
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="email"
            fullWidth
            variant="standard"
            placeholder="Search for teams or players"
            InputProps={{ disableUnderline: true }}
            onChange={onInputChange}
          />
          <SearchResults closeDialog={handleClose}/> 
        </DialogContent>
      </CustomDialog>
    </div>
  );
}

export default SearchDialog;