import React from "react";


function DishList(props) {
    console.log(props, '->props<- in Dishlist' );
    

    return (

        <ul className="grid">
        { props.menu
        .filter(dish => props.category === "all" || dish.category === props.category)
        .filter((dish)=> (dish.price >=props.min && dish.price <= props.max)).map(dish => (
          <li  key={dish.id} className='card' >
            <h3>{dish.name} product ID:{dish.id}</h3>
            <p> {dish.description} </p>
            <p> £{dish.price.toFixed(2)} </p>
          
          </li>
        ))
  
            }
          </ul>
    )
    
}
export {DishList}