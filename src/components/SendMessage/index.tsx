import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: 'auto',
      bottom: 0,
      width: '100%',
      position: 'absolute',
      backgroundColor: theme.palette.background.default,
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    input: {
      height: 48,
      paddingLeft: theme.spacing(1),
    },
  })
);

export default function SendMessage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputBase
        fullWidth
        className={classes.input}
        placeholder="Send message..."
      />
    </div>
  );
}
