import React, { useEffect, useState } from "react";

function TableLayout() {
  const [productList, setProductList] = useState([]);

  const [page, setPage] = useState(1);

  const [total, setTotal] = useState(null);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");

  const [filterParam, setFilterParam] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=&limit=10&skip=${skip}`)
      .then((data) => data.json())
      .then((res) => setProductList(res.products));
    fetch(`https://dummyjson.com/products/search?q=&limit=10`)
      .then((data) => data.json())
      .then((res) => setTotal(res.total));
  }, [skip]);

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
    if (selectedPage === 1) {
      setSkip(10);
    } else if (selectedPage === 2) {
      setSkip(20);
    } else if (selectedPage === 3) {
      setSkip(30);
    } else if (selectedPage === 4) {
      setSkip(40);
    } else if (selectedPage === 5) {
      setSkip(50);
    } else if (selectedPage === 6) {
      setSkip(60);
    } else if (selectedPage === 7) {
      setSkip(70);
    } else if (selectedPage === 8) {
      setSkip(80);
    } else if (selectedPage === 9) {
      setSkip(90);
    } else if (selectedPage === 10) {
      setSkip(100);
    }
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

  console.log("@SN skip", skip);
  console.log("@SN productList", productList);
  return (
    <div>
      <div
        style={{ display: "flex", padding: "10px", justifyContent: "center" }}
      >
        <div>
          <select
            name=""
            id=""
            onClick={(e) => setFilterParam(e.target.value)}
            style={{ minHeight: "-webkit-fill-available" }}
          >
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
      <table className="table">
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
          {filteredList.map((item, index) => {
            return (
              <tr key={index}>
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
          {[...Array(total / 10)].map((_, i) => {
            return (
              <a key={i} style={styleData} onClick={() => handlePage(i)}>
                {i}
              </a>
            );
          })}
          <a style={styleData} href="">
            &raquo;
          </a>
        </div>
      </div>
    </div>
  );
}

export default TableLayout;
