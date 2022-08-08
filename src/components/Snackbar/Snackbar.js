import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {useDispatch, useSelector} from "react-redux";
import {closeSnack} from "../../redux/store/actions/market";

export default function PositionedSnackbar() {
  const dispatch = useDispatch()

  const snack_open = useSelector((state) => state.appReducer.snack_open);
  const snack_msg = useSelector((state) => state.appReducer.snack_msg);

  const handleClose = () => {
    dispatch(closeSnack())  
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
        open={snack_open}
        onClose={handleClose}
        autoHideDuration={5000}
        message={snack_msg}
        key={'bottom' + 'center'}
      />
    </div>
  );
}