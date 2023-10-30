import { useEffect, useState } from "react";
import './Home.css'
const Home = () => {
     const [allActors, setallActors] = useState([])
    useEffect(() =>{
            fetch('../../../public/data.json')
            .then(res => res.json())
            .then(data => setallActors(data))
    },[]) 
    console.log(allActors);
    return (
        <div className='container'>
            <div className="card-container">
                <div className="card">
                   <div className="card-img">
                    <img className='photo' src="https://i.ibb.co/Rvc67Cr/ar.jpg" alt="" />
                   </div>
                   <h2>Lorem, ipsum.</h2>
                   <p><small>Lorem ipsum dolor sit amet.</small></p>
                   <div className='info'>
                    <p>Salary: 200</p></div>
                    <p>Writer: </p>
                    <div>
                        <button className='card-btn'>Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;