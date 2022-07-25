import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {update, reset} from '../../redux/slices/testSlice';

export default function Input() {
  const [name, setName] = useState("");
  const test = useSelector(state => state.test);
  const {user, error} = useSelector(state => state.fake);
  const dispatch = useDispatch();

  const updateName = (e) => {
    e.preventDefault();
    dispatch(update({name}));
  }

  const dispose = (e) => {
    e.preventDefault();
    dispatch(reset());
  }

  return (
    <div className="main-item1">
      <h3>Main item 1</h3>
      <input type="input" onChange={(e) => setName(e.target.value)}/>
      <button onClick={updateName}>Submit</button>
      <button onClick={dispose}>Reset</button>
      {error && <span> Error</span>}<br />
      <br />{test.name && <span>User Name: {test.name}</span>}
      <br />{user.name && <span>{`${user.name}, ${user.email}`}</span>}
    </div>
  );
}