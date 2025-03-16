import React from "react";
import { useForm } from "react-hook-form";

function CustomJobs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Selected Job:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* Job Title Input */}
      <div>
        <h2 className="text-lg font-bold">Enter Job Title</h2>
        <input
          {...register("jobTitle", { required: "Job title is required" })}
          type="text"
          placeholder="e.g. Frontend Developer"
          className="w-full mt-2 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        {errors.jobTitle && (
          <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message}</p>
        )}
      </div>

      {/* Experience Level Dropdown */}
      <div>
        <h2 className="text-lg font-bold">Experience Level</h2>
        <select
          {...register("experience", {
            required: "Experience level is required",
          })}
          className="w-full mt-2 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="" disabled className="bg-black text-white">
            Select experience level
          </option>
          <option value="junior" className="bg-black text-white">Junior</option>
          <option value="mid" className="bg-black text-white">Mid-Level</option>
          <option value="senior" className="bg-black text-white">Senior</option>
        </select>
        {errors.experience && (
          <p className="text-red-500 text-sm mt-1">
            {errors.experience.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

export default CustomJobs;
