import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Table from './Components/Table';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Edit, Notify } from './Store/Action';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import toast, { Toaster } from 'react-hot-toast';


const SuccessToast = (Message) => toast.success(Message);
const errorToast = (Message) => toast.error(Message);

function App() {
  const [page, setpage] = useState(1)
  const { data, edit, isLoader, Message, Type } = useSelector(state => state.Reducer)
  const dispatch = useDispatch()
  const handleEdit = () => {
    dispatch(Edit({}))
  }

  useEffect(() => {
    if (Message) {
      if (Type == "success") {
        SuccessToast(Message)
      }
      else {
        errorToast(Message)
      }
    }
    dispatch(Notify({ Message: "", Type: "" }))
  }, [Message, Type])

  const handlePage = (elem) => {
    setpage(() => elem)
  }

  return (
    <div className="App">
      <Toaster />
      <Navbar handlePage={handlePage} />
      {
        page === 1 ? <Form /> : <Table />
      }
      {Object.keys(edit).length > 0 && <div className="modal">
        <p onClick={() => handleEdit()} className="close">X</p>
        <Form />
      </div>}
    </div>
  );
}

export default App;
