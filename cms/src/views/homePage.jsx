import navbar from '../components/navbar'

export default function HomePage({setPage}){
  return(
    <>
      <title>Home | 121-Cinema</title>
      <navbar setPage={setPage} />
      <div className="flex flex-row justify-between">
        <div className="flex items-center gap-2">
          <span className="p-6 pb-8 font-bold">Filter: </span>
          <button className="p-2 pt-1 rounded-full bg-gray-200 hover:bg-gray-400 font-semibold">
            Action
          </button>
          <button className="p-2 pt-1 rounded-full bg-gray-200 hover:bg-gray-400 font-semibold">
            Thriller
          </button>
          <button className="p-2 pt-1 rounded-full bg-gray-200 hover:bg-gray-400 font-semibold">
            Drama
          </button>
          <button className="p-2 pt-1 rounded-full bg-gray-200 hover:bg-gray-400 font-semibold">
            Comedy
          </button>
        </div>
        <div className="flex">
          <span className="p-6 font-bold">Sort By: </span>
          <select
            className="rounded pl-3 pr-5 pb-1 bg-gray-200 hover:bg-gray-400"
            name="sort"
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap p-6 gap-5" name="body-div">
        <div
          className="rounded shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-linear"
          name="card-1"
        >
          <img
            className="w-full"
            src="./img/Ayane_Icon.png"
            alt=""
            name="card-img"
          />
          <div className="px-6 py-4" name="card-body">
            <span
              className="font-bold text-xl hover:underline hover:underline"
              name="card-title"
            >
              This is Ayane.
            </span>
            <p className="text-gray-800" name="card-subtitle">
              This is Ayane.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2" name="card-footer">
            <button className="rounded-full inline-block bg-gray-200 hover:bg-gray-400 px-3 py-1 font-semibold">
              Action
            </button>
          </div>
        </div>
        <div
          className="rounded shadow-lg hover:shadow-2xl pb-4 overflow-auto transform hover:-translate-y-2 transition-all duration-300 ease-linear"
          name="card-4"
        >
          <div className="flex justify-center" name="card-header">
            <img
              className=""
              src="./img/BA_The_Animation.jpg"
              alt=""
              name="card-img"
            />
          </div>
          <div className="px-6 py-4" name="card-body">
            <span
              className="font-bold text-xl hover:underline hover:underline"
              name="card-title"
            >
              Blue Archive: The Animation.
            </span>
            <p className="text-gray-800" name="card-subtitle">
              In Kivotos, a massive metropolis governed by multiple schools, one
              academy is put under threat of being shut down forever, however, an
              advisor of the newly formed General Student Council, seeks to restore
              the school's reputation.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2" name="card-footer">
            <button className="rounded-full inline-block bg-gray-200 hover:bg-gray-400 px-3 py-1 font-semibold">
              Action
            </button>
          </div>
        </div>
        <div
          className="rounded shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-linear"
          name="card-2"
        >
          <img
            className="w-full"
            src="./img/Blue_Archive_logo_JP.png"
            alt=""
            name="card-img"
          />
          <div className="px-6 py-4" name="card-body">
            <span className="font-bold text-xl hover:underline" name="card-title">
              This is the second box title.
            </span>
            <p className="text-gray-800" name="card-subtitle">
              This is the second box subtitle.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2" name="card-footer">
            <button className="rounded-full inline-block bg-gray-200 hover:bg-gray-400 px-3 py-1 font-semibold">
              Drama
            </button>
          </div>
        </div>
        <div
          className="h-64 rounded shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-linear"
          name="card-3"
        >
          <img
            className="object-fill"
            src="./img/Ayane_Portrait.png"
            alt=""
            name="card-img"
          />
          <div className="px-6 py-4" name="card-body">
            <span className="font-bold text-xl hover:underline" name="card-title">
              This is Ayane.
            </span>
            <p className="text-gray-800" name="card-subtitle">
              This is Ayane.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2" name="card-footer">
            <button className="rounded-full inline-block bg-gray-200 hover:bg-gray-400 px-3 py-1 font-semibold">
              Comedy
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-5 mt-6" name="paginate-div">
        <button className="rounded padding p-1 pl-2 pr-2 stroke white bg-teal-500 hover:bg-teal-700 text-white">
          Prev
        </button>
        <button className="rounded padding p-1 pl-2 pr-2 stroke white bg-teal-500 hover:bg-teal-700 text-white">
          Next
        </button>
      </div>
    </>
  )
}

