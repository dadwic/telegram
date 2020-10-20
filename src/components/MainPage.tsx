import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ChatList from 'components/ChatList';
import Chat from 'components/Chat';

export default function MainPage() {
  return (
    <Box minHeight="100vh" display="flex">
      <Container maxWidth="md">
        <Grid container spacing={0}>
          <Grid item md={4}>
            <ChatList />
          </Grid>
          <Grid item md={8}>
            <Chat />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
