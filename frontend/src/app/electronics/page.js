"use client"

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";


async function getdata() {

  const [product1, setPro1] = useState();
  const [product2, setPro2] = useState();

  setPro1(localStorage.getItem("one"))
  setPro2(localStorage.getItem("two"))

  const res = await fetch("http://localhost:3000/api/fetch/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product1, product2 })
  });

  if (res != ok) {
    alert("Result is not OK repair it...")
  }

  return res.json()
}

export default function Electronics() {

  const [data, setData] = useState([]);
  const [sel1, setSel1] = useState();
  const [sel2, setSel2] = useState();

  const box = useRef();
  const btn = useRef();

  function open() {
    box.current.classList.toggle("hidden");
  }

  function close() {
    box.current.classList.toggle("hidden");
  }

  useEffect(() => {

    const fetchdata = async () => {
      const prod_data = await fetch("http://localhost:3000/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category: "Electronics" }),
      });

      const res = await prod_data.json();

      setData(res.output);
    }

    fetchdata();

    sessionStorage.setItem("two", JSON.stringify(sel2));

    console.log("Hello0", sel2)

  }, [])
  console.log("Hello1", sel1);
  console.log("Hello2", sel2);
  console.log("Data", data);

  function select1(e) {
    setSel1(e.target.value);
    localStorage.setitem("one", JSON.stringify(sel1));
  }

  function select2(e) {
    setSel2(e.target.value);
    localStorage.setitem("two", JSON.stringify(sel2));
  }

  return (
    <div>
      <Navbar />
      <main className="main hero">
        <div className="title has-text-centered">Electronics section</div>
        <div className="container">
          <div className="field">
            <div className="control has-icons-left">
              <input
                className="input is-medium"
                type="text"
                placeholder="Search"
              />
              <span className="icon is-large is-left">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
          <form id="form_comp">
            <div className="flex justify-between items-center p-8">
              <div className="flex justify-center">
                <div className="select is-centered is-medium is-link">
                  <select onChange={select1}>
                    {
                      data.map((items) => (
                        <>
                          <option value="none" selected disabled hidden>Select a Option</option>
                          <option value={items.ProductId}>
                            {items.Title}
                          </option>
                        </>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="flex justify-center text-center">
                <span className="block subtitle">VS</span>
              </div>
              <div className="flex justify-center">
                <div className="select is-centered is-medium is-link">
                  <select onChange={select2}>
                    {
                      data.map((items) => (
                        <>
                          <option value="none" selected disabled hidden>Select a Option</option>
                          <option value={items.ProductId}>
                            {items.Title}
                          </option>
                        </>
                      ))
                    }

                  </select>
                </div>
              </div>
            </div>
            <div>
              <div onClick={open} className="button is-link is-medium"
              >Compare</div
              >
            </div>
            <div ref={box} className="w-screen h-screen bg-slate-900 hidden fixed top-0 left-0 z-50">
              <span ref={btn} onClick={close} className="fixed top-0 right-0 flex justify-center items-center text-black text-4xl bg-white w-[50px] h-[50px] rounded-full cursor-pointer m-4">X</span>
              <div className="flex justify-center items-center gap-[100px] h-screen">
                <div className="flex flex-col items-center gap-8">
                  <div id="img" style={{backgroundImage: 'url(/smartphone1.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' , width: '500px', height: '400px'}}></div>
                  <div className="flex flex-col gap-4">
                    <span className="text-xl font-bold">Samsung Galaxy S21</span>
                    <span className="text-base">Flagship smartphone with advanced features</span>
                    <span>&#8377; 7,999</span>
                    <span className="p-2 bg-yellow-500 w-[100px] text-black">Rating 4.5</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-8">
                  <div id="img" style={{backgroundImage: 'url(/laptop1.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' , width: '500px', height: '400px'}}></div>
                  <div className="flex flex-col gap-4">
                    <span className="text-xl font-bold">Apple Macbook Pro</span>
                    <span className="text-base">Powerful laptop for professional use</span>
                    <span>&#8377; 1,00,000</span>
                    <span className="p-2 bg-yellow-500 w-[100px] text-black">Rating 5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="section">
          <div class="section">
            <div class="columns">
              <div id="stuff" className="mx-4">
                <div class="card">
                  <div class="card-image">
                    <img
                      src="/smartphone1.jpg"
                      alt="image"
                      className="w-[300px] h-[300px]"
                    />
                  </div>
                  <div class="card-footer">
                    <span class="card-footer-item has-text-weight-bold items">
                      <span class="mr-4">
                        Samsung
                      </span>
                      <span>&#8377; 7,999</span>
                      <input
                        id="inputChecked"
                        type="checkbox"
                        class="ml-4"
                      />
                      <input
                        id="inputHidden"
                        type="hidden"
                        value=""
                        name="PI"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div id="stuff" className="mx-4">
                <div class="card">
                  <div class="card-image">
                    <img
                      src="/laptop1.jpg"
                      alt="image"
                      className="w-[300px] h-[300px]"
                    />
                  </div>
                  <div class="card-footer">
                    <span class="card-footer-item has-text-weight-bold items">
                      <span class="mr-4">
                        Apple Macbook pro
                      </span>
                      <span>&#8377; 1,59,00 </span>
                      <input
                        id="inputChecked"
                        type="checkbox"
                        class="ml-4"
                      />
                      <input
                        id="inputHidden"
                        type="hidden"
                        value=""
                        name="PI"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
