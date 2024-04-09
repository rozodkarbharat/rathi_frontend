import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../Css/Table.module.css";
import { useDispatch } from "react-redux";
import { Delete, Edit, Loading, OpenModal } from "../Store/Action";
import Loader from "./Loader";

const Table = () => {
  const { data, Id, isLoader } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();

  const handleDelete = (data) => {
    dispatch(Loading());
    dispatch(Delete(data));
  };

  const handleEdit = (data) => {
    dispatch(OpenModal(data));
  };

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div>
          <table>
            <tr>
              <th>S. No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Weekdays</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
            {data.map((data, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.contact}</td>
                  <td>{data.gender}</td>
                  <td>{data.dob}</td>
                  <td>
                    {data.weekday.map((weekday) => {
                      return <p className={styles.weekday}>{weekday}</p>;
                    })}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(data)}
                      className={styles.delete_btn}
                    >
                      DELETE
                    </button>
                    <button
                      onClick={() => handleEdit(data)}
                      className={styles.edit_btn}
                    >
                      EDIT
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
