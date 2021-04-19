// export function  getProducts() {

//     //aca va el link de arriba a la derecha
//     var id="18b2yH4VG9-5m8RmsZffjbjc6V_phSntqtbR6VxdUhjs";
//     var sheet="1"

//     return new Promise((resolve) => {
//         fetch('https://spreadsheets.google.com/feeds/list/'+id+'/'+sheet+'/public/full?alt=json')
//             .then(response => response.json())
//             .then(data => data.feed.entry)
//             .then(data => ObjectConstructor(data))
//             .then(data => {resolve(data)})
//     })
// }



export async function  getProducts() {

    //aca va el link de arriba a la derecha
    var id="18b2yH4VG9-5m8RmsZffjbjc6V_phSntqtbR6VxdUhjs";
    var sheet="1"

    const response=await fetch('https://spreadsheets.google.com/feeds/list/'+id+'/'+sheet+'/public/full?alt=json')
    const data= await response.json()
    const result= ObjectConstructor(data.feed.entry);
    console.log(result)
    return result;
}






const ObjectConstructor = (data) => {
    let products ={}
    let array = [];
   
    for (var i = 0; i < data.length; i++) {
        array.push({
            "categoria":        data[i].gsx$categoria.$t,
            "id":               data[i].gsx$codigo.$t,
            "title":            data[i].gsx$producto.$t,
            "stock":            data[i].gsx$stock.$t,
            "desc":             data[i].gsx$descripcion.$t,
            "precio":           data[i].gsx$precio.$t,
            "imagen":           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYz1_BYbpLxZ5UhjB1J50QDuINxUPPawqoqg&usqp=CAU",
            "ganga":            data[i].gsx$ganga.$t
            // "dias": convertirFecha(data[i].gsx$fecha.$t)
        })
        if (i === data.length - 1) {
            return (array)
        }
    }
}



export function getProductsById(productId) {

    //aca va el link de arriba a la derecha
    var id="18b2yH4VG9-5m8RmsZffjbjc6V_phSntqtbR6VxdUhjs";
    var sheet="1"

    return new Promise((resolve) => {
        fetch('https://spreadsheets.google.com/feeds/list/'+id+'/'+sheet+'/public/full?alt=json')
            .then(response => response.json())
            .then(data => data.feed.entry)
            .then(data => ObjectConstructor2(data, productId))
            .then(data => resolve(data))
    })
}


const ObjectConstructor2 = (data, productId) => {
    let array = [];
   
    for (var i = 0; i < data.length; i++) {
        array.push({
            "categoria":        data[i].gsx$categoria.$t,
            "id":               data[i].gsx$codigo.$t,
            "title":            data[i].gsx$producto.$t,
            "stock":            data[i].gsx$stock.$t,
            "desc":             data[i].gsx$descripcion.$t,
            "price":           data[i].gsx$precio.$t,
            "image":           data[i].gsx$link.$t,
            "ganga":            data[i].gsx$ganga.$t
            // "dias": convertirFecha(data[i].gsx$fecha.$t)
        })
    }
    return array.find((data) => data.id===productId);
}

