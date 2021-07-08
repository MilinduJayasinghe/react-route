import React, {useState, useEffect} from 'react';


const Shop = () => {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        // const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
        // // const items = await data.json();
        // // console.log(items);
        // .then(res=>res.json())
        
        // setItems(items);
        // const data = await fetch('https://fakestoreapi.com/products')
       
        //     .then(json=>console.log(json))
        //     setItems(items);
    };

    return ( 
        <div>
            {items.map(item => (
                <h1 key={item.itemid}>{item.name}</h1>
            ))}
        </div>
     ); 
}
 
export default Shop;