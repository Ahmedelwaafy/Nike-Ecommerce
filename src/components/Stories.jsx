import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { truncate } from "lodash";
import Loader from "./Utility Components/Loader";

function Stories({ stories, isLoading, isError, error }) {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <h3>
        We're sorry, something went wrong, we work on that {error.message}
      </h3>
    );
  }

  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <section className="w-11/12 mx-auto">
      <h2 className="text-4xl font-bold sm:text-center md:text-2xl ">
        Top Stories
      </h2>

      <div className="mt-7">
        <Splide options={splideOptions}>
          {stories.map((story, i) => (
            <SplideSlide key={i}>
              <div className="flex-col pb-2 rounded-lg shadow-md shadow-slate-400 ring-1 ring-[#0AC1EF] overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="max-w-80 h-64  object-cover shadow-md shadow-slate-300 hover:scale-110 transition-all duration-500 "
                  />
                </div>
                <div className="flex-col  mt-4">
                  {/**Icons */}
                  <div className="flex justify-between items-center px-3 ">
                    <div className="flex gap-1 items-center ">
                      <img src="../assets/heart.svg" alt="heart-icon" />
                      <span className="text-xs font-bold ">{story.like}</span>
                    </div>

                    <div className="flex gap-1 items-center ">
                      <img src="../assets/clock.svg" alt="heart-icon" />
                      <span className="text-xs font-bold ">{story.time}</span>
                    </div>

                    <div className="flex gap-1 items-center ">
                      <img src="../assets/hashtag.svg" alt="heart-icon" />
                      <span className="text-xs font-bold text-[#0AC1EF]">
                        {story.by}
                      </span>
                    </div>
                  </div>

                  {/**Content */}
                  <div className="flex-col mt-5 px-3">
                    <h2 className="font-semibold sm:text-sm ">{story.title}</h2>
                    <p className="text-sm sm:text-xs mt-1 ">
                      {truncate(story.text, { length: 175 })}
                    </p>

                    <a
                      className="mt-6 mb-2 block text-center bg-[#0AC1EF] text-cgray font-bold  py-2 sm:text-sm  rounded-lg active:scale-90 transition-all duration-100 ease-in-out shadow-sm  shadow-[#0AC1EF]  "
                      href={story.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {story.btn}
                    </a>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default Stories;
