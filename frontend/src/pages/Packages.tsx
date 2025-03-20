import React, { useState } from 'react';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  CardMedia, Button, Divider, Chip, List, ListItem, ListItemIcon, ListItemText,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Switch,
  FormControlLabel
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LuggageIcon from '@mui/icons-material/Luggage';
import DiningIcon from '@mui/icons-material/Dining';
import HotelIcon from '@mui/icons-material/Hotel';
import SpaIcon from '@mui/icons-material/Spa';
import WifiIcon from '@mui/icons-material/Wifi';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const packages = [
  {
    id: 'economy',
    title: 'Economy Class',
    description: 'Essential space travel experience for the budget-conscious explorer',
    image: 'https://images.unsplash.com/photo-1517976384346-3136801d605d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 15000,
    features: [
      { text: 'Standard Shared Cabin', icon: <HotelIcon /> },
      { text: 'Basic Food & Beverages', icon: <DiningIcon /> },
      { text: '10kg Luggage Allowance', icon: <LuggageIcon /> },
      { text: 'Access to Observation Deck', icon: <RocketLaunchIcon /> },
    ],
    highLights: ['Affordable', 'Essential Features'],
  },
  {
    id: 'business',
    title: 'Business Class',
    description: 'Enhanced comfort and premium services for the discerning space traveler',
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 35000,
    features: [
      { text: 'Private Cabin with Window', icon: <HotelIcon /> },
      { text: 'Premium Food & Beverages', icon: <DiningIcon /> },
      { text: '30kg Luggage Allowance', icon: <LuggageIcon /> },
      { text: 'Access to Observation Deck', icon: <RocketLaunchIcon /> },
      { text: 'Spacewalk Experience', icon: <SpaIcon /> },
      { text: 'High-Speed Satellite Wi-Fi', icon: <WifiIcon /> },
    ],
    highLights: ['Private Cabin', 'Premium Service', 'Spacewalk'],
    featured: true,
  },
  {
    id: 'luxury',
    title: 'Luxury Suite',
    description: 'Unparalleled luxury and exclusive experiences for the ultimate space journey',
    image: 'https://images.unsplash.com/photo-1520185617320-582924cf4e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 75000,
    features: [
      { text: 'Luxury Suite with Panoramic Views', icon: <HotelIcon /> },
      { text: 'Gourmet Food & Premium Beverages', icon: <DiningIcon /> },
      { text: '50kg Luggage Allowance', icon: <LuggageIcon /> },
      { text: 'Private Observation Deck Access', icon: <RocketLaunchIcon /> },
      { text: 'Extended Spacewalk Experience', icon: <SpaIcon /> },
      { text: 'Ultra-Fast Satellite Wi-Fi', icon: <WifiIcon /> },
      { text: 'Zero-G Lounge Access', icon: <SpaIcon /> },
      { text: 'Personal AI Concierge', icon: <WifiIcon /> },
    ],
    highLights: ['Luxury Suite', 'All Inclusive', 'Extended Spacewalk', 'Zero-G Lounge'],
  },
];

// Feature comparison data
const featureComparisonData = [
  { feature: 'Cabin Type', economy: 'Shared', business: 'Private', luxury: 'Luxury Suite' },
  { feature: 'Window View', economy: 'Limited', business: 'Standard', luxury: 'Panoramic' },
  { feature: 'Meal Service', economy: 'Basic', business: 'Premium', luxury: 'Gourmet' },
  { feature: 'Luggage Allowance', economy: '10kg', business: '30kg', luxury: '50kg' },
  { feature: 'Wi-Fi', economy: 'No', business: 'Yes', luxury: 'Ultra-Fast' },
  { feature: 'Spacewalk', economy: 'No', business: 'Basic (30 min)', luxury: 'Extended (2 hours)' },
  { feature: 'Zero-G Experience', economy: 'No', business: 'Shared', luxury: 'Private' },
  { feature: 'Lounge Access', economy: 'No', business: 'Limited', luxury: 'Exclusive' },
  { feature: 'Personal Concierge', economy: 'No', business: 'No', luxury: 'Yes' },
];

