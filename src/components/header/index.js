import React, { useMemo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import phone from '../../assets/phone.png';
import useStyles from './styles';


export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
             <img src={phone} alt="phone" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           Lista Telefonica
          </Typography>
          <Typography variant="h6">
            
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
