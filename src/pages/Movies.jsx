// import SectionTitle from "../Components/SectionTitle";
// import { darkspider } from "../assets";
import MovieCard from "../components/MovieCard";
import SectionTitle from "../components/SectionTitle";

const Movies = () => {
  return (
    <div
      id="movies"
      className="w-full overflow-hidden-web flex justify-center"
    >
      
      <div className="w-full m-auto relative mt-20  flex flex-col items-center justify-center md:py-28 py-16">
        <div className="w-full h-[180%] mt-[-10%] mb-[-10%] z-10 font-mova xl:w-[80%] ">
          <SectionTitle title="MOVIES" subtitle="movies you may love to see" />
        </div>
        <div className="w-full md:mt-10 flex justify-center">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default Movies;
