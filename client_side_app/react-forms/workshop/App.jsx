import React from "react";
import dishes from "../data";
import { DishList } from "./DishList";
import { CategoryFilter } from "./CategoryFilter";

import  {PriceFilter}  from "./PriceFilter";

// const categories = [
//   "all",
//   "burger",
//   "hot dog",
//   "sandwich",
//   "fries",
//   "topping",
//   "drink",
//   "extra",
// ];

function App() {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(9);
  const [category, setCategory] = React.useState("all");
  return (
    <main>
      <section className="filters">

        <h1>Burger Place</h1>
        <form>< PriceFilter min={min} setMin={setMin} max={max} setMax={setMax}/>
        <CategoryFilter category={category} setCategory={setCategory} />
        </form>

  


      </section>
      
      <section className="dishes">
         

     <h2>Dishes</h2>

     < DishList  min={min} max={max} menu={dishes} category={category}/>
       
      </section>
    </main>
  );
}

export default App;
