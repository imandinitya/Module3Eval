import AddRestaurantForm  from "../Components/AddRestaurantForm";
import RestaurantCard from "../Components/RestaurantCard";
import { useRestaurants } from "../context/RestaurantContext";

export default function AdminDashboard() {
    const { restaurants } = useRestaurants();
    return (
        <div>
            <h2>admin dashboard</h2>
            <AddRestaurantForm/>
            {restaurants.map((r) => (
                <RestaurantCard key={r.id} restaurant={r} />
            ))}
        </div>
    );
}
