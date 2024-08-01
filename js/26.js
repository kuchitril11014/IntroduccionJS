//Fetch API con Async / Away
const url = 'https://jsonplaceholder.typicode.com/123'

// fetch(url)  
//     .then((response)=>{
//         if(response.ok){
//             return response.json()
//         }
//         throw new Error ( 'Hubo un Error...')
// })
//     .then (data => console.log(data))
//         .catch (error => console.log(error.message))


const consultarApi = async()=>{
   try {
        const response = await fetch(url)
                if(!response.ok){
                    throw new Error ('hubo un error')
                }
                const data = await response.json()
                console.log(data);
   } catch (error) {
        console.log(error.message);
   }
}

consultarApi()