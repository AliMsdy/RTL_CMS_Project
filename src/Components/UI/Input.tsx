//type
import { ProductType,InputType } from "../../types/common.d";

import { ErrorMessage } from "@hookform/error-message";

function InputTemplate(props: InputType<ProductType>) {
  const {icon,register,product,isForEditModal,label,name,errors,...rest} = props

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="relative my-1">
        <span className="absolute right-[4px] top-[50%] translate-y-[-50%]">
          {icon}
        </span>
        <input
          className="w-full bg-input-color p-2 pr-8 focus:outline-none rounded-lg lg:text-lg tracking-wide"
          spellCheck="false"
          id={name}
          {...rest}
          {...register(name as keyof typeof product)}
          defaultValue={(isForEditModal && product) ? product[name as keyof typeof product]: ""}
        />
      </div>
      <ErrorMessage
        errors={errors}
        name={name as keyof typeof product}
        render={({ message }) => (
          <div className="text-red-700 pr-4">{message}</div>
        )}
      />
    </>
  );
}

export default InputTemplate;
//
