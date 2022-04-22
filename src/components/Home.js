import React from 'react';
import Footer from './Footer';
//import CarouselImage from './Carousel';

function Home() {
    
    let container = {
        display: "block",
        width: "100%",
    };
    
    let heading = {
        textAlign: "center",
        fontSize: "30px",
    };
  
    let para = {
        color: "black",
        textAlign: "center",
        margin: "20px",
    };
  
    return (
        <>
            <div style={container}>
                <h1 style={heading}>Welcome</h1>
               {/*<CarouselImage/>*/}
                <p style={para}>Welcome to Jawahar Navodaya Vidyalaya, Kishanganj (Bihar), a co-educational residential school situated in District Kishanganj in the state of Bihar.</p>
            </div>
            <Footer position="absolute"/>
        </>
    );
}

export default Home;