import React from "react";
import { useForm } from "react-hook-form";
const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    fetch('http://localhost:5000/service', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
};
  return (
    <div>
      <h2>Add your service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
        <input placeholder="description" {...register("description", )} />
        <input placeholder="price" type="text" {...register("price", )} />
        <input placeholder="img" type="text" {...register("img", )} />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddService;
