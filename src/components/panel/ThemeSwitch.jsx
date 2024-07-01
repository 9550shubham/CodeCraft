// 'use client';

// import { FaSun, FaMoon } from "react-icons/fa";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from 'react';

// const ThemeSwitch = () => {
//   const { theme, setTheme } = useTheme('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     document.documentElement.setAttribute('data-theme', savedTheme);
//   }, []);

//     const toggleTheme = () => {
//         const newTheme = theme === 'light' ? 'dark' : 'light';
//         setTheme(newTheme);
//         localStorage.setItem('theme', newTheme);
//         document.documentElement.setAttribute('data-theme', newTheme);
//       };


//   return (
//     <div className="theme">
//       <button onClick={toggleTheme}>
//         {theme === "light" ? <FaSun className="text-gray-700" /> : <FaMoon />}
//       </button>
//     </div>
//   );
// };
//  export default ThemeSwitch;
