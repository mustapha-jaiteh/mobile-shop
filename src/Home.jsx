import { Link, useLoaderData } from "react-router-dom";
// import notes from "../services/data.js"
import Footer from "./components/footer";

function App() {
  // const [count, setCount] = useState(0);
  const home_phones = useLoaderData();
  console.log("notes from the loader: ", { home_phones });

  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-2">
        <div className="left-div relative bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full lg:h-[100vh] w-[100%] ">
          <h1 className="text-gray-100 text-center text-6xl">
            Welcome to{" "}
            <span className="text-pink-600 font-extrabold">MusTech</span> mobile
            solutions
          </h1>
          <h3 className="text-2xl font-bold text-left m-8">
            We deal with all types of mobile phones:
          </h3>
          <p className="ml-16 mr-16 font-medium">
            You can buy a phone or swap your old phone with a new one with a
            reasonable price. <br />
            You can pay at once or in a mortgate. <br />
            All types of latest mobile phones are available
          </p>

          <Link to={"/products"}>
            <button className=" bg-pink-600 rounded-3xl border-gray-300 shadow-md absolute w-16 lg:w-48 h-12 text-gray-100 mt-3 lg:mt-6 ml-32">
              Place an order
            </button>
          </Link>
        </div>
        <div className="right-div relative z-0 bg-[#def4ed] w-full grid grid-cols-1 lg:grid-cols-2">
          {home_phones.map((phone) => (
            <div className="card w-[60%] h-[90%] fle flex-row m-6 lg:m-6 gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-fuchsia-500 p-2 relative">
              <img
                src={phone.img}
                alt=""
                className="img h-full w-full p-s3 rounded-md "
              />
              <div className="details absolute top-6 lg:top-16 m-6 p-2 bg-gray-100 rounded-md">
                <h2 className="name font-bold">{phone.name}</h2>
                <p className="storage font-bold">{phone.storage}</p>
                <p className="price font-bold">{phone.price}</p>
                <p className="bg-pink-600 font-thin text-gray-50 p-2  rounded-lg">
                  {phone.buy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
