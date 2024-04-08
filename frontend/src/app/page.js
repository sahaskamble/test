"use client"
import Navbar from "./components/Navbar";

export default function Home() {
  const carditems = [
    {
      header: "Electronics",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/electronics",
    },
    {
      header: "Home Decor",
      image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/house_decor",
    },
    {
      header: "House Appliances",
      image: "https://images.pexels.com/photos/6125666/pexels-photo-6125666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/house_appliances",
    },
    {
      header: "Automobiles",
      image: "https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/automobile",
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="">
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-[50dvw] px-4 text-3xl">
            <div className="brand_name font-extrabold text-8xl text-slate-600 py-4">Pick<span className="text-[--fg-color]">Wise</span></div>
            <p className="text-2xl py-2 font-bold">Your Guide to Better Picks</p>
            <p className="text-xl font-light py-3 w-3/4">
              PickWise is a cutting-edge decision-making platform that
              helps users make smarter choices based on data-driven
              insights.
            </p>
            <button className="px-4 py-3 bg-[--fg-color] text-white text-base rounded-lg">Read more</button>
          </div>
          <div
            className=""
          >
            <img src="/illustration1.jpg" alt="This is img" width={600} className="rounded-3xl" />
          </div>
        </div>
        <div className="w-screen h-screen" id="product">
          <main className="">
            <div className="h-screen flex justify-center items-center gap-8">
              {
                carditems.map((items) => (
                  <a href={items.link}>
                    <div title={items.header} className="border border-black rounded-md">
                      <img
                        src={items.image}
                        alt="card image"
                        className="card_img w-[300px] h-[400px]"
                      />
                      <div className="text-center text-xl font-bold py-3">{items.header}</div>
                    </div>
                  </a>
                ))
              }
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
