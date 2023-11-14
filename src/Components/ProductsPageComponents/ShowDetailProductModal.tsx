import { useState } from "react";
import { ProductType } from "../../types/common.d";

type DetailProductType = Pick<
  ProductType,
  "productDesc" | "sale" | "colors" | "popularity"
>;

function ShowDetailProductModal(product: DetailProductType) {
  const { productDesc, sale, colors, popularity } = product;
  const [showMore, setShowMore] = useState(productDesc && productDesc.length > 250);
  if (!productDesc) return false

  return (
    <div className="bg-white p-1 sm:p-5 overflow-auto">
      <div className="grid grid-cols-[1fr_1fr_1fr_minmax(auto,12fr)] gap-2 sm:gap-3 items-center justify-items-center text-xs sm:text-base ">
        <div>تعداد فروش</div>
        <div>محبوبیت</div>
        <div>تعداد رنگ</div>
        <div>توضیحات محصول</div>
        <div>{sale}</div>
        <div>{popularity}</div>
        <div>{colors}</div>
        <div className="flex flex-col">
          <p>
            {showMore ? productDesc.substring(0, 250) + "..." : productDesc}{" "}
          </p>
          {productDesc.length > 250 && (
            <button
              className="underline text-blue-700 mt-2"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "نمایش بیشتر" : "نمایش کمتر"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowDetailProductModal;
