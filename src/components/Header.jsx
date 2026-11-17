function Header(){
    return(
        <div className="bg-[#102C79] px-4 py-3 rounded-xl flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between items-center">
            <div className="flex items-center gap-5">
                <i className="fa-solid fa-cloud-sun-rain text-3xl md:text-6xl" style={{"color": "rgb(255, 212, 59)"}}></i>
                <div className="w-[2px] h-8 md:h-12 bg-[#806BFF] rounded-full"></div>
                <h1 className="text-white font-medium text-xl md:text-3xl">Weather <span className="text-yellow-300">Report</span></h1>
            </div>
            <p className="text-gray-300 text-xs md:text-sm">Check the weather anytime, anywhere...</p>
        </div>
    )
}

export default Header