import { useContext } from "react";
import { LocationContext } from "./Locationcontext";

function Weather(){
    const {weatherreport} = useContext(LocationContext)

    return(
        <div className="flex justify-between mt-5 gap-2">
            <div className="flex flex-col items-center bg-[#D5F8E8] p-2 rounded-lg flex-grow">
                <i className="fa-solid fa-cloud text-xl md:text-3xl"></i>
                <h3 className="font-medium text-sm md:text-2xl text-gray-600">Weather</h3>
                <p className="pt-2 text-[#10245A] text-xs md:text-xl">{weatherreport.weather || "--"}</p>
            </div>
            <div className="flex flex-col items-center bg-[#E8DEFF] p-2 rounded-lg flex-grow">
                <i className="fa-solid fa-temperature-high text-xl md:text-3xl"></i>
                <h3 className="font-medium text-sm md:text-2xl text-gray-600">Temperature</h3>
                <p className="pt-2 text-[#10245A] text-xs md:text-xl">{weatherreport.temp !== ""?`${weatherreport.temp} °C`: "--"}</p>
            </div>
            <div className="flex flex-col items-center bg-[#FFF0CE] p-2 rounded-lg flex-grow">
                <i className="fa-solid fa-cloud-showers-water text-xl md:text-3xl"></i>
                <h3 className="font-medium text-sm md:text-2xl text-gray-600">Description</h3>
                <p className="pt-2 text-[#10245A] text-xs md:text-xl text-center">{weatherreport.desp || "--"}</p>
            </div>
        </div>
    )
}

export default Weather