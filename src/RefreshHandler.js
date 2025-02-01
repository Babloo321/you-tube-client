// import React, { useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// function RefrshHandler({ setIsAuthenticated }) {
//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!localStorage.getItem('accessToken')) {
//             setIsAuthenticated(true);
//             if (location.pathname === '/' ||
//                 location.pathname === '/login' ||
//                 location.pathname === '/signup'
//             ) {
//                 navigate('/home', { replace: false });
//             }
//         }
//     }, [location, navigate, setIsAuthenticated])

//     return (
//         null
//     )
// }

// export default RefrshHandler


import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      setIsAuthenticated(false);
      navigate("/home", { replace: true }); // Force redirect to home
    } else {
      setIsAuthenticated(true);
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
}

export default RefreshHandler;
