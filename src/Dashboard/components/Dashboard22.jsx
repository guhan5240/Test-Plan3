import axios from "axios";
import { useState } from "react";

export const Dashboard22 = () => {
  const token = localStorage.getItem("adminToken");

  const [details, setDetails] = useState({
    title: "",
    description: "",
    price: 0,
  });
  const [pdf, setPdf] = useState([]);
  const [image, setImage] = useState([]);

  const handlepdf = (e) => {
    console.log("handle");
    setPdf(e.target.files[0]);
  };
  const handleImage = (e) => {
    console.log("handle");
    setImage(e.target.files[0]);
  };
  const handleData1 = async (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });

    // console.log("enter................");

    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ": ", pair[1]);
    // }
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
    <div className="min-h-[calc(100vh-0px)]  bg-purple-50 flex justify-center">
      <div className="w-4xl h-auto rounded-xl bg-white flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-blue-700 m-8 mb-10">
          Pdf Upload
        </h1>
        <form onSubmit={handleData2}>
          <div className="w-lg">
            <div className="max-w-lg">
              <label
                htmlFor="input-label"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Title
              </label>
              <input
                name="title"
                onChange={(e) => handleData1(e)}
                type="text"
                id="input-label"
                className=" py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="you@site.com"
              />
            </div>
            <div className="max-w-lg">
              <label
                htmlFor="input-price"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                price
              </label>
              <input
                name="price"
                onChange={(e) => handleData1(e)}
                type="number"
                id="input-price"
                className=" py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="00"
              />
            </div>

            <div className="max-w-sm">
              <label
                htmlFor="textarea-label"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Description
              </label>
              <textarea
                name="description"
                onChange={(e) => handleData1(e)}
                id="textarea-label"
                className="py-2 px-3 sm:py-3 sm:px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                rows="3"
                placeholder="Say hi..."
              ></textarea>
            </div>

            <label className="block">
              <span className="">Choose pdf</span>
              <input
                type="file"
                onChange={(e) => handlepdf(e)}
                className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none dark:text-neutral-500 dark:file:bg-blue-500 dark:hover:file:bg-blue-400"
              />
            </label>
            <label className="block">
              <span className="">Choose image</span>
              <input
                type="file"
                onChange={(e) => handleImage(e)}
                className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none dark:text-neutral-500 dark:file:bg-blue-500 dark:hover:file:bg-blue-400"
              />
            </label>
            <button
              type="submit"
              className="m-5 ml-35 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
