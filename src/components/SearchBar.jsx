import React, { useState } from "react";
import TableLayout from "./TableLayout";

function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div
        style={{ display: "flex", padding: "10px", justifyContent: "center" }}
      >
        <input
          type="text"
          name=""
          value={search}
          id=""
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
}

export default SearchBar;
