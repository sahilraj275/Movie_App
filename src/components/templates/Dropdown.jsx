// import React from "react";

// function Dropdown({ title, options, func }) {
//   return (
//     <div className="relative inline-block text-left">
//       <select
//         defaultValue="0"
//         onChange={func}
//         className="block appearance-none py-2 pl-3 pr-10 text-base leading-tight bg-gradient-to-r from-gray-900 to-gray-800 text-white border border-gray-700 rounded-lg shadow-md font-semibold hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300 ease-in-out cursor-pointer"
//       >
//         <option value="0" disabled>
//           {title}
//         </option>
//         {options.map((o, i) => (
//           <option key={i} value={o} className="bg-gray-900 text-white">
//             {o.toUpperCase()}
//           </option>
//         ))}
//       </select>
//       {/* Custom arrow */}
//       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
//         <svg
//           className="w-5 h-5 text-gray-400"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// }

// export default Dropdown;

//responsive
import React from "react";

function Dropdown({ title, options, func }) {
  return (
    <div className="relative inline-block text-left w-full sm:w-36 sm:ml-0 ml-3">
      <select
        defaultValue="0"
        onChange={func}
        className="block appearance-none py-2 pl-3 pr-10 text-base leading-tight bg-gradient-to-r from-gray-900 to-gray-800 text-white border border-gray-700 rounded-lg shadow-md font-semibold hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300 ease-in-out cursor-pointer w-full sm:w-[200px] max-w-[calc(100%-20px)]"
      >
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o} className="bg-gray-900 text-white">
            {o.toUpperCase()}
          </option>
        ))}
      </select>
      {/* Custom arrow */}
      <div className="pointer-events-none  absolute inset-y-0 right-0 flex items-center pr-3 sm:left-24 left-[85%]">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Dropdown;
