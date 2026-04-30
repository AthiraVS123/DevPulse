import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../Style/SearchBar.css'

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  backgroundColor: 'rgba(30, 41, 59, 0.5)', // Slate-800 with opacity
  border: '1px solid #3b82f6', // Cyber blue border
  boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)', // Subtle glow
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  width: '100%',
  maxWidth: '500px',
  // height:'',
  display: 'flex',
  alignItems: 'center',
  padding: '4px 12px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#fff',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: '0.9rem',
    '&::placeholder': {
      color: '#94a3b8',
      opacity: 1,
    },
  },
}));

const SearchBar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#0f172a', 
        boxShadow: 'none',
        paddingY: 1 
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        {/* 1. Logo / Name */}
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ 
            fontWeight: 800, 
            display: 'flex', 
            alignItems: 'center',
            background: 'linear-gradient(to right, #00d1ff, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          DevPulse<span style={{ color: '#7c3aed' }}>.</span>
        </Typography>

        {/* 2. Search Field Area */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <SearchContainer>
            <StyledInputBase
              placeholder="Enter GitHub username"
              inputProps={{ 'aria-label': 'search github' }}
            />
          </SearchContainer>
          
          {/* 3. Analyze Button */}
          <Button 
            variant="contained" 
            sx={{ 
              borderRadius: '10px',
              textTransform: 'none',
              fontWeight: 'bold',
              paddingX: 4,
              background: 'linear-gradient(45deg, #7c3aed, #9333ea)',
              boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)',
              '&:hover': {
                background: 'linear-gradient(45deg, #6d28d9, #7e22ce)',
              }
            }}
          >
            Analyze
          </Button>
        </Box>

        {/* Right side spacer for symmetry */}
        <Box sx={{ width: 100, display: { xs: 'none', md: 'block' } }} />

      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;