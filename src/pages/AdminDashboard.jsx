import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import { useRestaurants } from "../context/RestaurantContext";

export default function RestaurantCard({restaurant}) {
    {
        const {auth} = useAuth();
        const {deleteRestaurant} = useRestaurants();
        const navigate = useNavigate();
        const handleDelete = () => {
            if (window.confirm("Are you sure you want to delete this restaurant?")) {
                deleteRestaurant(data.restaurant.id);
            }
        }
    };
    return(
        <div style={{border: "1px solid black", margin: 10}}>
            <h3>{data.restaurant.name}</h3>
            <p>{data.address}</p>
            <p>{data.type}</p>
            <p>Parking: {data.parkingLot ? "yes" : "no"}</p>
            {auth.role === "admin" && (
                <>
                    <button onClick={() => navigate(`/admin/edit-restaurant/${data.restaurant.ID}`)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}

        </div>
    );

}
