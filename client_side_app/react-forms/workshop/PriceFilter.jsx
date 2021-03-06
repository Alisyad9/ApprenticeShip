import React from 'react';

function PriceFilter(props) {
    console.log(props, "-->props price filter<--");
  return (
    <fieldset>
      <legend>Price</legend>
      <label htmlFor="min-price">
        Min price
        <input
          type="range"
          id="min-price"
          min="0.5"
          max="9"
          step="0.25"
          value={props.min}
          onChange={(event) => props.setMin(event.target.value)}
        />
      </label>

      <label htmlFor="min-price">
        Max price
        <input
          type="range"
          id="min-price"
          min="0.5"
          max="9"
          step="0.25"
          value={props.max}
          onChange={(event) => props.setMax(event.target.value)}
        />
      </label>
    </fieldset>
  );
}

export { PriceFilter} ;
