import React from 'react';
import img from '../images/full.jpg';


class About extends React.Component
{
    render()
    {
        return(
            <>
          
           <img src={img} style={{ height: '250px', width: '100%' }}/>
            <h1>About Page</h1>
            </>
        )
    }
}
export default About;