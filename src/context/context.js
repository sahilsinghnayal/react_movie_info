import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_URL=`http://www.omdbapi.com/?&apikey=${process.env.REACT_APP_KEY}`;

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show:"false",msg:" "});
    const [query, setQuery] = useState("Avengers")
    const getmovie=async(url)=>{
        try {
            const response= await fetch(url);
            const data = await response.json();
            console.log(data);
            if(data.Response==="True"){
                setLoading(false);
                setMovie(data.Search);
                setIsError({
                    show:"false",
                    msg:data.Error,
                })
            }
            else{
                setIsError({
                    show:"true",
                    msg:data.Error,
                })
            }
    
            
        } catch (error) {
            console.log(error)
        }
      
    }

    useEffect(() => {
       let Timer= setTimeout(() => {
            getmovie(`${API_URL}&s=${query}`)
        }, 1000);
       return()=> clearInterval(Timer)
     
    }, [query])  
  
    
  return <AppContext.Provider value={{loading,movie,isError,query, setQuery}}> {children} </AppContext.Provider>;
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };

