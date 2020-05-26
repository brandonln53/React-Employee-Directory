import React from "react";

const Search = (props) => {

  return (
    <div className="d-flex justify-content-center mx-auto">
      <form>
        <input
          placeholder="Search for your teammate here"
          name="search"
          type="text"
          className="form-control-lg search-font mx-auto"
          onChange={(event) => props.startSort(event)}
        />
      </form>
    </div>
  );

}

export default Search;