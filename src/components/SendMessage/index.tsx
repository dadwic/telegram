import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/MicNone';
import AttachIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: 'auto',
      bottom: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: theme.palette.background.default,
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    input: {
      flex: 1,
      height: 48,
      marginLeft: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
    iconButton: {
      padding: 10,
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
      <IconButton aria-label="record" className={classes.iconButton}>
        <AttachIcon />
      </IconButton>
      <IconButton aria-label="Attach file" className={classes.iconButton}>
        <MicIcon />
      </IconButton>
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SendIcon />
      </IconButton>
    </div>
  );
}
