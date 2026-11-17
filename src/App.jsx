import Header from './components/Header';
import Locationcontext from './components/Locationcontext';
import Mainheader from './components/Mainheader';
import Weather from './components/Weather';

function App(){    
    return(
        <div className="bg-[#806BFF] p-10">
            <Header />
            <Locationcontext>
                <Mainheader />
                <Weather />
            </Locationcontext>
        </div>
    )
}

export default App