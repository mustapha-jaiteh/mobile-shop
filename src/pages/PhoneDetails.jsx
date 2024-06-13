import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { getPhoneById } from "../services/data";
// import Navbar from "../components/Navbar";

const PhoneDetails = () => {
  let params = useParams();
  const phoneId = params.id;
  let phone = getPhoneById(phoneId);
  // console.log(phoneId);
  // const phones = useLoaderData();

  return (
    <>
      <div className="Phone grid grid-cols-3">
        <div className="image">
          <h2 className=" text-4xl font-bold justify-center w-full m-2 ml-16">
            {phone.name}
          </h2>
          <div className="card w-[60%] h-[400px] fle flex-row m-6 lg:ml-16 gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-fuchsia-500 p-2 relative">
            <img
              src={phone.img}
              alt=""
              className="img h-full w-full p-s3 rounded-md "
            />
          </div>
        </div>
        <div className="details  h-[450px] bg-slate-950 text-gray-100 p-8 mt-10 rounded-md space-y-2">
          <h2 className="name font-bold">
            <span className="font-bold">Model name:</span> {phone.name}
          </h2>
          <p>
            {" "}
            <span className="font-bold">Storage:</span>
            {phone.storage}
          </p>
          <p>
            <span className="font-bold">Batery capacity:</span>
            {phone.batery}
          </p>
          <p>
            <span className="font-bold">Software version:</span>
            {phone.software}
          </p>
          <p>
            <span className="font-bold">RAM:</span>
            {phone.ram}
          </p>
          <p>
            <span className="font-bold">Price:</span>
            {phone.price}
          </p>
          <p>
            <span className="font-bold">Description:</span>
            {phone.description}
          </p>
        </div>

        <div className="buttons ">
          <button className=" bg-pink-600 rounded-3xl border-gray-300 shadow-md absolute w-16 lg:w-60 h-16 text-gray-100 mt-3 lg:mt-24  right-12 bottom-6">
            Place an order
          </button>
          <h4 className="text-4xl font-bold mt-8 ml-10 mr-16 z-20 ">
            We have stores in all major towns:
          </h4>
          <p className="text-lg mt-4 ml-10 mb-6 mr-16 z-20 font-semibold">
            Banjul <br />
            Serrekunda <br />
            Westfield <br />
            Brikama <br />
          </p>
          <p className=" m-6">
            We offer free delivery for our onlile customers
          </p>
        </div>
      </div>
    </>
  );
};

export default PhoneDetails;
