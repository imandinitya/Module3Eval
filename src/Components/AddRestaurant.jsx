import { useState } from "react";
import { useRestaurants } from "../context/RestaurantContext";

export default function AddRestaurantForm() {
    const {addRestaurant} = useRestaurants();
    const [form, setForm] = useState({
        restaurantName: "",
        address: "",
        type : "",
        parkingLot : "Yes",
        image : "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    });
    const handleAdd = ()=> {
        if(!form.restaurantName || !form.address){
            alert ("Empty form is not allowed");
            return;
    }
    addRestaurant ({
        ...form,
        restaurantID: Date.now(),
        parkingLot : form.parkingLot === "Yes" ? true : false,
    });
    alert ("Restaurant added");
    setForm ({...form, restaurantName : "", addredd :""});
return (
    <div>
        <h3>Add restaurant</h3>
        <input placeholder="name" value={form.restaurantName} onChange={(e) => setForm({...form, restaurantName: e.target.value})} />
        <input placeholder="Address" value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} />
        <select onChange={(e) => setForm({...form, type: e.target.value})}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
        <button onClick={handleAdd}>Add Restaurant</button>
    </div>
)
}
}