// import ProductTableItem from "../ProductsPageComponents/ProductTableItem"

// function Table({array,setArray,elementArrayType}) {
//   return (
//     <div className="mt-6 bg-white p-4 pt-0 overflow-auto">
//       <table className="w-full border-separate border-spacing-y-5 lg:border-spacing-y-6 ">
//         <thead className="lg:text-lg">
//           <tr>
//             <th className="">عکس</th>
//             <th className="text-center">اسم</th>
//             <th className="text-center">قیمت</th>
//             <th className="text-center">موجودی</th>
//           </tr>
//         </thead>
//         <tbody className="lg:text-lg">
//           {array.map((product: elementArrayType) => (
//             <ProductTableItem
//               setProductsArray={setArray}
//               key={product.id}
//               {...product}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Table