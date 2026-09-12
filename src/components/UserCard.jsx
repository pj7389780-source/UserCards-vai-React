import React from 'react'

const UserCard = ({elem}) => {
  return (
    <div className="w-80 border border-gray-300 rounded-2xl p-5 text-xl shadow-md">
      <div className="w-full h-56 overflow-hidden rounded-xl">
        <img
          src={elem.Image}
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 space-y-2">
        <h1 className="font-semibold">{elem.Name}</h1>
        <h1 className="text-gray-600">{elem.Email}</h1>
        <h1 className="text-gray-600">{elem.Contact}</h1>
      </div>

      <div className="flex gap-3 mt-5">
        <button className="flex-1 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Update
        </button>

        <button className="flex-1 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600" >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard
