export default function Product({
  params
}: {
  params: { products: string[] }
}) {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
        List Product Page
      </h1>
      {params.products && (
        <ol className="mt-6 flex gap-2">
          {params.products.map((product) => (
            <li key={product}>/ {product}</li>
          ))}
        </ol>
      )}
    </>
  )
}
