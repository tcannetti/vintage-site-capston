import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, Menu, MenuItem, Typography, Icon } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons"; 

import logo from "../../assets/commerce.png";
import useStyles from './navStyles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <ToolBar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Vintage Online Shop" height="25px" className={classes.image} />
            Vintage Online Shop
          </Typography>
          <div className={classes.grow}/>
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </ToolBar>
      </AppBar>
    </>
  )
}

export default Navbar
