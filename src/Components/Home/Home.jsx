/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import './Home.css'
import Cart from "../Cart/Cart";
const Home = () => {

     const [allActors, setAllActors] = useState([]); 
     const [selectedActors, setSelectedActors] = useState([]);
    useEffect(() =>{
            fetch('../../../public/data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    },[]) 

    const handleSelectActor = (actor) =>{
        const isExist = selectedActors.find(item => item.id == actor.id);
        let count = actor.salary;
       if (isExist) {
        
           return(
            alert('already added ')
           )
        
       }else{
        
        selectedActors.forEach(item => {
            count = count + item.salary;
        })
        console.log(count);
        setSelectedActors([...selectedActors,actor])
       }
          
    }

    // console.log(selectedActors);


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
                             <button  onClick={()=>handleSelectActor(actor)} className='card-btn'>Select</button>
                         </div>
                     </div>
                    ))
                }
               </div>
                <div className="cart">
                    <Cart selectedActors={selectedActors}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;