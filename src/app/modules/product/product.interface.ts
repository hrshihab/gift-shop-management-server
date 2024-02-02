export type TProduct = {
  id: string // generated
  name: string
  price: number
  quantity: number
  occasion: string
  recipient?: string
  category: string
  theme: string[]
  brand: string
  material: string[] // assuming material is an array of strings
  color?: string[]
  productImage?: string
  isDeleted?: boolean
}
