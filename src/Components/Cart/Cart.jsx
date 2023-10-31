import './Cart.css'

const Cart = ({selectedActors}) => {
    // const {id, age, country, image, name , role ,salary} = selectedActors;
    return (
        <div>
            <h5>Total Actors : {selectedActors.length}</h5>
            {
                selectedActors.map((actor)=>(
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;