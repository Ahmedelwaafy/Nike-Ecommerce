import { Player } from "@lottiefiles/react-lottie-player";

function UnderConstruction() {
  return (
    <div className="h-[100vh] w-full pt-12">
      <Player
        src="https://assets5.lottiefiles.com/packages/lf20_hntzYU.json"
        style={{ height: "500px", width: "500px" }}
        loop
        autoplay
      />
      <h1 className="text-4xl font-bold font-Anton text-center">
        Under Construction
      </h1>
      <h2 className="text-2xl text-center mt-3">
        We're Currently Working on this Page
      </h2>
    </div>
  );
}

export default UnderConstruction;
