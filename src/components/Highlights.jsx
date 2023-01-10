
function Highlights() {
  return (
    <section className="w-5/6 mx-auto flex gap-64 mt-7  items-center">
      <img
        className="w-2/5 hover:rotate-[80deg] hover:scale-110 hover:-translate-x-8 transition duration-700 cursor-pointer"
        src="../assets/shoes.png"
        alt=""
      />
      <div className="w-3/5 flex-col items-end  sm:items-center sm:text-center">
        <h2 className="text-4xl text-light-brown font-bold  ">HIGHLIGHTS</h2>

        <h3 className="text-5xl text-brown font-bold mt-2 filter drop-shadow ">
          NIKE AIR WITH LIMITLESS CHOICES
        </h3>
        <p className="my-5 text-brown">
          Our Purpose is to move the world forward. We take action by building
          community, protecting our planet and increasing access to sport.
        </p>
        <button className="text-cgray bg-brown px-3  py-2 rounded-sm active:scale-90 transition-all duration-100 ease-in-out hover:bg-light-brown hover:text-brown shadow-sm  shadow-brown">
          Explore More
        </button>
      </div>
    </section>
  );
}

export default Highlights