import type { Product } from '@/types/products'
import { NextRequest, NextResponse } from 'next/server'

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 100
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300
  }
]

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const detailProduct = products.find((item) => item.id === Number(id))

  if (!id) {
    return NextResponse.json({
      status: 200,
      message: 'success get products',
      data: products
    })
  }

  if (!detailProduct) {
    return NextResponse.json({
      status: 404,
      message: 'product not found'
    })
  }

  return NextResponse.json({
    status: 200,
    message: 'success get product',
    data: detailProduct
  })
}
