import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ChatMsg from 'components/ChatMsg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })
);

export default function DefaultChatMsg() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ChatMsg
        avatar={''}
        messages={[
          'Hi Jenny, How r u today?',
          'Did you train yesterday',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
        ]}
      />
      <ChatMsg
        side={'right'}
        messages={[
          "Great! What's about you?",
          'Of course I did. Speaking of which check this out',
        ]}
      />
      <ChatMsg avatar={''} messages={['Im good.', 'See u later.']} />
    </div>
  );
}
