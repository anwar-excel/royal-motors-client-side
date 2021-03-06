import React from "react";
// import from from "./AddStaff.css";
import { useForm } from "react-hook-form";
import useFirebase from '../../../hooks/useFirebase';

const AddStaff = () => {
    const { user } = useFirebase();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://mighty-scrubland-24638.herokuapp.com/addstaff", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        reset();
        console.log(data);
    };
    return (
        <div>
            <div>
                <h1 className="mt-5 text-center text-danger">Please Add Staff</h1>
                <div className=" w-25 m-auto mt-5">
                    <div className=" ">
                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("name")}
                                    placeholder="Name"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("position")}
                                    placeholder="position"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                {/* <input
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
                                    className="p-2 m-2 w-100 input-field"
                                /> */}

                                {/* <select {...register("model")} className="p-2 m-2 w-100">
                                    <option value="premium">Honda</option>
                                    <option value="classic">Nishan</option>
                                    <option value="business">Toyota</option>
                                    <option value="business">BMW</option>
                                    <option value="business">Hyundai</option>
                                </select> */}
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Add"
                                    className="btn btn-info w-50"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStaff;