export const getData = async (id ?: string) => {
     const res = await fetch(id ? `http://localhost:3000/api/product?id=${id}` : "http://localhost:3000/api/product", {
         cache: "force-cache",
         next: {
             tags: ['products']
             //revalidate: 30 //revalidating setiap 30 detik cak
         }
     }) 
     if (!res.ok) {
         throw new Error('Failed To Fetch Data Cok');
     }
     return res.json();
}

