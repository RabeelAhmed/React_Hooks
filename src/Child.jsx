import { useContext } from "react";
import { AppContext } from '../components/contextApi/useContext';

export default function Child() {
  const userData = useContext(AppContext); // Access userData properties correctly

  return (
    <div>
      Child = My name is {userData.name} and my age is {userData.age}
    </div>
  );
}
