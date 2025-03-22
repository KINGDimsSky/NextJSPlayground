import { NextRequest, NextResponse } from "next/server";

const data = [
    {id : 1, name: "Sepatu Baru", price: 100000},
    {id : 2, name: "Sepatu Lama", price: 250000}
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