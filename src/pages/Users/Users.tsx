import {useEffect,useState} from "react"
//component
import ErrorBox from "../../Components/ErrorBox/ErrorBox";
import UsersTable from "../../Components/UsersPageComponents/UsersTable"
// api req
import { getUsers } from "../../services/apiRequests";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  return (
    <>
      {users.length ? (
        <UsersTable users={users} setUsers={setUsers} />
      ) : (
        <ErrorBox msg="کاربری یافت نشد" />
      )}
    </>
  );
}

export default Users