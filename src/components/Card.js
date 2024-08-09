import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Card = ({ item, checker }) => {
  console.log(item);
  return (
    <div className="flex flex-col bg-cyan-100 w-full border my-4 rounded-[5px] gap-6 shadow-xl p-4 ">
      <div className="flex items-center gap-4">
        <abbr title="Click he to know more about this coin">
          <Link className="w-[60px]" to={`/coin/${item.id}`}>
            {" "}
            <img
              src={checker === "top10" ? item.thumb : item.image}
              alt="Coinimage"
            />
          </Link>
        </abbr>
        <div className="flex flex-col w-full">
          <h2 className="text-[25px] font-bold">{item.name}</h2>
          <h2 className="text-[20px] font-semibold text-gray-400">
            {item.symbol}
          </h2>
        </div>
        <MdOutlineStar className="text-[40px]" />
      </div>

      <div className="flex items-center gap-4">
        {!checker && (
          <h2 className="border rounded-3xl p-2 border-green-600 text-[10px] lg:text-[14px] text-green-800 ">
            &#36;{item.price_change_24h}
          </h2>
        )}
        <div className="text-[24px] border p-2 rounded-full border-green-600">
          {item.price_change_24h > 0 ? (
            <FaArrowTrendUp />
          ) : (
            <FaArrowTrendDown className="text-red-700" />
          )}
        </div>
      </div>

      <h2 className="text-[34px] font-bold  text-green-600 ">
        &#36;
        {checker === "top10"
          ? Math.round(item.data.price * 1000000) / 1000000
          : item.current_price}
      </h2>
      <div className="flex flex-col gap-1">
        <h2 className="text-[14px]">
          Market Capacity: &#36;
          {checker === "top10" ? item.data.market_cap : item.market_cap}
        </h2>
        <h2 className="text-[14px]">
          Total volume: &#36;
          {checker === "top10" ? item.data.total_volume : item.total_volume}
        </h2>
      </div>
    </div>
  );
};

export default Card;
