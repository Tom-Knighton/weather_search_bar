import React from "react";
import TextField from "@mui/material/TextField";

function SearchBar(props) {
  let inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    props.onTextChange(lowerCase);
  };

  return (
    <div className="searchbar">
      <TextField
        id="outlined-basic"
        onChange={inputHandler}
        variant="outlined"
        fullWidth
        label="Search"
      />
    </div>
  );
}

export default SearchBar;
