// import axios from "axios";
// import { useState } from "react";

// const Product = () => {
//   const token = localStorage.getItem("adminToken");

//   const [details, setDetails] = useState({
//     title: "",
//     description: ""
//   });
//   const [pdf, setPdf] = useState([]);
//   const [image, setImage] = useState([]);

//   const handlepdf = (e) => {
//     console.log("handle");
//     setPdf(e.target.files[0]);
//   };
//   const handleImage = (e) => {
//     console.log("handle");
//     setImage(e.target.files[0]);
//   };
//   const handleData1 = async (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   const handleData2 = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("pdf", pdf);
//     formData.append("image", image);
//     formData.append("datas", JSON.stringify(details));

//     await axios
//       .post("http://localhost:5000/api/upload/file", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => console.log("success", res))
//       .catch((err) => console.error("ERROR:", err.response.data));
//   };

//   return (
//     <div className="min-h-[calc(100vh-0px)] bg-purple-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-2xl rounded-xl bg-white shadow-lg p-6 md:p-8">
//         <h1 className="text-3xl font-semibold text-blue-700 text-center mb-8">
//           PDF Upload
//         </h1>
//         <form onSubmit={handleData2} className="space-y-6">
//           {/* Title Input */}
//           <div className="space-y-2">
//             <label
//               htmlFor="input-label"
//               className="block text-sm font-medium text-gray-700 dark:text-white"
//             >
//               Title
//             </label>
//             <input
//               name="title"
//               onChange={(e) => handleData1(e)}
//               type="text"
//               id="input-label"
//               className="w-full py-3 px-4 block border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//               placeholder="Enter title"
//             />
//           </div>

//           {/* Category Input */}
//           <div className="space-y-2">
//             <label
//               htmlFor="input-category"
//               className="block text-sm font-medium text-gray-700 dark:text-white"
//             >
//               Category
//             </label>
//             <input
//               name="category"
//               onChange={(e) => handleData1(e)}
//               type="text"
//               id="input-category"
//               className="w-full py-3 px-4 block border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//               placeholder="e.g. truck"
//             />
//           </div>

//           {/* Description Textarea */}
//           <div className="space-y-2">
//             <label
//               htmlFor="textarea-label"
//               className="block text-sm font-medium text-gray-700 dark:text-white"
//             >
//               Description
//             </label>
//             <textarea
//               name="description"
//               onChange={(e) => handleData1(e)}
//               id="textarea-label"
//               className="w-full py-3 px-4 block border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200 resize-none"
//               rows="4"
//               placeholder="Enter description..."
//             ></textarea>
//           </div>

//           {/* File Upload Sections */}
//           <div className="space-y-6">
//             {/* PDF Upload */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700 dark:text-white">
//                 Choose PDF
//               </label>
//               <input
//                 type="file"
//                 accept=".pdf,application/pdf"
//                 onChange={(e) => handlepdf(e)}
//                 className="block w-full text-sm text-gray-500 
//                   file:mr-4 file:py-3 file:px-4 
//                   file:rounded-lg file:border-0 
//                   file:text-sm file:font-medium 
//                   file:bg-blue-600 file:text-white 
//                   hover:file:bg-blue-700 
//                   file:cursor-pointer 
//                   file:transition-colors file:duration-200
//                   disabled:opacity-50 disabled:cursor-not-allowed"
//               />
//             </div>

//             {/* Image Upload */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700 dark:text-white">
//                 Choose Image
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImage(e)}
//                 className="block w-full text-sm text-gray-500 
//                   file:mr-4 file:py-3 file:px-4 
//                   file:rounded-lg file:border-0 
//                   file:text-sm file:font-medium 
//                   file:bg-blue-600 file:text-white 
//                   hover:file:bg-blue-700 
//                   file:cursor-pointer 
//                   file:transition-colors file:duration-200
//                   disabled:opacity-50 disabled:cursor-not-allowed"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-4">
//             <button
//               type="submit"
//               className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 
//                 text-white font-medium rounded-lg 
//                 transition-colors duration-200 
//                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
//                 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Upload
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Product;

import axios from "axios";
import { useState } from "react";

const Product = () => {
  const token = localStorage.getItem("adminToken");

  const [details, setDetails] = useState({
    title: "",
    description: "",
  });

  const [pdf, setPdf] = useState([]);
  const [image, setImage] = useState([]);

  const handlepdf = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleData1 = async (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleData2 = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("pdf", pdf);
    formData.append("image", image);
    formData.append("datas", JSON.stringify(details));

    await axios
      .post("http://localhost:5000/api/upload/file", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log("success", res))
      .catch((err) => console.error("ERROR:", err.response.data));
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-10">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-blue-700">
            Upload Product PDF
          </h1>
          <p className="text-gray-500 mt-2">
            Add product details, image, and PDF file
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleData2} className="space-y-8">

          {/* Title & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                name="title"
                onChange={handleData1}
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 
                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <input
                name="category"
                onChange={handleData1}
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 
                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. Truck, Machine"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              onChange={handleData1}
              rows="5"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 
                resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter detailed description..."
            />
          </div>

          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* PDF */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition">
              <p className="font-medium text-gray-700 mb-3">
                Upload PDF
              </p>
              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={handlepdf}
                className="w-full text-sm text-gray-500 
                  file:m-4 file:py-2 file:px-4 
                  file:rounded-md file:border-0 
                  file:bg-blue-600 file:text-white 
                  hover:file:bg-blue-700"
              />
            </div>

            {/* Image */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition">
              <p className="font-medium text-gray-700 mb-3">
                Upload Image
              </p>
              <input
                type="file"
                accept="image/*"
                
                onChange={handleImage}
                className="w-full text-sm text-gray-500 
                  file:m-4 file:py-2 file:px-4 
                  file:rounded-md file:border-0 
                  file:bg-blue-600 file:text-white 
                  hover:file:bg-blue-700"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full md:w-1/3 mx-auto block bg-blue-600 
                hover:bg-blue-700 text-white font-semibold py-3 
                rounded-xl transition focus:ring-2 focus:ring-blue-500 
                focus:ring-offset-2"
            >
              Upload Product
            </button>
          </div>

        </form>
      </div>
    // </div>
  );
};

export default Product;
