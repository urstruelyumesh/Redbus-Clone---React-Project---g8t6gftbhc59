import React from 'react'
import { useState } from 'react';
import SeachResult from './SearchResult';
import { useContext } from 'react';
import { dataContext } from './App';



const MainPage = () => {

    const localContext=useContext(dataContext);
    const {searched, setsearched,theme}=localContext;
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');


    const changevalues = () => {
        setDestination(source);
        setSource(destination);
    }
    const Loadbuses = () => {
        console.log('loadingbuses');
        {source==''||destination==''?setsearched(false) (alert('Please fill the Source and Destination')): setsearched(true)}
        

    }

    return (
        <div className="container-fluid py-2">
        
            
                <div className="hero-wrap">
                    <div className="hero-content">
                        <h1 className='hero-tag my-2'>Book your journey now with the world's largest bus platform</h1>
                    </div>
                    <img src='https://st.redbus.in/Images/rdc/HeroRDC.svg' className='hero-image'/>
                </div>
            
            <div>
                <div className='searchbar my-2'>

                    <div className='wrap'>

                        <label className='inputlbl' htmlFor="source">From</label><br/>
                        <div className='textboxes f1 textarea'>
                            <input className='form-control' type="text" id="source" value={source} onChange={(e) => { setSource(e.target.value); setsearched(false) }} required />
                        </div>
                    </div>

                    <svg  onClick={changevalues} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="100"><path d="M7.72 21.78a.75.75 0 0 0 1.06-1.06L5.56 17.5h14.69a.75.75 0 0 0 0-1.5H5.56l3.22-3.22a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5Zm8.56-9.5a.75.75 0 1 1-1.06-1.06L18.44 8H3.75a.75.75 0 0 1 0-1.5h14.69l-3.22-3.22a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5Z"></path></svg>
                    <div className='wrap'>
                        <label className='inputlbl' htmlFor="destination">To</label>
                        <div>
                            <input className='form-control' type="text" id="destination" value={destination} onChange={(e) => { setDestination(e.target.value); setsearched(false) }} required />
                        </div>
                    </div>
                    <div className='wrap'>
                        <label className='inputlbl' htmlFor="date">Date</label>
                        <div> <input className='form-control' type="date" id="date" value={date} onChange={(e) => { setDate(e.target.value); setsearched(false) }} required />
                        </div>
                    </div>
                    <button className='buton' onClick={Loadbuses}>
                    <div className='btnwrap'>Search</div></button>

            </div>
        
            </div>
            {searched && <SeachResult source={source} destination={destination} />  }    

        </div>

    );
}

export default MainPage;