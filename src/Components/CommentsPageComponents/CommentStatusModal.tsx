import { CommentType } from "../../types/common";
import Button from "../UI/Button";

type CommentStatusModalType = {
  commentOperationHandler: (
    func: (id: number | undefined) => Promise<CommentType[] | undefined>
  ) => Promise<void>;
  asyncFunc: (id: number | undefined) => Promise<CommentType[] | undefined>;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
};

function CommentStatusModal({
  type,
  commentOperationHandler,
  asyncFunc,
  closeModal,
}: CommentStatusModalType) {
  return (
    <div className="p-4">
      <h4 className="text-2xl text-center mb-4">
        آیا از {type} کامنت مطمئن هستید؟
      </h4>
      <div className="flex justify-center gap-4">
        <Button
          className="px-10 py-2"
          onClick={() => commentOperationHandler(asyncFunc)}
        >
          بله
        </Button>
        <Button
          className="px-10 py-2 bg-transparent text-zinc-950 dark:text-white border-black border-2"
          onClick={() => closeModal(false)}
        >
          خیر
        </Button>
      </div>
    </div>
  );
}

export default CommentStatusModal;
