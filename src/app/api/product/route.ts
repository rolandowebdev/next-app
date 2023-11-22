import { products } from '@/data/products'
import { NextRequest, NextResponse } from 'next/server'

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
