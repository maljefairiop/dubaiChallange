import React, { useState } from 'react';
import {
  Container, Typography, Box, Grid, Paper, Tabs, Tab, Divider,
  List, Chip, LinearProgress, Button, Avatar, Card, CardContent,
  IconButton, Snackbar, Alert, Badge, Menu, MenuItem
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// Mock user data
const user = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
};

// Mock bookings data
const bookings = [
  {
    id: 'bk1',
    destination: 'Lunar Hotel',
    departureDate: '2024-07-15',
    price: 25000,
    status: 'Confirmed',
    seatClass: 'Business',
    passengers: 2,
    image: 'https://images.unsplash.com/photo-1532686255137-43f5dafbc875?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'bk2',
    destination: 'Mars Colony',
    departureDate: '2025-01-10',
    price: 85000,
    status: 'Pending',
    seatClass: 'Luxury Suite',
    passengers: 1,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
];

// Mock notifications
const notifications = [
  {
    id: 'n1',
    type: 'info',
    message: 'Your Lunar Hotel booking has been confirmed',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 'n2',
    type: 'success',
    message: 'Spacewalk training scheduled for next week',
    time: '1 day ago',
    read: false,
  },
  {
    id: 'n3',
    type: 'warning',
    message: 'Please complete your medical examination',
    time: '3 days ago',
    read: true,
  },
  {
    id: 'n4',
    type: 'info',
    message: 'New destinations added to our catalog',
    time: '1 week ago',
    read: true,
  },
];

// Mock tips
const spaceTips = [
  "Remember to complete your space training 2 weeks before departure",
  "Pack light - each additional kg costs extra in space travel",
  "Hydration is key: The spaceship environment is drier than Earth",
  "Don't forget to bring motion sickness medication",
  "Take photos during spacewalks for unforgettable memories",
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dashboard-tabpanel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'info' | 'warning' | 'error'>('success');
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState<null | HTMLElement>(null);
  const [userNotifications, setUserNotifications] = useState(notifications);

  const unreadNotifications = userNotifications.filter(notification => !notification.read).length;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleDeleteBooking = (bookingId: string) => {
    setSnackbarSeverity('success');
    setSnackbarMessage('Booking canceled successfully');
    setSnackbarOpen(true);
  };

  const handleEditBooking = (bookingId: string) => {
    setSnackbarSeverity('info');
    setSnackbarMessage('Editing booking details');
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleNotificationsClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  const handleMarkAllAsRead = () => {
    setUserNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
    handleNotificationsClose();
  };

  const handleNotificationClick = (id: string) => {
    setUserNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Function to calculate days remaining until launch
  const calculateDaysRemaining = (departureDate: string) => {
    const today = new Date();
    const departure = new Date(departureDate);
    const diffTime = departure.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Function to calculate countdown percentage
  const calculateCountdownPercentage = (departureDate: string) => {
    const totalDays = 365; // Assuming booking can be made up to a year in advance
    const daysRemaining = calculateDaysRemaining(departureDate);
    const daysPassed = totalDays - daysRemaining;
    return Math.min(100, Math.max(0, (daysPassed / totalDays) * 100));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1">
          My Space Dashboard
        </Typography>
        <Box>
          <IconButton color="inherit" onClick={handleNotificationsClick}>
            <Badge badgeContent={unreadNotifications} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={notificationsAnchorEl}
            open={Boolean(notificationsAnchorEl)}
            onClose={handleNotificationsClose}
            PaperProps={{
              style: {
                maxHeight: 400,
                width: '350px',
              },
            }}
          >
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
              <Typography variant="h6">Notifications</Typography>
              {unreadNotifications > 0 && (
                <Button size="small" onClick={handleMarkAllAsRead}>
                  Mark all as read
                </Button>
              )}
            </Box>
            {userNotifications.length === 0 ? (
              <MenuItem>No notifications</MenuItem>
            ) : (
              userNotifications.map((notification) => (
                <MenuItem 
                  key={notification.id} 
                  onClick={() => handleNotificationClick(notification.id)}
                  sx={{ 
                    bgcolor: notification.read ? 'transparent' : 'action.hover',
                    borderLeft: notification.read ? 'none' : '3px solid #00b4d8'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {notification.type === 'success' && <CheckCircleIcon color="success" sx={{ mr: 1 }} />}
                      {notification.type === 'info' && <FlightTakeoffIcon color="info" sx={{ mr: 1 }} />}
                      {notification.type === 'warning' && <LocalOfferIcon color="warning" sx={{ mr: 1 }} />}
                      <Typography variant="body1">{notification.message}</Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary" align="right">
                      {notification.time}
                    </Typography>
                  </Box>
                </MenuItem>
              ))
            )}
          </Menu>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Sidebar - User Profile */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Avatar
              src={user.avatar}
              alt={user.name}
              sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
            />
            <Typography variant="h5" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {user.email}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Button
              variant="outlined"
              startIcon={<SettingsIcon />}
              fullWidth
              sx={{ mb: 1 }}
            >
              Account Settings
            </Button>
            <Button
              variant="outlined"
              startIcon={<PersonIcon />}
              fullWidth
            >
              Space Traveler Profile
            </Button>

            {/* Trip Stats */}
            <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>Trip Stats</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h4">2</Typography>
                  <Typography variant="body2">Bookings</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h4">1</Typography>
                  <Typography variant="body2">Completed</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Space Explorer Level: Novice
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={25} 
                    sx={{ height: 8, borderRadius: 5, mt: 1 }} 
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        {/* Main Dashboard Content */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              <Tab icon={<RocketLaunchIcon />} label="My Bookings" />
              <Tab icon={<TipsAndUpdatesIcon />} label="Travel Tips" />
            </Tabs>

            {/* My Bookings Tab */}
            <TabPanel value={tabValue} index={0}>
              <Box sx={{ px: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Your Space Journeys
                </Typography>

                <List>
                  {bookings.map((booking) => {
                    const daysRemaining = calculateDaysRemaining(booking.departureDate);
                    const countdownPercentage = calculateCountdownPercentage(booking.departureDate);

                    return (
                      <Paper key={booking.id} elevation={2} sx={{ mb: 3, p: 0, overflow: 'hidden' }}>
                        <Grid container>
                          <Grid item xs={12} sm={3}>
                            <Box
                              sx={{
                                height: '100%',
                                minHeight: 180,
                                backgroundImage: `url(${booking.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={9}>
                            <Box sx={{ p: 2 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Box>
                                  <Typography variant="h6">
                                    {booking.destination}
                                    <Chip
                                      label={booking.status}
                                      color={booking.status === 'Confirmed' ? 'success' : 'warning'}
                                      size="small"
                                      sx={{ ml: 1 }}
                                    />
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Departure: {booking.departureDate}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Class: {booking.seatClass} • Passengers: {booking.passengers}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Total: ${booking.price.toLocaleString()}
                                  </Typography>
                                </Box>
                                <Box>
                                  <IconButton 
                                    size="small" 
                                    color="primary"
                                    onClick={() => handleEditBooking(booking.id)}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                  <IconButton 
                                    size="small" 
                                    color="error"
                                    onClick={() => handleDeleteBooking(booking.id)}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </Box>
                              </Box>

                              <Box sx={{ mt: 2 }}>
                                <Typography variant="body2" gutterBottom>
                                  Launch Countdown: {daysRemaining} days remaining
                                </Typography>
                                <LinearProgress
                                  variant="determinate"
                                  value={countdownPercentage}
                                  color="secondary"
                                  sx={{ height: 8, borderRadius: 5 }}
                                />
                              </Box>

                              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                                <Button 
                                  size="small" 
                                  variant="outlined"
                                  startIcon={<RocketLaunchIcon />}
                                >
                                  View Details
                                </Button>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Paper>
                    );
                  })}
                </List>

                {bookings.length === 0 && (
                  <Typography variant="body1" sx={{ textAlign: 'center', py: 3 }}>
                    You don't have any bookings yet. Start your space adventure now!
                  </Typography>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<RocketLaunchIcon />}
                  fullWidth
                  href="/booking"
                  sx={{ mt: 2 }}
                >
                  Book New Journey
                </Button>
              </Box>
            </TabPanel>

            {/* Travel Tips Tab */}
            <TabPanel value={tabValue} index={1}>
              <Box sx={{ px: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Space Travel Tips
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Prepare for your journey with these essential space travel tips
                </Typography>

                <Grid container spacing={2}>
                  {spaceTips.map((tip, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card elevation={2} sx={{ 
                        transition: 'transform 0.2s, box-shadow 0.2s', 
                        '&:hover': { 
                          transform: 'translateY(-4px)',
                          boxShadow: 6
                        } 
                      }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <TipsAndUpdatesIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                            <Typography variant="body1">{tip}</Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                {/* Pre-flight Checklist */}
                <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Pre-flight Checklist
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Chip 
                          label="1" 
                          color="primary" 
                          size="small" 
                          sx={{ mr: 1, minWidth: '24px' }} 
                        />
                        <Typography variant="body2">Complete medical examination</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Chip 
                          label="2" 
                          color="primary" 
                          size="small" 
                          sx={{ mr: 1, minWidth: '24px' }} 
                        />
                        <Typography variant="body2">Attend zero-G training session</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Chip 
                          label="3" 
                          color="primary" 
                          size="small" 
                          sx={{ mr: 1, minWidth: '24px' }} 
                        />
                        <Typography variant="body2">Review emergency procedures</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Chip 
                          label="4" 
                          color="primary" 
                          size="small" 
                          sx={{ mr: 1, minWidth: '24px' }} 
                        />
                        <Typography variant="body2">Pack essential items only</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Chip 
                          label="5" 
                          color="primary" 
                          size="small" 
                          sx={{ mr: 1, minWidth: '24px' }} 
                        />
                        <Typography variant="body2">Confirm departure details</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Chip 
                          label="6" 
                          color="primary" 
                          size="small" 
                          sx={{ mr: 1, minWidth: '24px' }} 
                        />
                        <Typography variant="body2">Arrive 3 hours before launch</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Dashboard; 