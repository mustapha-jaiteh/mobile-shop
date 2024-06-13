import React from "react";
// import Navbar from "../components/Navbar";
import { Link, useLoaderData } from "react-router-dom";
// import phones from "../services/data.js"
import Footer from "../components/footer";

const Product = () => {
  const phones = useLoaderData();
  return (
    <div>
      <div className="right-div relative z-0 bg-[#def4ed] w-full grid grid-cols-1 lg:grid-cols-4">
        {phones.map((phone) => (
          <div className="card w-[60%] h-[240px] fle flex-row m-6 lg:m-6 gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-fuchsia-500 p-2 relative">
            <img
              src={phone.img}
              alt=""
              className="img h-full w-full p-s3 rounded-md "
            />
            <div className="details absolute top-6 lg:top-16 m-6 p-2 bg-gray-100 rounded-md">
              <h2 className="name font-bold">{phone.name}</h2>
              <Link to={`/products/${phone.id}`}>
                <p className="bg-pink-600 font-thin text-gray-50 p-2  rounded-lg">
                  {phone.detail}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
