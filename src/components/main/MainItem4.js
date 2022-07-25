import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getList} from '../../redux/slices/todoSlice';
import callAPI from '../../fakeAPI/api';
import {update} from '../../redux/slices/customerSlice';

export default function MainItem4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const {pending} = useSelector(state => state.fake);
  const {status, error} = useSelector(state => state.todo);

  const callFakeAPI = (e) => {
    e.preventDefault();
    dispatch(getList({ something: "something" }));
  }
  
  const callFakeAPI2 = async (e) => {
    e.preventDefault();
    callAPI(dispatch);
  }

  const updateCustomer = (e) => {
    e.preventDefault();
    dispatch(update({name, email}));
  }

  return (
    <div className="main-item4">
      <h3>Main Item 4</h3>
	    <button onClick={callFakeAPI}>Call API (Thunk)</button>
      <button onClick={callFakeAPI2} disabled={pending && "disabled"}>Call API (Custom)</button>
	    <br />{status == "failed" && <span>{error}</span>}
      <br />
      <br/><input type="input" onChange={(e) => setName(e.target.value)}/>
      <br/><input type="input" onChange={(e) => setEmail(e.target.value)}/>
      <br/><button onClick={updateCustomer}>Submit</button>
    </div>
  );
}