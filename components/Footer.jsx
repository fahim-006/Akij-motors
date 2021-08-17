import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-akij-blue bg-gradient-to-br from-akij-blue to-akij-lblue">
      <div className="w-full">
        <div className="container flex flex-col justify-between px-2 py-5 mx-auto uppercase md:flex-row">
          <div className="hidden md:block">
            <Link
              href="/"
              passHref
              className="flex justify-center w-full p-2 text-white"
            >
              <Image
                src="/newlogo.svg"
                width={150}
                height={94}
                alt="Akij Logo"
              />
            </Link>
            <ul className="flex justify-center w-full my-5 text-lg font-medium tracking-wide text-gray-900">
              <li className="flex items-center justify-center w-8 h-8 mx-2 text-white border border-gray-400 shadow-lg hover:bg-akij-red">
                <a className="p-2" href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
              </li>
              <li className="flex items-center justify-center w-8 h-8 mx-2 text-white border border-gray-400 shadow-lg hover:bg-akij-red">
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                  </svg>
                </a>
              </li>
              <li className="flex items-center justify-center w-8 h-8 mx-2 text-white border border-gray-400 shadow-lg hover:bg-akij-red">
                <a href="/blog">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </li>
              <li className="flex items-center justify-center w-8 h-8 mx-2 text-white border border-gray-400 shadow-lg hover:bg-akij-red">
                <a href="/blog">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    idth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-row justify-around w-full px-4">
            <div className="items-center flex-1 py-3 md:w-auto md:pl-16">
              <h1 className="py-2 font-bold text-white capitalize md:uppercase">
                support
              </h1>
              <ul className="text-xs font-medium leading-6 tracking-wider text-white capitalize ">
                <li>
                  <Link href="/blog">
                    <a className="hover:text-akij-red">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a className="hover:text-akij-red">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/calculator">
                    <a className="hover:text-akij-red">Calculator</a>
                  </Link>
                </li>
                <li>
                  <Link href="/powerpoint">
                    <a className="hover:text-akij-red">Powerpoint(PPTX)</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden py-3 md:block md:flex-1 md:w-auto">
              <h1 className="py-2 font-bold text-white capitalize md:uppercase">
                Dealership
              </h1>
              <ul className="text-xs font-medium leading-6 tracking-wider text-white capitalize">
                <li>
                  <Link href="/apply">
                    <a className="hover:text-akij-red">Apply</a>
                  </Link>
                </li>
                <li>
                  <Link href="/requireddocument">
                    <a className="hover:text-akij-red">Required Document</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 py-3 ml-10 md:flex-auto md:w-auto">
              <h1 className="py-2 font-bold text-white capitalize md:uppercase">
                Links
              </h1>
              <ul className="text-xs font-medium leading-6 tracking-wider text-white capitalize">
                <li>
                  <Link href="/terms">
                    <a className="hover:text-akij-red">Terms</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a className="hover:text-akij-red">Privacy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/dealer">
                    <a className="hover:text-akij-red">Dealer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/career">
                    <a className="hover:text-akij-red">Career</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden py-3 lg:block">
              <h1 className="py-2 font-bold text-white uppercase">location</h1>
              <ul className="text-xs font-medium tracking-wide text-white">
                <li className="overflow-hidden rounded-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29217.079646135295!2d90.3845556818168!3d23.74256641395137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89c75e0b8f7%3A0x25f7a05a99138b01!2sAkij%20Motors!5e0!3m2!1sen!2sbd!4v1624794926243!5m2!1sen!2sbd"
                    width="200"
                    height="150"
                    style={{ border: '0' }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex justify-center w-full mt-5 text-lg font-medium tracking-wide text-gray-900 md:hidden">
            <li className="flex items-center justify-center w-8 h-8 mx-3 text-white border border-gray-400 shadow-lg hover:bg-akij-red">
              <a className="p-2" href="#">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center justify-center w-8 h-8 mx-3 text-white border border-gray-400 shadow-lg hover:bg-akij-red">
              <a href="#">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center justify-center w-8 h-8 mx-3 text-white border border-gray-400 shadow-lg hover:bg-akij-red">
              <a href="/blog">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center justify-center w-8 h-8 mx-3 text-white border border-gray-400 shadow-lg hover:bg-akij-red">
              <a href="/blog">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  idth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center w-full px-4 text-white md:hidden justify-evenly">
        <a className="flex justify-center w-full pr-2" href="#">
          <Image src="/newlogo.svg" width={120} height={80} alt="Akij Logo" />
        </a>
        <p className="w-full text-xs text-center">&copy; AKIJ Motors {year}</p>
      </div>
      <div className="hidden w-full text-gray-400 md:block">
        <div className="container flex items-center justify-center py-2 mx-auto text-xs">
          <p className="px-2"> &copy; AKIJ MOTORS {year}. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
