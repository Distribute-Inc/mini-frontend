import * as angular from 'angular'
import * as _ from 'lodash'
import {$} from 'moneysafe'

export class ProductsService {
  private products = [
    {
      id: 1,
      name: `test product 1`,
      description: `a test product`,
      price: $(19.99),
      brand: `TestBrand`
    },
    {
      id: 2,
      name: `test product 2`,
      description: `another test product`,
      price: $(42.00),
      brand: `testBrand`
    }
  ]
  public getProducts() {
    return this.products
  }
  public getProductById(id: number) {
    return _.find(this.products, (product) => product.id === id)
  }
}

angular.module(`miniscule.services.productsService`, [])
.factory(`productsService`, () => {
  return new ProductsService()
})
