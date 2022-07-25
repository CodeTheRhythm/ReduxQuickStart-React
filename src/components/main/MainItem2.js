import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {update} from '../../redux/slices/testSlice';

export default function MainItem2() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const updateName = (e) => {
    e.preventDefault();
    dispatch(update({name}));
  }

  return (
    <div className="main-item2">
      <h3>Main Item 2</h3>
      <input type="input" onChange={(e) => setName(e.target.value)}/>
      <button onClick={updateName}>Submit</button>
    </div>
  );
}