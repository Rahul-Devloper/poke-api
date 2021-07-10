import {React, useState, useEffect} from 'react'


    function Pokemon() {
        // const [error, setError] = useState(null);
        // const [isLoaded, setIsLoaded] = useState(false);
         const [items, setItems] = useState([]);
      
  
        // useEffect(() => {
        //   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        //     .then(
        //       (result) => {
        //         setIsLoaded(true);
        //         setItems(result.items);
        //       },
            
        //       (error) => {
        //         setIsLoaded(true);
        //         setError(error);
        //       }
        //     )
        // }, [])


      
        // if (error) {
        //   return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //   return <div>Loading...</div>;
        // } else {


        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res=>res.json())
        .then(
          (data)=>{
            setItems(data.results)
          }
        )
          return (
            <ul>
              {items.map((p)=>
              (
                <li>Name: {p.name}</li>
              ))}
            </ul>
          );
        }

export default Pokemon
