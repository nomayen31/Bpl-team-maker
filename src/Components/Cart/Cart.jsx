import './Cart.css'

const Cart = ({ selectedActors, totalCost, remaining }) => {
    // const {id, age, country, image, name , role ,salary} = selectedActors;
    return (
        <div>
            <h5>Total Actors : {selectedActors.length}</h5>
            <h5>Remaining: {remaining}</h5>
            <h5>Total Cost : {totalCost}</h5>
            {
                selectedActors.map((actor) => (
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;