
function SocialMedia() {
  return (
    <div
      className={`flex  justify-center items-center md:justify-start my-10 gap-7`}
    >
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Ahmedelwaafy"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook" src="../assets/facebook.svg" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.behance.net/ahmedelwaafy"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram" src="../assets/instagram.svg" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ahmedelwaafy"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="messenger" src="../assets/twitter.svg" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ahmedelwaafy"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="youtube" src="../assets/youtube.svg" />
      </a>
    </div>
  );
};
export default SocialMedia