import { useState,createContext } from "react";

const LocationContext = createContext();
function Locationcontext(data){
    const [location,setlocation] = useState("");
    const [error,seterror] = useState("");
    const [weatherreport,setweatherreport] = useState({ weather: "", temp: "", desp: "" })

    return(
        <LocationContext.Provider value={{location,setlocation,error,seterror,weatherreport,setweatherreport}}>
            {data.children}
        </LocationContext.Provider>
    )
}

export default Locationcontext
export {LocationContext}