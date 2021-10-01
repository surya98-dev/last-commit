import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const UpdateProfile = ({ profileDetail }) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="form bg-grey-300 md:w-full md:h-screen  md:flex">
      <div className="w-5/7 pl-24 pr-18 pt-10 md:flex items-center">
        <img src={"images/user.png"} alt="" />
      </div>
      <div className="pl-28 pr-24 h-screen w-4/5">
        <div className="mt-20 mx-auto">
          <h1 className="font-bold text-gray-900 md:text-2xl pt-10">
            Update Profile
          </h1>
        </div>
        <div className="md:w-20 py-5">
          <img src={"images/user.png"} alt="" />
        </div>
        <div>
          <form action="" className="mb-10 mx-auto space-y-3">
            <div className="md:flex space-x-4 text-gray-900">
              <div className="md:w-1/2 space-y-1 md:text-sm">
                <label htmlFor="firstname">First Name</label>
                <input
                  id="firstname"
                  className="text-sm bg-gray-200 block py-2 px-2 w-full rounded-sm focus:outline-none focus:ring-1 focus:border-blue-300"
                  type="text"
                  placeholder="Your first name"
                  name="Firstname"
                  value={profileDetail.Firstname}
                />
              </div>
              <div className="md:w-1/2 space-y-1 md:text-sm">
                <label htmlFor="lastname">Last Name</label>
                <input
                  id="lastname"
                  className="text-sm bg-gray-200 block py-2 px-2 w-full rounded-sm focus:outline-none focus:ring-1 focus:border-blue-300"
                  type="text"
                  placeholder="Your last name"
                  name="Lastname"
                  value={profileDetail.Lastname}
                />
              </div>
            </div>
            <div className="md:flex space-x-4 text-gray-900">
              <div className="space-y-1 md:text-sm text-gray-900 md:w-1/2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="text-sm bg-gray-200 block py-2 px-2 w-full rounded-sm focus:outline-none focus:ring-1 focus:border-blue-300"
                  type="text"
                  placeholder="example@email.com"
                  name="Email"
                  value={profileDetail.Email}
                />
              </div>
              <div className="space-y-1 md:text-sm text-gray-900 md:w-1/2">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="text-sm bg-gray-200 block py-2 px-2 w-full rounded-sm focus:outline-none focus:ring-1 focus:border-blue-300"
                  type="text"
                  placeholder="********"
                />
              </div>
            </div>
            {/* <div className="space-y-1 md:text-sm text-gray-900 w-auto">
                                    <label htmlFor="aboutme">About Me</label>
                                    <input id="aboutme" className="h-24 text-sm bg-gray-200 block py-2 px-2 w-full rounded-sm focus:outline-none focus:ring-1 focus:border-blue-300"  type="text" placeholder="Insert something about you"/>
                            </div> */}
            <div className="py-4">
              <button
                type="button submit"
                className="md:text-sm bg-blue-200 px-5 py-2 rounded-xl text-gray-700 hover:text-gray-700 hover:bg-blue-400 active:bg-yellow-200"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(true);
                }}
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="space-x-2">
          <i className="arrowleft"></i>
          <a
            href="/dashboard"
            className="text-sm text-gray-900 hover:text-gray-500"
          >
            Back to dashboard
          </a>
        </div>
        <div className="flex items-center justify-center">
          <Dialog
            as="div"
            className="fixed flex inset-0 items-center justify-center"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

            <div className="bg-white p-4 rounded-md z-10 shadow-xl flex flex-col items-center justify-center">
              <div className="w-16 my-3">
                <img src={"images/thumb-up.png"} alt="" />
              </div>
              <Dialog.Title as="div" className="text-sm">
                Your account is updated!
              </Dialog.Title>
              <button
                className="md:text-sm bg-blue-200 mt-3 px-5 py-2 rounded-xl text-gray-700 hover:text-gray-700 hover:bg-yellow-200"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
