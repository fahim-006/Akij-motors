import Link from 'next/link';
import Image from 'next/image';
import { GoSearch } from 'react-icons/go';

import classes from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className="relative z-50 w-full bg-white shadow-lg md:py-3">
      <div className="container flex items-center justify-center px-2 pt-3 mx-auto md:justify-between md:pt-0">
        <div className="flex items-center h-6 md:h-10">
          <Link className="w-28 md:w-48" href="/" passHref>
            <Image width={150} height={35} src="/logo.png" alt="Logo Akij" />
          </Link>
        </div>
        <div className="flex items-center text-sm font-medium tracking-wide">
          <div className="hidden pr-2 cursor-pointer md:block">
            <div className={classes.searchBar}>
              <input type="text" placeholder="Search here" />
              <GoSearch />
            </div>
          </div>
          <div className="hidden md:block text-akij-blue">
            <Link href="/">
              <a className="px-3 hover:text-akij-red">HOME</a>
            </Link>
            <Link href="/about">
              <a className="px-3 hover:text-akij-red">ABOUT</a>
            </Link>
            <Link href="dealer">
              <a className="px-3 hover:text-akij-red">DEALER</a>
            </Link>
            <Link href="/career">
              <a className="px-3 hover:text-akij-red">CAREER</a>
            </Link>
            <Link href="/contactus">
              <a className="px-3 hover:text-akij-red">CONTACT</a>
            </Link>
            <a
              className="px-3 hover:text-akij-red"
              target="_"
              href="https://www.akij.net/"
            >
              AKIJ GROUP
            </a>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between px-2 py-2 mx-auto text-xs font-medium md:hidden text-akij-blue">
        <Link href="/">
          <a className=" hover:text-akij-red">HOME</a>
        </Link>
        <Link href="/about">
          <a className=" hover:text-akij-red">ABOUT</a>
        </Link>
        <a
          className="hover:text-akij-red"
          target="_"
          href="https://www.akij.net/"
        >
          AKIJ GROUP
        </a>
        <Link href="/contactus">
          <a className=" hover:text-akij-red">CONTACT</a>
        </Link>
        <div className="text-2xl cursor-pointer md:hidden text-akij-red">
          <i className="font-bold text-gray-300">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </i>
          <input className="hidden" type="text" name="search" id="search" />
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
