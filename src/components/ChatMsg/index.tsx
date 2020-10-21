import React from 'react';
import cx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import defaultChatMsgStyles from './defaultChatMsg.styles';

interface IProps extends WithStyles {
  avatar?: string;
  messages: string[];
  side: 'left' | 'right';
  GridContainerProps?: object;
  GridItemProps?: object;
  AvatarProps?: any;
}

const ChatMsg: React.FC<IProps> = (props) => {
  const {
    classes,
    avatar,
    messages,
    side,
    GridContainerProps,
    GridItemProps,
    AvatarProps,
  } = props;

  const attachClass = (index: number) => {
    if (index === 0) {
      return classes[`${side}First`];
    }
    if (index === messages.length - 1) {
      return classes[`${side}Last`];
    }
    return '';
  };

  return (
    <Grid
      container
      spacing={2}
      justify={side === 'right' ? 'flex-end' : 'flex-start'}
      {...GridContainerProps}
    >
      {side === 'left' && (
        <Grid item {...GridItemProps}>
          <Avatar
            src={avatar}
            {...AvatarProps}
            className={cx(classes.avatar, AvatarProps.className)}
          />
        </Grid>
      )}
      <Grid item xs={8}>
        {messages.map((msg: any, i: number) => {
          // const TypographyProps = getTypographyProps(msg, i, props);
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={msg.id || i} className={classes[`${side}Row`]}>
              <Typography
                align="left"
                className={cx(classes.msg, classes[side], attachClass(i))}
              >
                {msg}
              </Typography>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
};

ChatMsg.defaultProps = {
  avatar: '',
  messages: [],
  side: 'left',
  GridContainerProps: {},
  GridItemProps: {},
  AvatarProps: {},
};

export default withStyles(defaultChatMsgStyles, {
  name: 'ChatMsg',
})(ChatMsg);
