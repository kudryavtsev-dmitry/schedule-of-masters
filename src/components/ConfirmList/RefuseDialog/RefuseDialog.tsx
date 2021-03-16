import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from '@material-ui/core';
import React, { FC } from 'react';
import { RefuseDialogProps } from './RefuseDialogProps';

const useStyles = makeStyles({
  root: {
    width: 600,
  },
});

const RefuseDialog: FC<RefuseDialogProps> = ({
  handleCloseRefuseDialog,
  formikRefuse,
}) => {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={formikRefuse.handleSubmit}>
      <DialogTitle>Укажите причину отказа</DialogTitle>
      <DialogContent>
        <TextField
          multiline
          fullWidth
          rows={3}
          variant="outlined"
          name="comment"
          onChange={formikRefuse.handleChange}
          error={Boolean(
            formikRefuse.touched.comment && formikRefuse.errors.comment
          )}
          helperText={
            formikRefuse.touched.comment && formikRefuse.errors.comment
          }
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleCloseRefuseDialog}>
          Отмена
        </Button>
        <Button variant="contained" color="secondary" type="submit">
          Отказать
        </Button>
      </DialogActions>
    </form>
  );
};

export default RefuseDialog;
