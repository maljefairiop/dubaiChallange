import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const destinations = [
  {
    title: 'Lunar Hotel',
    description: 'Experience luxury accommodations on the Moon',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mars Colony',
    description: 'Visit the first human settlement on Mars',
    image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Space Station',
    description: 'Stay in Earth\'s orbit with stunning views',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '80vh',
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Dubai to the Stars
          </Typography>
          <Typography variant="h5" gutterBottom>
            The Ultimate Space Travel Experience
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<RocketLaunchIcon />}
            onClick={() => navigate('/booking')}
            sx={{ mt: 2, mr: 2 }}
          >
            Book Your Journey
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            onClick={() => navigate('/packages')}
            sx={{ mt: 2 }}
          >
            Explore Packages
          </Button>
        </Container>
      </Box>

      {/* Featured Destinations */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Featured Destinations
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {destinations.map((destination, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                  alt={destination.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {destination.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {destination.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<FlightTakeoffIcon />}
                    sx={{ mt: 2 }}
                    onClick={() => navigate('/booking')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* New Section: Countdown to Next Launch */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" gutterBottom>
                Next Launch: Dubai Orbital
              </Typography>
              <Typography variant="body1" paragraph>
                Be part of history as Dubai launches its first commercial space flight. Limited seats available for this historic journey.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, my: 3 }}>
                <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'background.default', borderRadius: 1, minWidth: '70px' }}>
                  <Typography variant="h4">15</Typography>
                  <Typography variant="body2">Days</Typography>
                </Box>
                <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'background.default', borderRadius: 1, minWidth: '70px' }}>
                  <Typography variant="h4">08</Typography>
                  <Typography variant="body2">Hours</Typography>
                </Box>
                <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'background.default', borderRadius: 1, minWidth: '70px' }}>
                  <Typography variant="h4">45</Typography>
                  <Typography variant="body2">Minutes</Typography>
                </Box>
                <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'background.default', borderRadius: 1, minWidth: '70px' }}>
                  <Typography variant="h4">30</Typography>
                  <Typography variant="body2">Seconds</Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<RocketLaunchIcon />}
                onClick={() => navigate('/booking')}
              >
                Reserve Priority Seating
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Rocket launch"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonial Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Space Traveler Experiences
        </Typography>
        <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, mt: 3, position: 'relative' }}>
          <Typography variant="h5" gutterBottom sx={{ fontStyle: 'italic' }}>
            "The most breathtaking experience of my life. Seeing Earth from space changed my perspective forever. Dubai Space Travel's service was impeccable from start to finish."
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              alt="Testimonial"
              sx={{ width: 60, height: 60, borderRadius: '50%', mr: 2 }}
            />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">James Wilson</Typography>
              <Typography variant="body2" color="text.secondary">Lunar Hotel Experience • April 2024</Typography>
            </Box>
          </Box>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            alt="Quote mark"
            sx={{ 
              position: 'absolute', 
              top: 20, 
              left: 20, 
              width: 40, 
              height: 40, 
              opacity: 0.1 
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 