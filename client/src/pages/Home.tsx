import Header from "../layouts/Header";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-3 h-screen w-screen bg-[#0F0F0F]">
      <Header />
      <div className="flex flex-col w-full h-full justify-center items-center">
        <h1 className="text-7xl font-bold text-red-600">Mini YouTube</h1>
      </div>
    </div>
  );
};

export default Home;
