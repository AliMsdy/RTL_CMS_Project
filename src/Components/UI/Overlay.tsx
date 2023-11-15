import { AiOutlineClose } from "react-icons/ai";
import { ChildrenPropType } from "../../types/common.d";

type OverlayType = ChildrenPropType & {
  actionFunction: () => void;
  className?: string;
  isForSidebar?: boolean;
};

function Overlay({
  children,
  actionFunction,
  className,
  isForSidebar,
}: OverlayType) {
  return (
    <div
      onClick={actionFunction}
      className={`absolute top-0 left-0 w-full h-screen bg-black/[.6] backdrop-blur-md flex items-center justify-center ${
        className ? className : ""
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative max-w-[100%] sm:w-[80%] lg:w-[60%] bg-white dark:bg-dark-body-secondary"
      >
        {!isForSidebar && (
          <button onClick={actionFunction} className="absolute left-0">
            <AiOutlineClose size={20} />
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export default Overlay;
