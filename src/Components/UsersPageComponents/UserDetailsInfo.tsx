import { UserType } from "../../types/common.d";

function ShowDetailProductModal({ user }: { user: UserType }) {
  const { city, address, score, buy } = user;
  return (
    <div className="bg-white p-1 sm:p-5 overflow-auto">
      <div className="grid grid-cols-[minmax(auto,2fr)_minmax(auto,2fr)_auto_auto] gap-2 sm:gap-3 items-center justify-items-center text-xs sm:text-base ">
        <div>شهر</div>
        <div>آدرس</div>
        <div>امتیاز کاربر</div>
        <div>تعداد محصول خریداری شده</div>
        <div>{city}</div>
        <div>{address}</div>
        <div>{score}</div>
        <div>{buy}</div>
      </div>
    </div>
  );
}

export default ShowDetailProductModal;