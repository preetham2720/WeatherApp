import { useContext } from "react"
import { LocationContext } from "./Locationcontext"
import axios from "axios"

function Mainheader(){
    const {location,setlocation,error,seterror,setweatherreport} = useContext(LocationContext)
    function handleloc(e){
        setlocation(e.target.value)
    }

    function locationsearch(){
        if(!location.trim()){
            seterror("Please enter a city name")
            setweatherreport({weather: "", temp: "", desp: ""})
            return
        }

        seterror("")
        const weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7b8ffcc78f5936f0a9c5adda4bc1e628`);
        weather.then((data) => {
            let wetdata = data.data;
            setweatherreport({
                weather: wetdata.weather[0].main,
                temp: wetdata.main.temp,
                desp:  wetdata.weather[0].description

            })
        }).catch(
            (err) => {
                if (err.response?.status === 404) {
                    seterror("City not found! Please enter a valid city.")
                }
                else {
                    seterror("Something went wrong. Please try again.")
                }

                setweatherreport({weather: "", temp: "", desp: ""})
            }
        )
    }

    return(
        <>
            <div className="flex justify-center mt-5">
                <div className="bg-white p-1 pl-4 rounded-xl w-11/12 md:w-1/2 flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-xs md:text-sm"></i>
                    <input value={location} onChange={handleloc} className="outline-none flex-grow text-xs md:text-sm" type="text" placeholder="Enter city name..." />
                    <button onClick={locationsearch} className="bg-blue-600 text-white p-1 rounded-lg hover:opacity-80 text-xs md:text-sm"><i className="text-xs md:text-sm fa-solid fa-magnifying-glass hidden md:inline-block" style={{"color": "#ffffff"}}></i> Search</button>
                </div>
            </div>

            {error && <p className="text-center text-red-600">{error}</p>}
        </>
    )
}

export default Mainheader