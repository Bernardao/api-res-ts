export interface Car {
  name: string
  color: string
  gas: GasType
  year: number
  description: string
  price: number
}
export enum GasType {
  GASOLINE = "gasoline",
  ELECTRIC = "electric"
}