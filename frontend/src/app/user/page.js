"use client"

import { useEffect, useState } from "react";

export default function Inner() {

  const product1 = localStorage.getItem("one");
  const product2 = localStorage.getItem("two");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("http://localhost:3000/api/fetch/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product1, product2 })
      });

      const data = await res.json();

      setData(data.output)
    }
    
    fetchdata();
  }, [])

  console.log(localStorage.getItem("one"))
  console.log(localStorage.getItem("two"))
  console.log("Hello", data)

  return (
    <div>
      <div>
        {
          <div>{data[0]}</div>
        }
      </div>
    </div>
  );
}
