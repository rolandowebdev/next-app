import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Product, ProductResponse } from '@/types/products'

const getProducts = async (): Promise<ProductResponse> => {
  const res = await fetch('http://localhost:3000/api/product', {
    cache: 'no-store'
  })

  if (!res.ok) throw new Error('Failed to fetch data')

  return res.json()
}

export default async function Product({
  params
}: {
  params: { productId: string }
}) {
  const products = await getProducts()
  return (
    <>
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-primary">
        List Product
      </h1>
      <article className="mt-8 grid grid-cols-3 gap-4">
        {products.data.length > 0 &&
          products.data.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription
                  className={cn(
                    product.description.length > 100 && 'line-clamp-3'
                  )}
                >
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-yellow-500">
                  ⭐️ {product.rating.rate}
                </p>
                <p className="mt-2 inline-block rounded-sm bg-primary px-2">
                  {product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })}
                </p>
              </CardContent>
            </Card>
          ))}
      </article>
    </>
  )
}
