import Theme from "./Theme";
import HeaderImage from "./HeaderImage";
function Header() {
  return (
    <>
      <section className="flex mb-8 items-center gap-4  md:gap-6 animate__animated animate__fadeIn">
        <div className="h-full  animate-fade-in flex items-center">
          <HeaderImage />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h1 className="text-lg md:text-2xl font-bold truncate mb-2">
                Alvin G. Gerolao
              </h1>
              <svg
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 flex-shrink-0"
                aria-label="Verified user"
              >
                <path
                  d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  fill="#1d9bf0"
                ></path>
              </svg>
            </div>
            <Theme />
          </div>
          <p className="text-xs mb-1 md:text-sm  mt-0.5 flex items-center gap-1">
            <i className="fa-solid fa-location-crosshairs"></i>
            <span className="truncate">Laguna, Philippines</span>
          </p>
          <p className="text-xs mb-1 md:text-sm  mt-0.5 flex items-center gap-1">
            <i className="fa-solid fa-phone"></i>

            <span className="truncate">+639928111029</span>
          </p>
          {/* <p className="text-xs mb-1 md:text-sm  mt-0.5 flex items-center gap-1">
            <i className="fa-solid fa-envelope"></i>

            <span className="truncate">gerolaoalvin436@gmail.com</span>
          </p> */}
          <div className="flex mb-2 items-center justify-between mt-1.5 md:mt-2">
            <p className="text-[10px] md:text-base">Full-stack Developer</p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/portfolio/GerolaoAlvinResume.pdf"
              download
              className="inline-flex items-center h-7 md:h-8 rounded-lg 
                        bg-primary text-white
                        px-2.5 md:px-4 text-[8px] md:text-xs font-medium 
                        transition-all duration-200 
                        hover:opacity-90
                        hover:-translate-y-0.5 
                        gap-1 md:gap-1.5 whitespace-nowrap 
                        no-underline"
            >
              <span className="text-left">Download CV</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
