import { useState } from "react";
import { deleteHandler } from "../../helpers/Operations";
//component
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import CommentStatusModal from "./CommentStatusModal";
import UpdateCommentModal from "./UpdateCommentModal";

//type
import { CommentType, setState } from "../../types/common.d";

//api req
import {
  confirmComment as confirmCommentAsync,
  deleteComment,
  rejectComment as rejectCommentAsync,
} from "../../services/apiRequests";

type CommentStateType = {
  comment: CommentType;
  setComments: setState;
};

function CommentsTableItem({ comment, setComments }: CommentStateType) {
  const [showComment, setShowComment] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const [confirmComment, setConfirmComment] = useState(false);
  const [rejectComment, setRejectComment] = useState(false);
  const { id, userID, productID, date, hour, body, isAccept } = comment;

  const commentOperationHandler = async (
    func: (id: number | undefined) => Promise<CommentType[] | undefined>
  ) => {
    const data = await func(id);
    setComments(data);
    func === confirmCommentAsync
      ? setConfirmComment(false)
      : setRejectComment(false);
  };

  return (
    <tr key={id}>
      <td className=" text-center align-middle sm:w-[30%] lg:w-[20%]">
        {userID}
      </td>
      <td className="sm:w-[30%] lg:w-[20%] align-middle text-center">
        {productID}
      </td>
      <td className="sm:w-[30%] lg:w-[20%] align-middle text-center">
        <Button onClick={() => setShowComment(true)} className="p-[4px] lg:p-2">
          دیدن کامنت
        </Button>
      </td>
      <td className="sm:w-[30%] lg:w-[20%] align-middle text-center">{date}</td>
      <td className="sm:w-[30%] lg:w-[20%] align-middle text-center">{hour}</td>
      <td className=" align-middle w-[20%]">
        <div className="flex sm:justify-center justify-end gap-1 sm:gap-2">
          <Button
            variant="delete"
            onClick={() =>
              id && deleteHandler("کامنت", deleteComment, id, setComments)
            }
          >
            حذف
          </Button>
          <Button onClick={() => setEditComment(true)}>ویرایش</Button>
          <Button>پاسخ</Button>
          {isAccept ? (
            <Button
              variant="reject"
              onClick={() => setRejectComment(true)}
            >
              رد کامنت
            </Button>
          ) : (
            <Button
              variant="confirm"
              onClick={() => setConfirmComment(true)}
            >
              تایید
            </Button>
          )}
        </div>
      </td>
      {/* Putting the modal in the td to resolve the warning which says div can't be the direct child of tbody */}
      <td>
        {showComment && (
          <Modal closeModal={() => setShowComment(false)}>
            <p className="p-5 py-7 text-center text-xl">{body}</p>
          </Modal>
        )}
        {editComment && (
          <Modal closeModal={() => setEditComment(false)}>
            <UpdateCommentModal
              commentBody={body}
              id={id}
              setComments={setComments}
              setEditComment={setEditComment}
            />
          </Modal>
        )}
        {confirmComment && (
          <Modal closeModal={() => setConfirmComment(false)}>
            <CommentStatusModal
              type="تایید"
              commentOperationHandler={commentOperationHandler}
              asyncFunc={confirmCommentAsync}
              closeModal={setConfirmComment}
            />
          </Modal>
        )}
        {rejectComment && (
          <Modal closeModal={() => setRejectComment(false)}>
            <CommentStatusModal
              type="رد"
              commentOperationHandler={commentOperationHandler}
              asyncFunc={rejectCommentAsync}
              closeModal={setRejectComment}
            />
          </Modal>
        )}
      </td>
    </tr>
  );
}

export default CommentsTableItem;
