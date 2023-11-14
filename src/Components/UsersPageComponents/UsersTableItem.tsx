import React, { useState } from "react";
import { deleteHandler } from "../../helpers/Operations";
//component
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import EditUserModal from "./EditUserModal";
import DetailUserModal from "./UserDetailsInfo";


//api req
import { deleteUser } from "../../services/apiRequests";

//type
import { UserType } from "../../types/common";

type UsersStateType = {
  user: UserType;
  setUsers: React.Dispatch<React.SetStateAction<never[]>>;
};

function UserTableItem({ user, setUsers }: UsersStateType) {
  const { id, firsname, lastname, username, password, phone, email } = user;
  const [editUser, setEditUser] = useState(false);
  const [userDetailInfo, setUserDetailInfo] = useState(false);
  return (
    <tr key={id}>
      <td className=" text-center align-middle sm:w-[30%] lg:w-[20%]">
        {`${firsname} ${lastname}`}
      </td>
      <td className="sm:w-[30%] lg:w-[20%] align-middle text-center">
        {username}
      </td>
      <td className="sm:w-[30%] lg:w-[20%] align-middle text-center">
        {password}
      </td>
      <td className="sm:w-[30%] lg:w-[20%] align-middle text-center">
        {phone}
      </td>
      <td className="sm:w-[30%] lg:w-[20%] align-middle text-center">
        {email}
      </td>
      <td className=" align-middle w-[20%]">
        <div className="flex sm:justify-center justify-end gap-1 sm:gap-2">
          
          <Button onClick={() => setUserDetailInfo(true)}>جزئیات</Button>
          <Button
            variant="delete"
            onClick={() => deleteHandler("کاربر", deleteUser, id, setUsers)}
          >
            حذف
          </Button>
          <Button onClick={() => setEditUser(true)}>ویرایش</Button>
        </div>
      </td>
      {/* Putting the modal in the td to resolve the warning which says div can't be the direct child of tbody */}
      {editUser && (
        <Modal closeModal={() => setEditUser(false)}>
          <EditUserModal
            user={user}
            setUsers={setUsers}
            setEditUser={setEditUser}
          />
        </Modal>
      )}
      {userDetailInfo && (
        <Modal closeModal={() => setUserDetailInfo(false)}>
          <DetailUserModal user={user} />
        </Modal>
      )}
      <td></td>
    </tr>
  );
}

export default UserTableItem;
