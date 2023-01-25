import { useNavigate } from "react-router-dom";

function Highlights() {
  const navigate = useNavigate();
  return (
    <section className="w-5/6 mx-auto flex gap-64 lg:gap-36 md:gap-20 mt-7  items-center  sm:flex-col-reverse">
      <img
        className="w-2/5 md:w-1/2 sm:w-4/6   hover:rotate-[80deg] hover:scale-110 hover:-translate-x-8 transition duration-700 cursor-pointer"
        src="../assets/shoes.png"
        alt=""
      />
      <div className="w-3/5 md:w-1/2 sm:w-full flex-col items-end  sm:items-center sm:text-center">
        <h2 className="text-4xl md:text-2xl text-light-brown font-bold  ">
          HIGHLIGHTS
        </h2>

        <h3 className="text-5xl md:text-3xl text-brown font-bold mt-2 filter drop-shadow ">
          NIKE AIR WITH LIMITLESS CHOICES
        </h3>
        <p className="my-5 text-brown">
          Our Purpose is to move the world forward. We take action by building
          community, protecting our planet and increasing access to sport.
        </p>
        <button
          className="text-cgray bg-light-brown px-3  py-2 rounded-sm active:scale-90 transition-all duration-100 ease-in-out hover:bg-brown  shadow-sm  shadow-light-brown hover:shadow-brown md:text-sm"
          onClick={() => navigate("/collections")}
        >
          Explore More
        </button>
      </div>
    </section>
  );
}

export default Highlights;
