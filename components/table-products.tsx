import prisma from '@/lib/prisma'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import RefreshButton from './refresh-button'

export default async function TableProducts() {
  const startTime = Date.now()
  const products = await prisma.products.findMany()
  const duration = Date.now() - startTime

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Products</h2>
          <p className="text-sm text-gray-500">
            Fetched {products.length} products in {duration}ms
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {products.map((product) => (
          <div
            key={product.name}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={product.image || "https://icon-library.com/images/icon-product/icon-product-4.jpg"}
                alt={product.name}
                width={48}
                height={48}
                className="rounded-full ring-1 ring-gray-900/5"
              />
              <div className="space-y-1">
                <p className="font-medium leading-none">{product.name}</p>
                <p className="text-sm text-gray-500">[ {product.pack} ] ..... € {product.price}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">{timeAgo(product.createdAt)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
