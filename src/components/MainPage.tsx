import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ChatList from 'components/ChatList';
import Chat from 'components/Chat';
import AppFrame from 'components/AppFrame';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      borderLeft: `1px solid ${theme.palette.divider}`,
      borderRight: `1px solid ${theme.palette.divider}`,
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
        <Grid item md={4}>
          <ChatList />
        </Grid>
        <Grid item md={8}>
          <Chat />
        </Grid>
      </Grid>
    </Container>
  );
}
