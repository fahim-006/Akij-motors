const HeaderTop = () => {
  return (
    <div className="relative z-50 hidden w-full text-white md:block bg-akij-red">
      <div className="container mx-auto ">
        <div className="flex justify-between w-full font-bold md:flex-row ">
          <div className="relative z-10 flex items-center justify-center w-40 px-2 py-1 text-xs font-light rounded-full shadow-2xl cursor-pointer">
            <i className="px-1">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </i>
            <a className="font-bold" href="tel:01755662545">
              +880 1755-662545
            </a>
            {/* <div className="absolute z-0 inline-flex w-11/12 bg-white rounded-full opacity-75 h-5/6"></div> */}
          </div>
          {/* <div className="relative z-10 flex items-center justify-center w-40 px-2 py-1 text-xs font-light rounded-full shadow-2xl">
                            <i className="px-1 "><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg></i>
                            <p className="font-bold">Uttara, Dhaka 1215</p>
                        </div> */}
          <div className="relative z-10 flex items-center justify-center w-40 px-2 py-1 text-xs font-light rounded-full shadow-2xl">
            <i className="px-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </i>
            <a className="font-bold" href="mailto:info@akijmotors.com">
              info@akijmotors.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
