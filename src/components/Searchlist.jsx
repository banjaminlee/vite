import { circle } from "../assets";
import { searchList } from "../constants";

function Searchlist({display}) {
  return (
    <div id="searchlistbox" className={`w-11/12 mx-auto bg-color-grey-100 rounded-md max-w-screen-sm -mt-20 p-5 ${display?"block":"hidden"}`}>
      <h3 className="searchlist-heading text-color-grey-800 font-semibold pb-5">
        Trending
      </h3>

      <div className="search-items ">
        {searchList.map((data, key) => {
          return (
            <a  href={`#${data.content_id}`}  className="card flex items-start gap-3 pb-5 w-full rounded-md px-5 py-2 hover:bg-gray-200 cursor-pointer" key={key}>
              <div className="search-card-img">
                <img src={data.img} alt="img" />
              </div>
              <div className="search-card-data">
                <h3 className="text-color-grey-900 text-base sm:text-lg">{data.title}</h3>
                <div className="par flex justify-start items-center gap-2 ">
                  <p className="date text-color-grey-600 text-sm">{data.date}</p>
                  <img src={circle} alt="" />
                  <p className="place text-color-grey-600 text-sm">{data.place}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Searchlist;
