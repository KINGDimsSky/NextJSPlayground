interface PropsPage {
    params: {
        slug : string[]
    }
}

async function getData(id ?: string) {
    /* const res = await fetch('https://fakestoreapi.com/products'); */
    const url = id
    const res = await fetch(url ? `http://localhost:3000/api/product?id=${id}` : "http://localhost:3000/api/product", {
        cache: "force-cache",
        next: {
            tags: ['products']
           /*  revalidate: 30 */
        }
    })
    if (!res.ok) {
        throw new Error('Failed To Fetch Data');
    }
    return res.json();
}

export default async function ProductPage ({params} : PropsPage) {
    const {slug} = params
    const products = await getData()
    console.log (products)
    return (
        <div className="grid grid-cols-4 gap-2 mt-5 items-center">
            {/* <h1>{slug ? "Detail Products Page" : "Products Page"}</h1> */}
            {Array.isArray(products.data) ? products.data.map((product: any) => (
              <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-5">
                    <a href="#">
                        <img className="p-8 rounded-t-lg object-cover h-96 w-full" src={product.image} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.title}</h5>
                        </a>
                        <div className="flex items-center justify-between mt-3">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
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
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{products.data.title}</h5>
                    </a>
                    <div className="flex items-center justify-between mt-3">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${products.data.price}</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                </div>
          </div>
            )}
            {slug && (<>
                <h1>Detail Products</h1>
                <h1>Category : {slug[0]}</h1>
                <h1>Gender : {slug[1]}</h1>
                <h1>Products / ID : {slug[2]}</h1>
            </>)}
        </div>
    )
}