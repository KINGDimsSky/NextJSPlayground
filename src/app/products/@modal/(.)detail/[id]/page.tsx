import { Modal } from "@/components/products/Modal"
import { getData } from "@/services/product/index.service"

interface propsPage {
    params: {
        id : string
    }
}

export default async function DetailProductmodal ({params} : propsPage) {
    const { id } = params
    const product = await getData(id)
    console.log (product)
    console.log (id)

    return (
    <Modal>
      <img src={product.data.image} alt=""  className="w-full object-cover aspect-square col-span-2"/>
      <div className="bg-white p-4 px-6">
        <h3>{product.data.title}</h3>
        <p>Price : ${product.data.price}</p>
      </div>
    </Modal>    
    )
}