// import React from "react";
// import { useState } from "react";

// const Dropdown = ({ items }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [value, setValue] = useState("Select");

//   const handleMouseLeave = () => {
//     setIsOpen(true);
//     console.log(isOpen);
//   };

//   const handleItemClick = (item) => {
//     setValue(item);
//     setIsOpen(false);
//   };

//   return (
//     <div className="dropdown-item">
//       <h2 className="que">Should you use dropdown?</h2>
//       <button onMouseLeave={handleMouseLeave}>
//         <p>{value}</p>
//         <span>
//           <i className="fa-solid fa-angle-down"></i>
//         </span>
//       </button>
//       {isOpen && (
//         <ul
//           className="drop-list"
//           // style={{ display: `${isOpen ? "block" : "none"}` }}
//         >
//           {items.map((item, index) => {
//             return (
//               <li key={index} onClick={() => handleItemClick(item)}>
//                 {item}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

import React, { useState } from "react";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Select");

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleItemClick = (item) => {
    setValue(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-item">
      <h2 className="que">Should you use dropdown?</h2>
      <button
        onMouseEnter={handleMouseEnter}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{value}</p>
        <span>
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </button>
      {isOpen && (
        <ul className="drop-list">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
