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

  const [dropdown, setDropdown] = useState(false);


  const onMouseClick = (leave) => {
    const location = window.location.href;
    var arr = location.split("/");

     if(arr[arr.length -1] == "" ||arr[arr.length -1] == "#" ){
      setDropdown(dropdown => dropdown=false);
    }else if (leave=="hideDropdown"){
      setDropdown(dropdown => dropdown=false);
    }else{
      setDropdown(dropdown => !dropdown);
    }
     
  };

  return (
    <>
   {/* className="text-white bg-gradient-to-br from-akij-blue to-akij-lblue"  */} 
    <div className="text-white bg-gradient-to-br from-akij-blue to-akij-lblue">
      
        
        <ul id="idForHide" className={classes.navamenu}>
        <div  onClick={()=>onMouseClick()}
            
             style={{marginLeft: "40px"}}
             >
        <li
             className={classes.navaitemSVG}               
          >
             <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fontWeight: "bold", marginRight: "20px"}}
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="48"
                    d="M88 152h336M88 256h336M88 360h336"
                  ></path>
                </svg>
                
            </li>
            <li className={classes.navaitem}>
              CATEGORIES              
            </li>
           
         </div>
         
          {data.map((item, i) => (
                 <li className={classes.navaitemOther}
                  key={i}
                >
                 &nbsp;<a > {item} </a> &nbsp;  &nbsp;
                  </li> ))}    
                     
        </ul>        
        
      </div>
      <div onMouseLeave={()=>onMouseClick()}>
      {dropdown && <Dropdown/>}</div>
    </>
  );
}



export default HeaderBottom;
