export type TProduct = {
  name: string
  id: number
}
export interface IProduct {
  products: TProduct
}
export interface IUser {
  name: string
  id: number
  gender: string
}