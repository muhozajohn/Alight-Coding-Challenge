import Buttons from "../components/Buttons";
import Languages from "../components/Languages";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center -mt-48 text-white ">
      <h1 className="text-7xl font-medium ">Google</h1>
      <Search />
      <Buttons />
      <Languages />
    </div>
  );
};

export default Home;
