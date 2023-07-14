import { tooltip } from "../assets";
import { Tooltip as ReactTooltip } from "react-tooltip";

function ShowCards({
  img,
  img_desk,
  name,
  time,
  place,
  age,
  ticket,
  tooltip_text,
  id_key,
  content_id
}) {
  return (
    <div id={content_id} className="bg-color-grey-800 flex items-center gap-5 my-5 rounded-md  hover:shadow-sm transition-all duration-500">
      <div className="showcard-imgbg-red-50">
        <img src={img} alt="show-image w-full" className="md:hidden" />
        <img src={img_desk} alt="" className="hidden md:block w-full" />
      </div>
      <div className="content w-3/5  flex flex-col lg:gap-3 pr-2">
        <div className="content">
          <h2 className="show-name-time text-base sm:text-lg font-semibold lg:text-2xl ">
            {name} {time}
          </h2>
          <p className="show-place text-xs sm:text:lg  lg:text-xl">{place}</p>
        </div>

        <div className="show-tags flex gap-4 pt-2 lg:pt-0">
          <div className="tag age bg-tag-bg-color px-1 rounded-md text-tag-text-color text-sm flex items-center justify-center ">
            {age}
          </div>
          <div className="ticket bg-tag-bg-color px-1 rounded-md text-tag-text-color flex items-center justify-center gap-1 text-sm">
            {ticket}
            <span
              className="tooltip cursor-pointer"
              data-tooltip-id={`my-tooltip-html-prop${id_key}`}
              data-tooltip-place="right"
            >
              <img src={tooltip} alt="tooltip" />
              <ReactTooltip
                id={`my-tooltip-html-prop${id_key}`}
                openOnClick="true"
                html={`<div style= "color:#5559DF;" >${tooltip_text} </div>`}
                className="tooltip"
              />
              {console.log(tooltip_text)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCards;
