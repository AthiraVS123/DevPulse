import React ,{useState,useEffect} from 'react';
import { Box, Grid, Paper, Typography, Avatar, LinearProgress } from '@mui/material';
import { Star, ForkLeft, Language, GitHub } from '@mui/icons-material';
import '../Style/DashBoard.css';
import LanguagePieChart from './LanguageChart';
import {GitHubCalendar} from "react-github-calendar";


const DashboardBody = ({ userName }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [repos, setRepos] = useState([]);

  // Api calls..when the userName changes
  useEffect(() => {
    if (!userName) return;

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");

        // user api
        const res = await fetch(
          `https://api.github.com/users/${userName}`
        );

        const data = await res.json();

        // repo api
        const repores = await fetch(data.repos_url);
        const repodata = await repores.json();

        if (data.message === "Not Found") {
          setError("User not found");
          setUser(null);
        } else {
          setUser(data);
          setRepos(repodata);
        }

        setLoading(false);
      } catch (err) {
        setError("Something went wrong");
        setLoading(false);
      }
    };

    fetchUser();
  }, [userName]);

  const totalStars = repos.reduce((sum, repo) => {
    return sum + repo.stargazers_count;
  }, 0);

  const totalForks = repos.reduce((sum, repo) => {
    return sum + repo.forks_count;
  }, 0);

  // language pie chart
  const languageData = repos.reduce((acc, repo) => {
    const lang = repo.language;

    if (!lang) return acc;

    const existing = acc.find((item) => item.name === lang);

    if (existing) {
      existing.value += 1;
    } else {
      acc.push({
        name: lang,
        value: 1,
      });
    }

    return acc;
  }, []);

  // repo sorting based on star count
  const topRepos = [...repos].sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );
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
                  <Typography variant="h3" className="val">{totalStars}</Typography>
                  <Star className="icon-star" />
                </Box>
              </Paper>
            </Grid>
            {/* Total Forks */}
            <Grid item xs={6}>
              <Paper className="glass-card stat-box">
                <Typography className="label">Total Forks</Typography>
                <Box className="val-row">
                  <Typography variant="h3" className="val">{totalForks}</Typography>
                  <ForkLeft className="icon-fork" />
                </Box>
              </Paper>
            </Grid>
            
            {/* Language Distribution Placeholder */}
            {/* <Grid item xs={12}>
              <Paper className="glass-card chart-container">
                <Typography className="label">Language Distribution</Typography>
                <Box className="placeholder-chart">
                   <LanguagePieChart/>
                </Box>
              </Paper>
            </Grid> */}
          <Grid item xs={12} >
              <Paper
                className="glass-card chart-container"
                sx={{
                  p: 2,
                  minHeight: "100px",
                }}
              >
              
             <Typography
                className="label"
                sx={{
                  mb: 1,
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Language Distribution
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 0,
                }}
              >
                
                {/* PIE CHART */}
              <Box
                sx={{
                  width: "45%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                  <LanguagePieChart data={languageData}/>
                </Box>
                {/* Legends */}
              <Box
                    sx={{
                      width: "55%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      gap: 0,
                    }}
                  >
                    {languageData.map((lang, index) => {
                      const colors = [
                        "#3b82f6",
                        "#facc15",
                        "#38bdf8",
                        "#fb7185",
                        "#00ff88",
                      ];

                      return (
                        <Box
                          key={lang.name}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Box
                            sx={{
                              width: 12,
                              height: 12,
                              borderRadius: "50%",
                              backgroundColor: colors[index % colors.length],
                            }}
                          />

                          <Typography sx={{ color: "#fff" }}>
                            {lang.name}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
            </Paper>
          </Grid>

            {/* Commit Activity Placeholder */}
         <Grid item xs={12} sx={{ mt: 1 }}>
            <Paper
              className="glass-card chart-container"
              sx={{
                padding: 2,
                overflowX: "auto",
              }}
            >
              <Typography className="label" sx={{ mb: 2 }}>
                Commit Activity
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <GitHubCalendar
                  username={userName}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                  colorScheme="dark"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
        </Grid>

        {/* RIGHT SECTION: Repository Insights */}
      <Grid item xs={12} md={3}>
        <Paper
          className="glass-card repo-panel"
          sx={{
            height: "70vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            className="text-white mb-2"
          >
            Repository Insights
          </Typography>

          <Typography
            variant="caption"
            className="text-muted"
            sx={{ mb: 2 }}
          >
            Top Repositories (Sorted by Stars)
          </Typography>

          {/* SCROLLABLE AREA */}
              <Box
                className="repo-list"
                sx={{
                  overflowY: "auto",
                  pr: 1,
                  flex: 1,

                  /* scrollbar styling */
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },

                  "&::-webkit-scrollbar-track": {
                    background: "transparent",
                  },

                  "&::-webkit-scrollbar-thumb": {
                    background: "#7c3aed",
                    borderRadius: "10px",
                  },
                }}
              >
                {topRepos.map((repo) => (
                  <Box
                    key={repo.id}
                    className="repo-item"
                  >
                    <Typography className="repo-name">
                      {repo.name}
                    </Typography>

                    <Box className="repo-meta">
                      <span className="lang-dot"></span>

                      <Typography variant="caption">
                        {repo.language || "Unknown"}
                      </Typography>

                      <Typography variant="caption">
                        ⭐ {repo.stargazers_count}
                      </Typography>
                    </Box>

                    <Typography
                      variant="caption"
                      className="repo-desc"
                    >
                      {repo.description || "No description"}
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