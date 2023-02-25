import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { DataContext } from "./MyContext";
import axios from "axios";

export default function Form() {
  const [data, setData] = useContext(DataContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (input) => {
    const id = nanoid();
    const key = input;
    if (!key) {
      return console.log("All fields required");
    }
    try {
      const data = await axios.post(`/add`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = data.data;
      setData([...data, { id: res._id, name: res.name }]);
    } catch (error) {
      console.log("Error: ", error.response.data.Error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input type="text" autoComplete="off" {...register("name")} />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
