import { useState } from 'react';
import Footer from '../Footer';
import HeaderTop from '../HeaderTop';
import HeaderBottom from '../HeaderBottom';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

  const show = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <HeaderTop />
      <Navigation />
      <HeaderBottom show={show} isShow={isShow} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
