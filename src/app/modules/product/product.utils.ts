// import { Product } from './product.model'

// const findLastProductId = async () => {
//   const lastProduct = await Product.findOne().sort({ createdAt: -1 }).lean()
//   return lastProduct?.id as string
// }

// export const generatedProductId = async () => {
//   let currentId = (1).toString()
//   const lastProductId = await findLastProductId() // prod-0001
//   if (lastProductId) {
//     const lastId = lastProductId.split('-')[1] // 0001
//     currentId = (parseInt(lastId) + 1).toString().padStart(4, '0') // 0002
//   } else {
//     currentId = currentId.toString().padStart(4, '0') // 0000
//   }
//   return `prod-${currentId}`
// }

// export default findLastProductId
