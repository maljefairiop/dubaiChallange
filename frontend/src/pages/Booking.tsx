import React, { useState } from 'react';
import { 
  Container, Typography, Box, TextField, FormControl, InputLabel, 
  Select, MenuItem, Button, Paper, Grid, Divider, Chip,
  Dialog, DialogTitle, DialogContent, DialogActions, IconButton,
  Tooltip, Stepper, Step, StepLabel
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloseIcon from '@mui/icons-material/Close';
import Vricon from '@mui/icons-material/ThreeSixty';
import InfoIcon from '@mui/icons-material/Info';

const destinations = [
  { 
    id: 'lunar', 
    name: 'Lunar Hotel', 
    price: 25000, 
    distance: '384,400 km', 
    days: 3,
    previewImage: 'https://images.unsplash.com/photo-1532686255137-43f5dafbc875?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Experience luxury accommodations on the Moon with breathtaking views of Earth and the lunar landscape. Our Lunar Hotel features gravity-adjusted suites, dining facilities, and outdoor viewing platforms.'
  },
  { 
    id: 'mars', 
    name: 'Mars Colony', 
    price: 45000, 
    distance: '54.6 million km', 
    days: 180,
    previewImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Visit the first human settlement on Mars, featuring biodome living spaces, research facilities, and guided excursions to nearby canyons and the famous Olympus Mons.'
  },
  { 
    id: 'station', 
    name: 'International Space Station', 
    price: 15000, 
    distance: '408 km', 
    days: 1,
    previewImage: 'https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Stay in Earth\'s orbit with stunning views of our planet from the International Space Station. Experience zero gravity living and see how astronauts conduct experiments in space.'
  },
  { 
    id: 'venus', 
    name: 'Venus Observatory', 
    price: 35000, 
    distance: '41 million km', 
    days: 120,
    previewImage: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Observe Venus from our high-altitude orbital platform. The Venus Observatory offers climate-controlled viewing areas, research facilities, and unparalleled views of the solar system\'s most mysterious planet.'
  },
];

const seatClasses = [
  { id: 'economy', name: 'Economy', multiplier: 1, features: ['Standard Seat', 'Shared Cabin', 'Basic Meals'] },
  { id: 'business', name: 'Business', multiplier: 1.8, features: ['Reclining Seat', 'Private Cabin', 'Premium Meals', 'Spacesuit Activities'] },
  { id: 'luxury', name: 'Luxury Suite', multiplier: 3, features: ['Full Suite', 'Private Bathroom', 'Gourmet Meals', 'Private Spacesuit Activities', 'Zero-G Lounge Access'] },
];

const steps = ['Select Destination', 'Choose Travel Options', 'Review & Confirm'];

const Booking = () => {
  const [departureDate, setDepartureDate] = useState('');
  const [destination, setDestination] = useState('');
  const [seatClass, setSeatClass] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedDestinationForPreview, setSelectedDestinationForPreview] = useState<(typeof destinations)[0] | null>(null);
  
  const selectedDestination = destinations.find(dest => dest.id === destination);
  const selectedClass = seatClasses.find(cls => cls.id === seatClass);
  
  const calculatePrice = () => {
    if (!selectedDestination || !selectedClass) return 0;
    return selectedDestination.price * selectedClass.multiplier * passengers;
  };

  const totalPrice = calculatePrice();

  const handleOpenPreview = (dest: (typeof destinations)[0]) => {
    setSelectedDestinationForPreview(dest);
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Book Your Space Journey
      </Typography>
      
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Booking Form */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Journey Details
            </Typography>
            
            <Grid container spacing={3}>
              {/* Departure Date */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Departure Date"
                  type="date"
                  fullWidth
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: new Date().toISOString().split('T')[0] }}
                />
              </Grid>
              
              {/* Number of Passengers */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Number of Passengers"
                  type="number"
                  fullWidth
                  value={passengers}
                  onChange={(e) => setPassengers(Math.max(1, parseInt(e.target.value) || 1))}
                  InputProps={{ inputProps: { min: 1, max: 10 } }}
                />
              </Grid>
              
              {/* Destination */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Destination</InputLabel>
                  <Select
                    value={destination}
                    label="Destination"
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    {destinations.map((dest) => (
                      <MenuItem key={dest.id} value={dest.id}>
                        {dest.name} - {dest.distance} - {dest.days} days
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              {/* VR Preview Button */}
              {destination && (
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
                    <Button
                      variant="outlined"
                      startIcon={<Vricon />}
                      onClick={() => handleOpenPreview(destinations.find(d => d.id === destination)!)}
                    >
                      Virtual Reality Preview
                    </Button>
                  </Box>
                </Grid>
              )}
              
              {/* Seat Class */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Seat Class</InputLabel>
                  <Select
                    value={seatClass}
                    label="Seat Class"
                    onChange={(e) => setSeatClass(e.target.value)}
                  >
                    {seatClasses.map((cls) => (
                      <MenuItem key={cls.id} value={cls.id}>
                        {cls.name} (x{cls.multiplier})
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              {/* Navigation Buttons */}
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!departureDate || !destination || !seatClass}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* Order Summary */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Journey Summary
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              {departureDate && (
                <Typography variant="body1" gutterBottom>
                  <strong>Departure:</strong> {departureDate}
                </Typography>
              )}
              
              {selectedDestination && (
                <>
                  <Typography variant="body1" gutterBottom>
                    <strong>Destination:</strong> {selectedDestination.name}
                    <Tooltip title="View destination details">
                      <IconButton 
                        size="small" 
                        onClick={() => handleOpenPreview(selectedDestination)}
                        sx={{ ml: 1 }}
                      >
                        <InfoIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Distance:</strong> {selectedDestination.distance}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Journey Duration:</strong> {selectedDestination.days} days
                  </Typography>
                </>
              )}
              
              {selectedClass && (
                <>
                  <Typography variant="body1" gutterBottom>
                    <strong>Class:</strong> {selectedClass.name}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    {selectedClass.features.map((feature, idx) => (
                      <Chip 
                        key={idx} 
                        label={feature} 
                        size="small" 
                        variant="outlined" 
                        sx={{ mr: 1, mb: 1 }} 
                      />
                    ))}
                  </Box>
                </>
              )}
              
              <Typography variant="body1" gutterBottom>
                <strong>Passengers:</strong> {passengers}
              </Typography>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="h4" gutterBottom>
              Total: ${totalPrice.toLocaleString()}
            </Typography>
            
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              startIcon={<RocketLaunchIcon />}
              disabled={!departureDate || !destination || !seatClass}
              sx={{ mt: 2 }}
            >
              Confirm Booking
            </Button>
          </Paper>
        </Grid>
      </Grid>
      
      {/* VR Preview Dialog */}
      <Dialog
        open={previewOpen}
        onClose={handleClosePreview}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {selectedDestinationForPreview?.name} Preview
          <IconButton
            aria-label="close"
            onClick={handleClosePreview}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 3 }}>
            <img 
              src={selectedDestinationForPreview?.previewImage} 
              alt={selectedDestinationForPreview?.name}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Box>
          <Typography variant="body1" paragraph>
            {selectedDestinationForPreview?.description}
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            Destination Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Distance from Earth:</strong> {selectedDestinationForPreview?.distance}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Travel Duration:</strong> {selectedDestinationForPreview?.days} days
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Base Price:</strong> ${selectedDestinationForPreview?.price.toLocaleString()}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePreview}>Close</Button>
          <Button 
            variant="contained" 
            onClick={() => {
              if (selectedDestinationForPreview) {
                setDestination(selectedDestinationForPreview.id);
                handleClosePreview();
              }
            }}
            color="primary"
          >
            Select This Destination
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Booking; 