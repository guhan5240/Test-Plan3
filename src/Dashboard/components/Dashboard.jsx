export const Dashboard = () => {
  const val = localStorage.getItem("adminToken");

  const handlepdf = () => {
    console.log(val);
  };

  return (
    <div className="min-h-[calc(100vh-0px)]  bg-purple-50 flex justify-center">
      <div className="w-4xl h-auto rounded-xl bg-white flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-blue-700 m-8 mb-10">
          Pdf Upload
        </h1>
        <form onSubmit={handlepdf}>
          <div className="w-lg">
            <form>
              <div className="max-w-lg">
                <label
                  for="input-label"
                  class="block text-sm font-medium mb-2 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="email"
                  id="input-label"
                  class=" py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="you@site.com"
                />
              </div>

              <div class="max-w-sm">
                <label
                  for="textarea-label"
                  class="block text-sm font-medium mb-2 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="textarea-label"
                  class="py-2 px-3 sm:py-3 sm:px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  rows="3"
                  placeholder="Say hi..."
                ></textarea>
              </div>

              <label class="block">
                <span class="sr-only">Choose pdf</span>
                <input
                  type="file"
                  class="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none dark:text-neutral-500 dark:file:bg-blue-500 dark:hover:file:bg-blue-400"
                />
              </label>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
};
