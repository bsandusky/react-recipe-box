import React from 'react';

const Directions = (props) => {

    const DirectionItems = props.directions.map((direction) => {

      return (
        <li key={direction} className="list-group-item">
          {direction}
        </li>
      )
    });

    return (
      <div className="directions">Directions
        <ol className="list-group">
          {DirectionItems}
        </ol>
      </div>
    );
}

export default Directions;
