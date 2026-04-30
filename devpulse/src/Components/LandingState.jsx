import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { Analytics, QueryStats, Code } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import '../Style/LandingState.css';

const LandingState = () => {
  return (
    <Container maxWidth="md" className="landing-container">
      <Stack spacing={4} alignItems="center" textAlign="center">
        
        {/* Animated Icon Group */}
        <Box className="icon-group">
          <Code className="floating-icon code" />
          <Analytics className="floating-icon analytics" />
          <QueryStats className="floating-icon stats" />
        </Box>

        <Box>
          <Typography variant="h3" className="landing-title">
            Ready to pulse-check a <span className="highlight">Developer</span>?
          </Typography>
          <Typography variant="h6" className="landing-subtitle">
            Enter a GitHub username above to generate a rich, visual insights dashboard.
          </Typography>
        </Box>

        {/* Feature Highlights */}
        <Grid container spacing={2} justifyContent="center" className="feature-grid">
           <Grid item xs={4}>
             <Typography variant="caption" className="feature-item">⭐ Star Analysis</Typography>
           </Grid>
           <Grid item xs={4}>
             <Typography variant="caption" className="feature-item">📊 Language Mix</Typography>
           </Grid>
           <Grid item xs={4}>
             <Typography variant="caption" className="feature-item">🔥 Activity Pulse</Typography>
           </Grid>
        </Grid>
        
      </Stack>
    </Container>
  );
};

export default LandingState;