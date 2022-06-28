import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_URL=`http://www.omdbapi.com/?i=tt3896198&apikey=cf21cc95&s=titanic`;

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getmovie=async(url)=>{
        try {
            const response= await fetch(url);
            const data = await response.json();
            console.log(data);
            if(data.Response==="True"){
                setLoading(false);
                setMovie(data.search);
            }
    
            
        } catch (error) {
            console.log(error)
        }
      
    }

    useEffect(() => {
     getmovie(API_URL)
    }, [])
    
  return <AppContext.Provider value="sahil"> {children} </AppContext.Provider>;
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };

//http://www.omdbapi.com/?apikey=cf21cc95&s=titanic