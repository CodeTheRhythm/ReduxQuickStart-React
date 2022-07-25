import {useSelector} from 'react-redux';

export default function MainItem3() {
  const user = useSelector(state => state.fake.user);
  const {name, email, age} = useSelector(state => state.customer);
  const {list} = useSelector(state => state.todo);

  return (
    <div className="main-item3">
      <h3>Main Item 3</h3>
      {user.name && <span>{`${user.name}, ${user.email}`}</span>}
	    <ul>
        {
          (list && list.map((item) => <li key={item.id}>{item.title}</li>))
        }
      </ul>
      <br />
      <br /><span>{name}</span>
      <br /><span>{email}</span>
      <br /><span>{age}</span>
    </div>
  );
}