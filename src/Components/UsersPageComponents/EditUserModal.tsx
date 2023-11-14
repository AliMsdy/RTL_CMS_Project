import { Fragment } from "react";

//component
import Button from "../UI/Button";
import InputTemplate from "../UI/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm,SubmitHandler } from "react-hook-form";

//type
import { UserType } from "../../types/common.d";

//api req
import { updateUser } from "../../services/apiRequests";
//operation
import { editHandler } from "../../helpers/Operations";
//usersInfo
import usersInputArray, {
  userInputValidationSchema,
} from "../../constants/userInputsArray";

type ModalType = {
  user: UserType;
  setEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  setUsers: React.Dispatch<React.SetStateAction<never[]>>;
};

function ShowEditProductModal({ setEditUser, user, setUsers }: ModalType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userInputValidationSchema),
  });

  const handleUserUpdate: SubmitHandler<UserType> = (data: UserType) => {
    editHandler(
      "اطلاعات کاربر",
      data,
      updateUser,
      user.id,
      setUsers,
      setEditUser
    );
  };
  return (
    <div className="p-5 py-7 max-h-[80vh] overflow-auto">
      <h1 className="text-lg">اطلاعات جدید محصول را وارد کنید</h1>
      <form onSubmit={handleSubmit(handleUserUpdate)}>
        {usersInputArray.map((input) => (
          <Fragment key={input.name}>
            <InputTemplate
              isForEditModal
              register={register}
              {...input}
              user={user}
              errors={errors}
            />
          </Fragment>
        ))}
        <Button type="submit" className="w-full mt-4">
          ثبت کاربر جدید
        </Button>
      </form>
    </div>
  );
}

export default ShowEditProductModal;
