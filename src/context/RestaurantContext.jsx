import { createContext, useContext, useEffect, useState} from "react";
const RestaurantContext = createContext();
export const RestaurantProvider = ({Childern}) => {
    const [restaurants, setRestaurants] = useState (
        JSON.parse(localStorage.getItem("restaurants")) || []
        );

    useEffect (() => {
        localStorage.setItem ("evenData", JSON.stringify(restaurants));
     },  [restaurants]);
    
     const addRestaurant = (data) => {
        setRestaurants ([...restaurants, data])
    };
    
    const updateRestaurant = (updated) => {
        setRestaurants (
            restaurants.map((r) => r.id === updated.id ? updated : r)
        );
    };

    const deleteRestaurant = (id) => {
        setRestaurants (restaurants.filter((r) => r.restaurantID !== id));
    };
    return(
        <RestaurantContext.Provider value= {{restaurants, addRestaurant, updateRestaurant, deleteRestaurant}}>
            {Childern}
        </RestaurantContext.Provider>
    );
};

export const useRestaurants = ()=> useContext(RestaurantContext);