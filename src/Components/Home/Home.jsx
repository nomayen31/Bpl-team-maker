/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import './Home.css'
const Home = () => {
     const [allActors, setallActors] = useState([]); 
    useEffect(() =>{
            fetch('../../../public/data.json')
            .then(res => res.json())
            .then(data => setallActors(data))
    },[]) 

    console.log(allActors);

    console.log(allActors);
    return (
        <div className='container'>
            <div className="home-container">
               <div className="card-container">
                {
                    
                    allActors.map((actor) =>(
                        <div key={actor.id} className="card">
                        <div className="card-img">
                         <img className='photo' src={actor.image} alt="" />
                        </div>
                        <h2>{actor.name}</h2>
                        <p><small>Lorem ipsum dolor sit amet.</small></p>
                        <div className='info'>
                         <p>Salary: {actor.salary}$</p></div>
                         <p>Writer: {actor.role}</p>
                         <div>
                             <button className='card-btn'>Select</button>
                         </div>
                     </div>
                    ))
                }
               </div>
                <div className="cart">
                    <h1>This is Cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;