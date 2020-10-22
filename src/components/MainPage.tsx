import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ChatList from 'components/ChatList';
import Chat from 'components/Chat';
import AppFrame from 'components/AppFrame';
import SendMessage from 'components/SendMessage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    chatCol: {
      position: 'relative',
    },
  })
);

export default function MainPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={0}
        alignContent="flex-start"
        className={classes.root}
      >
        <Grid item xs={12}>
          <AppFrame />
        </Grid>
        <Grid item xs={4}>
          <ChatList />
        </Grid>
        <Grid item xs={8} className={classes.chatCol}>
          <Chat />
          <SendMessage />
        </Grid>
      </Grid>
    </Container>
  );
}
