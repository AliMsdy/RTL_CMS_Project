//type
import { CommentType,setState } from "../../types/common.d";

//component
import CommentsTableItem from "./CommentsTableItem";

//type
type CommentState = {
  comments: CommentType[],
  setComments: setState
}

function CommentsTable({ comments, setComments }:CommentState) {
  return (
    <div className="mt-6 bg-white p-4 pt-0 overflow-auto">
      <table className="w-full border-separate border-spacing-y-4 border-spacing-x-6 sm:border-spacing-x-2 lg:border-spacing-x-0 sm:border-spacing-y-6 ">
        <thead className="lg:text-lg">
          <tr>
            <th>اسم کاربر</th>
            <th>محصول</th>
            <th>کامنت</th>
            <th>تاریخ</th>
            <th>ساعت</th>
          </tr>
        </thead>
        <tbody className="lg:text-lg">
          {comments.map((comment: CommentType) => (
            <CommentsTableItem key={comment.id} comment={comment} setComments={setComments} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommentsTable;
