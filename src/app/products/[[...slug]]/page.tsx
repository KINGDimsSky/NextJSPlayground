interface PropsPage {
    params: {
        slug : string[]
    }
}

export default function DetailProduct ({params} : PropsPage) {
    const {slug} = params

    return (
        <div>
            <h1>{slug ? "Detail Products Page" : "Products Page"}</h1>
            {slug && (<>
                <h1>Detail Products</h1>
                <h1>Category : {slug[0]}</h1>
                <h1>Gender : {slug[1]}</h1>
                <h1>Products / ID : {slug[2]}</h1>
            </>)}
        </div>
    )
}