import React from 'react';
import {useForm} from 'react-hook-form'
import { nanoid } from "nanoid";
const Form = ({ setData, setToggle, users,update,setUpdate }) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues:update
  });
  
  const handleForm = (data) => {
    if(update.id){
      setData((prev)=>{
        return prev.map((val)=>{
          return val.id === update.id ? {...data,id:update.id}:val
        })
      })
      
      
    }else{
      let arr = [...users, { ...data, id: nanoid() }];
      setData(() => arr);
      localStorage.setItem("data", JSON.stringify(arr));
    }
      
    setToggle((prev) => !prev);
    setUpdate(null)
    reset();
  };

  return (
    <div className="min-h-screen w-full bg-amber-800 flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="w-full max-w-md flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center text-amber-800">
          Create User
        </h1>

        <input
          {...register("Name", {
            required: "Name is required",
          })}
          type="text"
          placeholder="Enter your Name"
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-amber-700"
        />
        {errors.Name && <p className="text-red-500">{errors.Name.message}</p>}

        <input
          {...register("Email", {
            required: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid Email address",
            },
          })}
          type="email"
          placeholder="Enter your E-mail"
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-amber-700"
        />
        {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}
        <input
          {...register("Contact", {
            required: "Contact is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          type="number"
          placeholder="Enter your Contact"
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-amber-700"
        />
        {errors.Contact && (
          <p className="text-red-500">{errors.Contact.message}</p>
        )}

        <input
          {...register("Image", {
            required: "Profile pic is required",
          })}
          type="url"
          placeholder="Enter profile pic URL"
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-amber-700"
        />
        {errors.Image && (
          <p className="text-red-500"> {errors.Image.message}</p>
        )}

        <button
          type="submit"
          className="bg-amber-800 text-white py-3 rounded-lg font-semibold hover:bg-amber-900 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form
