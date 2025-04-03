import { getData } from "@/services/product/index.service";
import Link from "next/link";

interface PropsPage {
    searchParams: {
        id ?: string;
    }
}

export default async function ProductPage ({searchParams} : PropsPage) {
    const products = await getData(searchParams.id)
    console.log (searchParams.id)

    return (
        <div className="grid grid-cols-4 gap-2 mt-5 items-center">
            {Array.isArray(products.data) ? products.data.map((product: any) => (
              <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-5">
                    <Link href={`products/detail/${product.id}`}>
                        <img className="p-8 rounded-t-lg object-cover h-96 w-full" src={product.image} alt="product image" />
                    </Link>
                    <div className="px-5 pb-5">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.name}</h5>
                        <div className="flex items-center justify-between mt-3">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                            <button type="button" className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail Products</button>
                        </div>
                    </div>
              </div>
            )) : (
                <div key={products.data.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-5">
                <a href="#">
                    <img className="p-8 rounded-t-lg object-cover h-96 w-full" src={products.data.image} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{products.data.name}</h5>
                    </a>
                    <div className="flex items-center justify-between mt-3">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${products.data.price}</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                </div>
          </div>
            )}
        </div>
    )
}