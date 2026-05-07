import React ,{useState,useEffect} from 'react';
import { Box, Grid, Paper, Typography, Avatar, LinearProgress } from '@mui/material';
import { Star, ForkLeft, Language, GitHub } from '@mui/icons-material';
import '../Style/DashBoard.css';

const DashboardBody = ({userName}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
//Api calls..when the userName changes 
useEffect(() => {
  if (!userName) return;

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.github.com/users/${userName}`
      );
      const data = await res.json();

      if (data.message === "Not Found") {
        setError("User not found");
        setUser(null);
      } else {
        setUser(data);
      }

      setLoading(false);
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  fetchUser();
}, [userName]);


  return (
    <Box className="dashboard-container">
      <Grid container spacing={3}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {/* Left sidebar: Profile Card */}
        <Grid item xs={12} md={3}>
          <Paper className="glass-card profile-card">
            {/* <Avatar 
              src="https://via.placeholder.com/150" 
              className="profile-avatar"
            /> */}
            <Avatar 
              src={user?.avatar_url} 
              className="profile-avatar"
            />
            {user && (
          <>
            <Typography variant="h5" className="text-white bold mt-2">
              {user.name || user.login}
            </Typography>

            <Typography variant="body2" className="text-muted">
              @{user.login}
            </Typography>
          </>
        )}
            {/* here username passed as a prop 
            <Typography variant="h5" className="text-white bold mt-2">{userName}</Typography> */}
            {/* <Typography variant="h5" className="text-white bold mt-2">Alex Rivera</Typography> */}
            {/* <Typography variant="body2" className="text-muted">@alexdev</Typography> */}
            <Typography variant="body1" className="text-white bio">
               {user?.bio || "No bio available"}.
            </Typography>
            <a href={user?.html_url} target="_blank">
              <button className="github-btn">View on GitHub</button>
            </a>
            
            <Box className="stats-row">
              <div className="mini-stat">
                <Typography className="stat-val">
                  {user?.followers}
                </Typography>
                <Typography className="stat-label">Followers</Typography>
              </div>

              <div className="mini-stat">
                <Typography className="stat-val">
                  {user?.following}
                </Typography>
                <Typography className="stat-label">Following</Typography>
              </div>

              <div className="mini-stat">
                <Typography className="stat-val">
                  {user?.public_repos}
                </Typography>
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