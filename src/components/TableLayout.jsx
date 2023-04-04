import React, { useEffect, useState } from "react";

function TableLayout() {
  const [productList, setProductList] = useState([]);

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [filterParam, setFilterParam] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((data) => data.json())
      .then((res) => setProductList(res.products));
  }, []);

  const filteredList = productList.filter((data) => {
    if (filterParam === "title") {
      return data.title.toLowerCase().includes(search.toLowerCase());
    } else if (filterParam === "price") {
      return data.price.toString().toLowerCase().includes(search.toLowerCase());
    } else if (filterParam === "stock") {
      return data.stock.toString().toLowerCase().includes(search.toLowerCase());
    } else if (filterParam === "brand") {
      return data.brand.toLowerCase().includes(search.toLowerCase());
    } else if (filterParam === "category") {
      return data.category.toLowerCase().includes(search.toLowerCase());
    }

    return data.title.toLowerCase().includes(search.toLowerCase());
  });

  const handlePage = (selectedPage) => {
    setPage(selectedPage);
  };
  const styleData = {
    color: "black",
    float: "left",
    padding: "8px 16px",
    textDecoration: "none",
    transition: "background-color .3s",
    border: "1px solid #ddd",
    margin: " 0 4px",
    cursor: "pointer",
  };

  console.log("@SN ", search);
  return (
    <div>
      <div
        style={{ display: "flex", padding: "10px", justifyContent: "center" }}
      >
        <div className="input-group-prepend">
          <select name="" id="" onClick={(e) => setFilterParam(e.target.value)}>
            <option value="title">Title</option>
            <option value="brand">Brand</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
            <option value="stock">Stock</option>
          </select>
        </div>
        <input
          type="text"
          name=""
          value={search}
          id=""
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Title</th>

            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.slice(page * 10 - 10, page * 10).map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block" }}>
          <a style={styleData} href="">
            &laquo;
          </a>
          {[...Array(productList.length / 10)].map((_, i) => {
            return (
              <a key={i} style={styleData} onClick={() => handlePage(i + 1)}>
                {i + 1}
              </a>
            );
          })}
          <a style={styleData}>&raquo;</a>
        </div>
      </div>
    </div>
  );
}

export default TableLayout;
