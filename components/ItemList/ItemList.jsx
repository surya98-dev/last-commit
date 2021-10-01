import React from "react";
import Link from "next/link";

const ItemList = ({ items, handleDelete, handleEdit }) => {
  return (
    <div className="min-h-screen mx-auto max-w-screen-xl bg-white">
      <div className="container-lg mx-auto border-b-2">
        <div className="ml-4 font-bold text-2xl">Item List</div>
        <div className="mt-5">
          <form action="" className="text-left my-2 flex">
            <div className="bg-grey-200 rounded-md ml-4">
              <label className=" text-gray-500 ml-1" htmlFor="">
                Filter
              </label>
              <input
                className="text-sm bg-gray-200 block py-2 px-2 w-full rounded-sm focus:outline-none focus:ring-1 focus:border-blue-300"
                type="text"
                id=""
                placeholder="filter by category"
              />
            </div>
            <div className="bg-grey-200 rounded-md ml-4">
              <label className="text-gray-500 ml-1" htmlFor="">
                Search
              </label>
              <input
                className="text-sm bg-gray-200 block py-2 px-2 w-full rounded-sm focus:outline-none focus:ring-1 focus:border-blue-300"
                type="text"
                id=""
                placeholder="search your item"
              />
            </div>
          </form>
          <div className="md:col-span-5 text-right">
            <div className="inline-flex items-end mr-5 mb-1">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <Link href="/add-item"> Add Item </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {items?.map((item, i) => {
        return (
          <div className="container-lg mx-auto mt-5" key={i}>
            <div className="flex justify-between mx-4 mt-4 border-b-2">
              <div>
                <div className="text-lg">{item.itemName}</div>
                {item.Categories.map((el, i) => {
                  // return <pre>{JSON.stringify(item, null, 2)}</pre>;
                  return (
                    <div className="italic text-sm" key={i}>
                      {el.categoryName}
                    </div>
                  );
                })}
              </div>
              <div className="">
                <button className="bg-yellow-400 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-full text-sm w-20">
                  <Link to={`/edit-item/${item.id}`}>Edit</Link>
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded-full text-sm w-20"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
