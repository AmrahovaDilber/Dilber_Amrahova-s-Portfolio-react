// const PNG_FILE_URL = "http://localhost:3000/resume.pdf";
// function DownloadCv() {
//   function handleDownload(url) {
//     const aTag = document.createElement("a");
//     aTag.href = url;
//     aTag.setAttribute("download", "resume.pdf");
//     document.body.appendChild(aTag);
//     aTag.click();
//     aTag.remove();
//   }

//   return (
//     <div className=" ">
//       <div className="flex justify-center lg:justify-start space-x-4">
//         <button
//           onClick={() => {
//             handleDownload(PNG_FILE_URL);
//           }}
//           className="bg-[#121212] px-6 w-full sm:w-fit py-3 rounded-full bg-transparent hover:bg-slate-800 text-white  mt-3 lg:mt-0 flex bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  items-center"
//         >
//           <svg
//             className="w-4 h-4 mr-2"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 20l9-9-4-4-5 5-5-5-4 4 9 9z"
//             />
//           </svg>
//           Download CV
//         </button>
//       </div>
//     </div>
//   );
// }

// export default DownloadCv;
