export default function ProfileLayout ({children} : {children : React.ReactNode}) {
    return (
        <div>
            <h2 className="text-2xl ">Title</h2>
            <div>{children}</div>
        </div>
    )
}