import React from 'react';
import { Box, Grid, Paper, Typography, Avatar, LinearProgress } from '@mui/material';
import { Star, ForkLeft, Language, GitHub } from '@mui/icons-material';
import '../Style/DashBoard.css';

const DashboardBody = () => {
  return (
    <Box className="dashboard-container">
      <Grid container spacing={3}>
        
        {/* LEFT SIDEBAR: Profile Card */}
        <Grid item xs={12} md={3}>
          <Paper className="glass-card profile-card">
            <Avatar 
              src="https://via.placeholder.com/150" 
              className="profile-avatar"
            />
            <Typography variant="h5" className="text-white bold mt-2">Alex Rivera</Typography>
            <Typography variant="body2" className="text-muted">@alexdev</Typography>
            <Typography variant="body1" className="text-white bio">
              Building the future with code. Open source enthusiast.
            </Typography>
            <button className="github-btn">View on GitHub</button>
            
            <Box className="stats-row">
              <div className="mini-stat">
                <Typography className="stat-val">128</Typography>
                <Typography className="stat-label">Followers</Typography>
              </div>
              <div className="mini-stat">
                <Typography className="stat-val">90</Typography>
                <Typography className="stat-label">Following</Typography>
              </div>
              <div className="mini-stat">
                <Typography className="stat-val">45</Typography>
                <Typography className="stat-label">Public Repos</Typography>
              </div>
            </Box>
          </Paper>
        </Grid>

        {/* MIDDLE SECTION: Stats & Charts */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* Total Stars */}
            <Grid item xs={6}>
              <Paper className="glass-card stat-box">
                <Typography className="label">Total Stars</Typography>
                <Box className="val-row">
                  <Typography variant="h3" className="val">1,240</Typography>
                  <Star className="icon-star" />
                </Box>
              </Paper>
            </Grid>
            {/* Total Forks */}
            <Grid item xs={6}>
              <Paper className="glass-card stat-box">
                <Typography className="label">Total Forks</Typography>
                <Box className="val-row">
                  <Typography variant="h3" className="val">310</Typography>
                  <ForkLeft className="icon-fork" />
                </Box>
              </Paper>
            </Grid>
            
            {/* Language Distribution Placeholder */}
            <Grid item xs={12}>
              <Paper className="glass-card chart-container">
                <Typography className="label">Language Distribution</Typography>
                <Box className="placeholder-chart">
                   {/* You would insert a Recharts or Chart.js component here */}
                   <div className="dummy-pie"></div>
                   <div className="chart-legend">
                      <p><span></span> TypeScript 45%</p>
                      <p><span></span> JavaScript 30%</p>
                   </div>
                </Box>
              </Paper>
            </Grid>

            {/* Commit Activity Placeholder */}
            <Grid item xs={12}>
              <Paper className="glass-card activity-container">
                <Typography className="label">Commit Activity</Typography>
                <div className="heatmap-placeholder"></div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* RIGHT SECTION: Repository Insights */}
        <Grid item xs={12} md={3}>
          <Paper className="glass-card repo-panel">
            <Typography variant="h6" className="text-white mb-2">Repository Insights</Typography>
            <Typography variant="caption" className="text-muted">Top Repositories (Sorted by Stars)</Typography>
            
            <Box className="repo-list">
              {[1, 2, 3].map((item) => (
                <Box key={item} className="repo-item">
                  <Typography className="repo-name">awesome-project</Typography>
                  <Box className="repo-meta">
                    <span className="lang-dot"></span> 
                    <Typography variant="caption">TypeScript</Typography>
                    <Typography variant="caption">⭐ 450</Typography>
                  </Box>
                  <Typography variant="caption" className="repo-desc">
                    A curated list of modern dev tools.
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
};

export default DashboardBody;