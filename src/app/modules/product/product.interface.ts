export type TProduct = {
  name: string
  price: number
  quantity: number
  recipient: string
  occasion: string
  category: string
  theme: string
  brand: string
  material: string // assuming material is an array of strings
  color?: string
  productImage?: string
  isDeleted?: boolean
}
