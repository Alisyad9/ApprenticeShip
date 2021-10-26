import React from "react";

const categories = [
    "all",
    "burger",
    "hot dog",
    "sandwich",
    "fries",
    "topping",
    "drink",
    "extra",
  ];
function CategoryFilter(props) {

    return (
        <fieldset>
            <legend>Categories</legend>

            { categories.map((cat, index)=> (
                <label  key={index} htmlFor={cat}>
                {cat}
                <input
                    type="radio"
                    name="categories"
                    id={cat}
                    value={cat}
                    
                    checked={cat === props.category } 
                    onChange={(event) => props.setCategory(event.target.value)}
                />
            </label>
            )) }
        

        </fieldset>
    )
}

export {CategoryFilter}