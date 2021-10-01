import React from "react";

const Card = (props) => {
  const { title, value_categories, value_items, colorbg, icon } = props;
  return (
    <div>
      <div
        className={`flex-1 ${colorbg} text-gray-700 rounded-lg py-3 px-5 shadow-sm w-auto`}
      >
        <span className=" text-sm py-2">{title}</span>
        <div className="flex items-center">
          <span className="text-2xl flex font-black">{value_items}</span>
          <span className="px-2">items </span>
        </div>
        <div className="flex items-center">
          <span className="text-2xl flex font-extrabold">
            {value_categories}
          </span>
          <span className="px-2">quantities</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
