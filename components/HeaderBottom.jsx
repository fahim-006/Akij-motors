import React, {useState} from 'react';
import classes from './HeaderBottom.module.scss';
import Dropdown from './Dropdown';


const HeaderBottom = ({ show, isShow }) => {
  const data = [
    'commercial vehicle',
    'private vehicle',
    'motor servicing',
    'garage equipment',
    'spare parts',
    'electric motorcycle',
    'forklit/stacker',
    'construction machinary',
    'special vehicle',
  ];

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const onMouseClick = () => {
    const location = window.location.href;
    var arr = location.split("/");

     if(arr[arr.length -1] == "" ||arr[arr.length -1] == "#" ){
      setDropdown(dropdown => dropdown=false);
    }else
     setDropdown(dropdown => !dropdown);
  };

  return (
    <>
    <div className="relative z-50 w-full text-white bg-gradient-to-br from-akij-blue to-akij-lblue">
      <nav className={classes.navbar}>
        
        <ul id="idForHide" className={click ? classes.navamenuactive  : classes.navamenu}>

        <li
            className={classes.navaitemSVG}
            onClick={onMouseClick}
            
          >
             <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fontWeight: "bold"}}
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="48"
                    d="M88 152h336M88 256h336M88 360h336"
                  ></path>
                </svg>
                {dropdown && <Dropdown />}
            </li>
            <li
            className={classes.navaitem}
            onClick={onMouseClick}
            style={{marginRight: "70px"}}        
          >
            <a
              
              className={classes.navalinks}
              onClick={closeMobileMenu}
              style={{ fontWeight: "bold"}}
            >
             &nbsp; CATEGORIES <i className='fas fa-caret-down' />
            </a>
           
          </li>

         

         
          {data.map((item, i) => (
                 <li className={classes.navaitemOther}
                  key={i}
                >
                 &nbsp; {item} &nbsp;  &nbsp;
                  </li> ))}
          
         
         
        </ul>
        
      </nav>
      </div>
    </>
  );
}



export default HeaderBottom;
