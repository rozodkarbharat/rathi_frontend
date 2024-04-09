import { ADD, DELETE, EDIT, LOADING, MODAL, NOTIFY } from "./Action.type"


export const Add = (data) => (dispatch) => {
    dispatch({ type: ADD, payload: data })
    dispatch({ type: NOTIFY, payload: { Type: "success", Message: "Data added successfully!" } })
}

export const Delete = (data) => (dispatch) => {
    dispatch({ type: DELETE, payload: data })
    dispatch({ type: NOTIFY, payload: { Type: "success", Message: "Data deleted successfully!" } })
}

export const Edit = (data) => (dispatch) => {
    dispatch({ type: EDIT, payload: data })
    dispatch({ type: NOTIFY, payload: { Type: "success", Message: "Data edited successfully!" } })
}

export const OpenModal = (data) => (dispatch) => {
    dispatch({ type: MODAL, payload: data })
}

export const Loading = () => (dispatch) => {
    dispatch({ type: LOADING })
}

export const Notify = (data) => (dispatch) => {
    dispatch({ type: NOTIFY, payload: data })
}