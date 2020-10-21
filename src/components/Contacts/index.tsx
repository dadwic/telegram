import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import data from 'data';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    inline: {
      display: 'inline',
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props: any) {
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={props.open}
      onClose={props.onClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Contacts
          </Typography>
          <Button color="inherit" aria-label="close" onClick={props.onClose}>
            Close
          </Button>
        </Toolbar>
      </AppBar>
      <List className={classes.root}>
        {data.map((chat, key) => (
          <ListItem button key={key}>
            <ListItemAvatar>
              <Avatar
                alt={chat.userName}
                src={`/static/images/avatar/${key + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={chat.userName}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textSecondary"
                  >
                    last seen recently
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
