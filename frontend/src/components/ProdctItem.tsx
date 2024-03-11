import { Button, Card, CardBody } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Product } from '../types/Product.ts'
import Rating from './Rating'

function ProductItem({ product }: { product: Product }) {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <CardBody>
        <Link to={`/product/${product.slug}`}>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Card.Text>${product.price}</Card.Text>
          {product.countInStock === 0 ? (
            <Button variant="light disabled">Out Of Stock</Button>
          ) : (
            <Button>Add to Item</Button>
          )}
        </Link>
      </CardBody>
    </Card>
  )
}

export default ProductItem
