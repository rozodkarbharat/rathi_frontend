import { ADD, DELETE, EDIT, LOADING, MODAL, NOTIFY } from "./Action.type"



const initStatte = {
    data: [],
    edit: {},
    isLoader: false,
    Message: "",
    Type: ""
}

export const Reducer = (state = initStatte, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoader: true }
        case ADD:
            return { ...state, data: [...state.data, action.payload], isLoader: false }

        case DELETE:
            let Id = action.payload.Id
            let data = state.data.filter(data => data.Id != Id)
            return { ...state, data, isLoader: false }

        case EDIT:
            let arr = []
            let temp = action.payload
            if (Object.keys(temp).length > 0 && Object.keys(state.edit).length > 0) {
                arr = state.data
                arr = arr.filter(elem => elem.Id != temp.Id)
                arr = [...arr, temp]
                temp = {}
            }
            return { ...state, edit: temp, data: arr, isLoader: false }


        case MODAL: {
            let edit = action.payload
            return { ...state, edit }
        }
        case NOTIFY:
            let { Message, Type } = action.payload
            return { ...state, Message, Type }

        default: {
            return {
                ...state
            }
        }
    }
}