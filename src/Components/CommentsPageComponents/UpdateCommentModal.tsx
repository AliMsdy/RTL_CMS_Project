import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { editHandler } from "../../helpers/Operations";

///component
// import InputTemplate from "../UI/Input";
import Button from "../UI/Button";

//type
import { CommentType, setState } from "../../types/common";
//icon
import { BsCursorText } from "react-icons/bs";

import { updateComment } from "../../services/apiRequests";

const commentUpdateSchema = yup.object().shape({
  body: yup.string().required("فیلد را تکمیل کنید(الزامی)"),
});

function UpdateCommentModal({
  commentBody,
  id,
  setComments,
  setEditComment,
}: {
  commentBody: string;
  id: number | undefined;
  setComments: setState;
  setEditComment: setState<boolean>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentType>({
    resolver: yupResolver(commentUpdateSchema),
  });

  const handleCommentUpdate = (data: CommentType) => {
    editHandler("کامنت", data, updateComment, id, setComments, setEditComment);
  };
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(handleCommentUpdate)}>
        <label htmlFor="comment-body">کامنت جدید را بنویسید</label>
        <div className="relative my-1">
          <span className="absolute right-[4px] top-[50%] translate-y-[-50%]">
            <BsCursorText />
          </span>
          <textarea
            rows={3}
            id="comment-body"
            spellCheck="false"
            {...register("body")}
            defaultValue={commentBody}
            className="w-full bg-input-color p-2 pr-8 focus:outline-none rounded-lg lg:text-lg tracking-wide"
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="body"
          render={({ message }) => (
            <div className="text-red-700 pr-4">{message}</div>
          )}
        />
        <Button type="submit" className="w-full mt-4">
          ثبت کامنت
        </Button>
      </form>
    </div>
  );
}

export default UpdateCommentModal;
