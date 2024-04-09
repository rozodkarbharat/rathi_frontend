import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../Css/Form.module.css"; // Import module CSS
import { Add, Edit, Loading } from "../Store/Action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";

const Form = () => {
  const { data, edit, isLoader } = useSelector((state) => state.Reducer);
  const [genderError, setGenderError] = useState(false);
  const [weekdayError, setweekdayError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: edit.name || "",
      contact: edit.contact || "",
      dob: edit.dob || "",
      email: edit.email || "",
      gender: edit.gender || "",
      weekday: edit.weekday || [],
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(Loading());
    if (!data.gender) {
      setGenderError(() => true);
    } else if (!data.weekday) {
      setweekdayError(() => true);
    } else {
      if (Object.keys(edit).length > 0) {
        let Id = edit.Id;
        data = { ...data, Id };
        dispatch(Edit(data));
      } else {
        let Id = data.id || Date.now();
        data = { ...data, Id };
        dispatch(Add(data));
      }
      setGenderError(() => false);
      setweekdayError(() => false);
    }
  };

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className={styles.error}>*Name is required</p>
                )}
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className={styles.error}>*Email is required</p>
                )}
              </div>
              <div>
                <label htmlFor="contact">Contact:</label>
                <input
                  type="number"
                  id="contact"
                  {...register("contact", {
                    validate: (value) => {
                      return value.length === 10;
                    },
                  })}
                />
                {errors.contact && (
                  <p className={styles.error}>*Contact number is invalid</p>
                )}
              </div>
              <div>
                <label>Weekday:</label>
                <div className={styles.checkboxes}>
                  <label htmlFor="monday">
                    <input
                      type="checkbox"
                      id="monday"
                      {...register("weekday")}
                      value="Monday"
                    />{" "}
                    Monday
                  </label>
                  <label htmlFor="tuesday">
                    <input
                      type="checkbox"
                      id="tuesday"
                      {...register("weekday")}
                      value="Tuesday"
                    />{" "}
                    Tuesday
                  </label>
                  <label htmlFor="wednesday">
                    <input
                      type="checkbox"
                      id="wednesday"
                      {...register("weekday")}
                      value="Wednesday"
                    />{" "}
                    Wednesday
                  </label>
                  <label htmlFor="thursday">
                    <input
                      type="checkbox"
                      id="thursday"
                      {...register("weekday")}
                      value="Thursday"
                    />{" "}
                    Thursday
                  </label>
                  <label htmlFor="friday">
                    <input
                      type="checkbox"
                      id="friday"
                      {...register("weekday")}
                      value="Friday"
                    />{" "}
                    Friday
                  </label>
                </div>
                {weekdayError && (
                  <p className={styles.error}>*Please select weekday</p>
                )}
              </div>
              <div>
                <label>Gender:</label>
                <div>
                  <label htmlFor="male">
                    <input
                      type="radio"
                      id="male"
                      {...register("gender")}
                      value="Male"
                    />{" "}
                    Male
                  </label>
                  <label htmlFor="female">
                    <input
                      type="radio"
                      id="female"
                      {...register("gender")}
                      value="Female"
                    />{" "}
                    Female
                  </label>
                </div>
                {genderError && (
                  <p className={styles.error}>*Please select gender</p>
                )}
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  {...register("dob", { required: true })}
                />
                {errors.dob && (
                  <p className={styles.error}>*Date of Birth is required</p>
                )}
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
