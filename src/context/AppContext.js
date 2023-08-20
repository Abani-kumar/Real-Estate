import { createContext, useState } from "react";

export const AppContext=createContext();

function AppContextProvider({children}){
    const [loader,setLoader]=useState();
    const [data,setData]=useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e1bbe2b0b4msh422fca653986649p16b65ejsn01bf0f42f371',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };

    let baseurl='https://bayut.p.rapidapi.com';

    async function fetchApi(url){
        setLoader(true);
        try{
            const output=await fetch(url,options);
            const res=await output.json();
            setData(res.hits);
        }
        catch(err){
            console.log('error in data',err);
        }
        finally{
            setLoader(false);
        }

    }

    let value={
        loader,
        setLoader,
        data,
        setData,
        baseurl,
        fetchApi,
        options
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;