import React from 'react';

export default function CheeseList(props) {

  const cheeseList = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
  ];

  const cheese = cheeseList.map( (cheese, index) => (
    <li key={index}>
      {cheese}
    </li>
  ));

  return (
    <ul className="cheese-list">
      <li>{cheese}</li>
    </ul>
  )
}