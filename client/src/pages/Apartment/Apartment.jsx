import { Helmet } from "react-helmet";
import Card from "./Card";



const Apartment = () => {
  return (
    <>
      <Helmet>
        <title>BMS || Apartment</title>
      </Helmet>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {/* Search functionality */}
        <Card />
        <Card />
        <Card />
        <Card />

        {/* {pagation start here} */}
      </div>
    </>
  );
};

export default Apartment;