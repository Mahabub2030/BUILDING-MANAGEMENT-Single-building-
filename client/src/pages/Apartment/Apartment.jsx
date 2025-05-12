import { Helmet } from "react-helmet";
import Card from "./Card";



const Apartment = () => {
  return (
    <>
      <Helmet>
        <title>BMS || Apartment</title>
      </Helmet>
      <div className="min-h-screen p-4 pt-20 ">
        <h2 className="text-2xl font-bold text-gray-800 font-serif ">
          Apratments
        </h2>
        {/* Search functionality */}
        <div className="flex mb-6 gap-5">
          <input
            type="number"
            placeholder="min rent"
            className="border p-2 rounded w-1/2"
          />
          <input
            type="number"
            placeholder="Max Rent"
            className="border p-2 rounded w-1/2"
          /> 
          <button className="bg-blue-400 text-white py-2 px-4 rounded">Search</button>
        </div>
        <Card />
        {/* {pagation start here} */}

      </div>
    </>
  );
};

export default Apartment;