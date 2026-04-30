import React, { useState } from 'react' // Added useState import
import SearchBar from '../Components/SearchBar'
import DashboardBody from '../Components/Dashboard'
import LandingState from '../Components/LandingState' // Added import

function HomePage() {
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchTrigger = () => {
    setHasSearched(true);
  };

  return (
    <div className='home-container'>
      {/* Pass the function as a prop called 'onAnalyze' */}
      <SearchBar onAnalyze={handleSearchTrigger} />
      
      {hasSearched ? (
        <DashboardBody /> 
      ) : (
        <LandingState />
      )}
    </div>
  )
}

export default HomePage;