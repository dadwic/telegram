import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useAppState } from 'context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
      width: '100%',
      maxWidth: '36ch',
      position: 'relative',
      overflow: 'auto',
      maxHeight: 'calc(100vh - 48px)',
      backgroundColor: theme.palette.background.paper,
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    inline: {
      display: 'inline',
    },
  })
);

export default function AlignItemsList() {
  const classes = useStyles();
  const states = useAppState();

  return (
    <List className={classes.root}>
      {states.chats.map((chat: any, key: number) => (
        <div key={chat.id}>
          <ListItem alignItems="flex-start" button>
            <ListItemAvatar>
              <Avatar
                alt={chat.user.fullName}
                src={`/static/images/avatar/${key + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
