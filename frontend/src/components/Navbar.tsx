import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <RocketLaunchIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dubai Space Travel
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<RocketLaunchIcon />}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/booking"
            startIcon={<FlightTakeoffIcon />}
          >
            Book Trip
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/packages"
            startIcon={<LocalOfferIcon />}
          >
            Packages
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/dashboard"
            startIcon={<DashboardIcon />}
          >
            Dashboard
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 