import RestaurantCard from "../components/RestaurantCard";
import { useRestaurants } from "../context/RestaurantContext";
export default function CustomerDashboard() {
    const {restaurants} = useRestaurants();
    return(
        <div>
            <h2>customer dashboard</h2>
            {restaurants.map((r) => (
                <RestaurantCard key={r.id} restaurant={r} />
            ))}
        </div>
    );
}
