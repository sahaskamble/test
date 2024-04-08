"use client"
import Navbar from "@/app/components/Navbar";
import { useEffect, useState } from "react";

export default function Admin() {

  const [data, setData] = useState([]);
  var count = 0;

  useEffect(() =>{
    const fetchdata = async () =>{
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      setData(data.output);
    }

    fetchdata();
  },[])

  console.log(data)

  return(
    <div>
      <Navbar />
      <main>
        <div className="section">
          <div className="section py-1 px-3">
            <div className="columns">
              <div
                className="column is-10 title has-text-centered is-underlined py-4"
                >
                Products Dashboard
              </div>
              <div className="column"></div>
              <div className="column">
                <a href="/admin/admin_panel" className="button is-link"
                >Add Products</a
                >
              </div>
            </div>
          </div>
          <div className="section">
            <table className="table is-hoverable is-fullwidth">
              <thead>
                <tr className="has-text-weight-bold is-size-5">
                  <th>No.</th>
                  <th>Category</th>
                  <th>Subcategory</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Company</th>
                  <th>Ratings</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="is-size-6">
                {
                  data.map((items) => (
                    <tr>
                    <th>{(count = count + 1)}</th>
                    <th>{items.CategoryName}</th>
                    <th>{items.SubCategoryName}</th>
                      <th>{items.Title}</th>
                    <th>{items.Description}</th>
                      <th>{items.Price}</th>
                      <th>{items.Company}</th>
                      <th>{items.Ratings}</th>
                      <th>
                        <a
                          className="button is-danger"
                          href={`http://localhost:3000/api/delete/product/?product_id=${items.ProductId}`}
                          >
                          Delete
                        </a>
                      </th>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
