import { getData } from "@/services/product/index.service";

interface PropsPage {
    params : {
        id : string;
    }
}

export default async function DetailProductPage ({params} : PropsPage) {
    const {id} = params
    const product = await getData(id)
    console.log (id)
    console.log (product.data)

    return (
        <div className="container mx-auto my-10">
          <div className="w-1/2 mx-auto border border-gray-700">
             <img src={product.data.image} alt=""  className="w-full object-cover aspect-square col-span-2"/>
             <div className="bg-white p-4 px-6">
                <h3>{product.data.title}</h3>
                <p>Price : ${product.data.price}</p>
             </div>
          </div>
        </div>
    )
}