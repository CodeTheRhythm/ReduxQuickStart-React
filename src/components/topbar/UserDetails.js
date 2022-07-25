import {useSelector} from 'react-redux';

export default function UserDetails() {
  const {name} = useSelector(state => state.test);

  return (
    <div>
      {name && <span>User Name: {name}</span>}
    </div>
  );
}