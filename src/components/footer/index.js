import React from 'react';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" align="center" className={classes.by}>
        Lista Telefonica
      </Typography>
    </div>
  );
}
