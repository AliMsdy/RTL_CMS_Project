import React from "react";

type msg = {
  msg: string | React.ReactNode;
};

function ErrorBox({ msg }: msg) {
  return (
    <div className="bg-[#ff4f4f] text-center rounded-md p-2 text-xl text-white mt-6">
      {msg}
    </div>
  );
}

export default ErrorBox;
