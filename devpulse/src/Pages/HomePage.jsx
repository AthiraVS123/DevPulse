import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import DashboardBody from '../Components/Dashboard'
import LandingState from '../Components/LandingState' 

function HomePage() {
  const [hasSearched, setHasSearched] = useState(false);
  //to dispaythe name of the person searched ..need to pass the username as a prop to th dashboard body..
  const[userName,setName]=useState("");


  const handleSearchTrigger = (userName) => {
    if(userName.trim()!=""){
      setHasSearched(true);
      setName(userName);
    }
    
  };

  return (
    <div className='home-container'>
      {/* Pass the function as a prop called 'onAnalyze'  need to pass thsi onanalyze prop on the searchbar component */}
      <SearchBar onAnalyze={handleSearchTrigger} />
      
      {hasSearched ? (
        <DashboardBody userName={userName}/> 
      ) : (
        <LandingState />
      )}
    </div>
  )
}

export default HomePage;