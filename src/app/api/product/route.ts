import { NextRequest, NextResponse } from "next/server";

const data = [
    {id : 1, title: "Sepatu Baru", price: 100000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d130fcfa-7169-4172-8955-bf39cc544527/NIKE+VOMERO+18.png"},
    {id : 2, title: "Sepatu Lama", price: 250000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d130fcfa-7169-4172-8955-bf39cc544527/NIKE+VOMERO+18.png"}
]

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    if (id) {
        const DetailProduct = data.find((data) => data.id === Number(id))
        if (DetailProduct) {
          return NextResponse.json({status: 200, message: "Success", data: DetailProduct }) 
        }
      return NextResponse.json({status: 404, message: "Not Found", data: {} })
    }   

    return NextResponse.json({status: 200, message: "Success", data: data })
}