const Packages = () => {
  const navigate = useNavigate();
  const [showComparison, setShowComparison] = useState(false);
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Space Travel Packages
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Choose the perfect package for your journey to the stars
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <FormControlLabel
          control={
            <Switch 
              checked={showComparison} 
              onChange={() => setShowComparison(!showComparison)} 
              color="primary" 
            />
          }
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CompareArrowsIcon sx={{ mr: 1 }} />
              <Typography>Compare All Features</Typography>
            </Box>
          }
        />
      </Box>
      
      {showComparison ? (
        <TableContainer component={Paper} elevation={3} sx={{ mb: 6 }}>
          <Table sx={{ minWidth: 650 }} aria-label="package comparison table">
            <TableHead>
              <TableRow sx={{ bgcolor: 'background.paper' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Feature</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Economy</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Business</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Luxury</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Price</TableCell>
                <TableCell align="center">${packages[0].price.toLocaleString()}</TableCell>
                <TableCell align="center">${packages[1].price.toLocaleString()}</TableCell>
                <TableCell align="center">${packages[2].price.toLocaleString()}</TableCell>
              </TableRow>
              {featureComparisonData.map((row, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}>
                  <TableCell component="th" scope="row">{row.feature}</TableCell>
                  <TableCell align="center">
                    {row.economy === 'No' ? (
                      <CloseIcon color="error" />
                    ) : row.economy === 'Yes' ? (
                      <CheckIcon color="success" />
                    ) : (
                      row.economy
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {row.business === 'No' ? (
                      <CloseIcon color="error" />
                    ) : row.business === 'Yes' ? (
                      <CheckIcon color="success" />
                    ) : (
                      row.business
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {row.luxury === 'No' ? (
                      <CloseIcon color="error" />
                    ) : row.luxury === 'Yes' ? (
                      <CheckIcon color="success" />
                    ) : (
                      row.luxury
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<RocketLaunchIcon />}
              onClick={() => navigate('/booking')}
              sx={{ mx: 1 }}
            >
              Book Now
            </Button>
          </Box>
        </TableContainer>
      ) : (
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {packages.map((pkg) => (
            <Grid item key={pkg.id} xs={12} md={4}>
              <Card 
                elevation={pkg.featured ? 8 : 3} 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                  border: pkg.featured ? '2px solid #00b4d8' : 'none',
                }}
              >
                {pkg.featured && (
                  <Chip 
                    label="MOST POPULAR" 
                    color="primary" 
                    sx={{ 
                      position: 'absolute', 
                      top: 10, 
                      right: 10, 
                      zIndex: 1 
                    }} 
                  />
                )}
                <CardMedia
                  component="img"
                  height="200"
                  image={pkg.image}
                  alt={pkg.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h4" component="h2">
                    {pkg.title}
                  </Typography>
                  <Typography variant="h5" color="primary" gutterBottom>
                    ${pkg.price.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {pkg.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {pkg.highLights.map((highlight, idx) => (
                      <Chip 
                        key={idx} 
                        label={highlight} 
                        size="small" 
                        color="secondary" 
                        variant="outlined" 
                      />
                    ))}
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <List dense>
                    {pkg.features.map((feature, idx) => (
                      <ListItem key={idx} disableGutters>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          {feature.icon || <CheckCircleIcon color="primary" />}
                        </ListItemIcon>
                        <ListItemText primary={feature.text} />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<RocketLaunchIcon />}
                    onClick={() => navigate('/booking')}
                    sx={{ mt: 2 }}
                    color={pkg.featured ? 'secondary' : 'primary'}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      
      {/* New Feature: FAQ Section */}
      <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Frequently Asked Questions
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              What does the price include?
            </Typography>
            <Typography variant="body2" paragraph>
              All package prices include round-trip transportation, accommodation, meals, and basic amenities. Additional activities and services may be available at extra cost.
            </Typography>
            
            <Typography variant="h6" gutterBottom>
              How long is the training period?
            </Typography>
            <Typography variant="body2" paragraph>
              Training requirements vary by destination. Lunar trips require 1 week of training, while Mars journeys require 3 weeks of comprehensive preparation.
            </Typography>
            
            <Typography variant="h6" gutterBottom>
              Is space travel safe?
            </Typography>
            <Typography variant="body2" paragraph>
              Dubai Space Travel maintains the highest safety standards in the industry. All vessels undergo rigorous testing and our crew is extensively trained for all scenarios.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Can I upgrade my package after booking?
            </Typography>
            <Typography variant="body2" paragraph>
              Yes, upgrades are available up to 30 days before departure, subject to availability. Contact our customer service team for assistance.
            </Typography>
            
            <Typography variant="h6" gutterBottom>
              What medical requirements are there?
            </Typography>
            <Typography variant="body2" paragraph>
              All travelers must pass a basic health assessment. More rigorous destinations like Mars require additional medical clearance from our space medical team.
            </Typography>
            
            <Typography variant="h6" gutterBottom>
              Are there age restrictions?
            </Typography>
            <Typography variant="body2" paragraph>
              Travelers must be at least 18 years old. There is no upper age limit, but travelers over 65 require additional medical clearance.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Packages; 