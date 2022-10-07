export interface DrinkInterface {
  id: number,
  name: string,
  ingredients: {
    units: number,
    ingredient: string,
  },
  image_name: string,
}