import React from "react";
import cityIDs from "./citylist.json";

function FixingData(props) {
  const filterText = props.filter;

  return (
    <ul>
      {cityIDs
        .filter((c) => c.name.toLowerCase().includes(filterText))
        .sort((a, b) => { return a.name < b.name })
        .splice(0, 20)
        .map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
    </ul>
  );
}

export default FixingData;
