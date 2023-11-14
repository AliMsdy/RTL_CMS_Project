//component
import UsersTableItem from "./UsersTableItem"
//type
import {UserType } from "../../types/common"
type UsersState = {
    users: UserType[],
    setUsers: React.Dispatch<React.SetStateAction<never[]>>
  }
function UsersTable({users,setUsers}:UsersState) {
  return (
    <div className="mt-6 bg-white p-4 pt-0 overflow-auto">
      <table className="w-full border-separate border-spacing-y-4 border-spacing-x-6 sm:border-spacing-x-2 lg:border-spacing-x-4 sm:border-spacing-y-6 ">
        <thead className="lg:text-lg">
          <tr>
            <th className="align-middle">نام و نام خانوادگی</th>
            <th className="align-middle">یوزر نیم</th>
            <th className="align-middle">رمز عبور</th>
            <th className="align-middle">شماره تماس</th>
            <th className="align-middle">ایمیل</th>
          </tr>
        </thead>
        <tbody className="lg:text-lg">
          {users.map((user: UserType) => (
            <UsersTableItem key={user.id} user={user} setUsers={setUsers} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable