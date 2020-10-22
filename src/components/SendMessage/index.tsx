import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';
import SendIcon from '@material-ui/icons/Send';

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
  const [message, setMessage] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className={classes.root}>
      <InputBase
        fullWidth
        value={message}
        onChange={handleChange}
        className={classes.input}
        placeholder="Send message..."
      />
      <Grow in={Boolean(message)}>
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SendIcon />
        </IconButton>
      </Grow>
    </div>
  );
}
