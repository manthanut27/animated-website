import Video from "../componets/Home/Video";
import HomeTop from "../componets/Home/HomeTop";
import HomeBottom from "../componets/Home/HomeBottom";


const Home = () => {
  return (
    <>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
        <HomeTop />
        <HomeBottom />
      </div>
    </>
    
  );
};

export default Home;