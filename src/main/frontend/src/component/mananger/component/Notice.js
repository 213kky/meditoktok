// import React, { useState } from "react";
// import  './Notice.css';

// export default function Notice() {
//   const [notice, setNotice] = useState("");

//   const handleSubmit = (e) => {
//       e.preventDefault();
//     };

//     return (
//       <div className="content">
//       <form onSubmit={handleSubmit}>
//         <h1>공지사항</h1>
//         <label htmlFor="notice"/>
//             <input className="No"
//               type="text"
//               id="notice"
//               value={notice}
//               onChange={(e) => { setNotice(e.target.value) }} 
//             />
//       </form>
//       </div>
//     );
//   } 