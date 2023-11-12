import { useEffect, useState } from "react";

//api reqs
import { getComments } from "../../services/apiRequests";

//components
import ErrorBox from "../../Components/ErrorBox/ErrorBox";
import CommentsTable from "../../Components/CommentsPageComponents/CommentsTable";

//type
// import { CommentType } from "../../types/common.d";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then((res) => setComments(res));
  }, []);

  return (
    <>
      {comments.length ? (
        <CommentsTable comments={comments} setComments={setComments} />
      ) : (
        <ErrorBox msg="کامنتی یافت نشد" />
      )}
    </>
  );
}

export default Comments;
