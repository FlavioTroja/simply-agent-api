import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import TablePlaceholder from '@/components/table-placeholder'
import TableProducts from '@/components/table-products'

// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'
export const preferredRegion = 'products'
export const dynamic = 'force-dynamic'

export default function Products() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Simply Agent
      </h1>
      <div className="flex justify-center  space-x-5 pt-3 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600">
        <Link
          href="/"
          className="font-medium hover:text-black transition-colors"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="font-medium hover:text-black transition-colors"
        >
          Products
        </Link>
      </div>
      <div className="flex space-x-5 pt-3 mt-3 border-t border-gray-300 w-full max-w-xl text-gray-600"></div>
      <Suspense fallback={<TablePlaceholder />}>
        <TableProducts />
      </Suspense>
      <div className="flex justify-center space-x-5 pt-10 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600"></div>
      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <Link href="https://overzoom.it">
          <Image
            src="https://overzoom.it/wp-content/uploads/2019/08/Overzoom_logo_sito_black.png"
            alt="Overzoom Logo"
            width={130}
            height={24}
            priority
          />
        </Link>
        <Link
          href="https://github.com/FlavioTroja/simply-agent-api"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
          <p className="font-light">Source</p>
        </Link>
      </div>
    </main>
  )
}
