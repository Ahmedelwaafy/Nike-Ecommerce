
function Featured() {
  return (
    <section className="w-5/6 mx-auto flex gap-64 lg:gap-36 md:gap-20 mt-7  items-center sm:flex-col ">
      <div className="w-3/5 md:w-1/2 sm:w-full flex-col items-end  sm:items-center sm:text-center">
        <h2 className="text-4xl md:text-2xl text-cred font-bold  ">FEATURED</h2>

        <h3 className="text-5xl md:text-3xl text-cblack font-bold mt-2 filter drop-shadow ">
          NIKE SNEAKERS AIR LANCING SHOES
        </h3>
        <p className="my-5 text-cblack">
          The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball
          OG that puts a fresh spin on what you know best: durably stitched
          overlays, clean finishes and the perfect amount of flash to make you
          shine.
        </p>
        <button className="text-cgray bg-cred px-3  py-2 rounded-sm active:scale-90 transition-all duration-100 ease-in-out hover:bg-cblack  shadow-sm  shadow-cred hover:shadow-cblack  md:text-sm">
          Explore More
        </button>
      </div>
      <img
        className="w-2/5 md:w-1/2 sm:w-4/6   hover:rotate-[23deg] hover:scale-110 hover:-translate-x-8 transition duration-700 cursor-pointer"
        src="../assets/box.png"
        alt="box"
      />
    </section>
  );
}

export default Featured
