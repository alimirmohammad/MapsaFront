// const xhr = new XMLHttpRequest();
//
// xhr.open("GET", 'http://Mont.biz/products.json');
//
// xhr.send();
//
// xhr.onload = () => {
//     const response = JSON.parse(xhr.response);
//     // console.log(response);
//     // console.log(response.products);
//     let productsHtml = '';
//     response.products.forEach(product => {
//
//         productsHtml += `<div class="col-3">
//                             <div class="card">
//                                 <img src=${product.photo.url} alt="...">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${product.name_fa}</h5>
//                                     <p class="card-text">${product.name_en}</p>
//                                     <p class="card-text"><strong>فروشنده: </strong>${product.price.seller_full_name}</p>
//                                     <p class="card-text"><strong>قیمت: </strong>${product.price.price}</p>
//                                 </div>
//                             </div>
//                          </div>`
//     });
//
//     document.getElementById('products').innerHTML = productsHtml;
//
// };

function getRequest(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    return new Promise(resolve => {
        xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
        }
    })
}


getRequest('http://Mont.biz/products.json')
    .then(response => {
        console.log(response)
    })


// xhr.onload = () => {
//     const response = JSON.parse(xhr.response);
//     // console.log(response);
//     // console.log(response.products);
//     let productsHtml = '';
//     response.products.forEach(product => {
//
//         productsHtml += `<div class="col-3">
//                             <div class="card">
//                                 <img src=${product.photo.url} alt="...">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${product.name_fa}</h5>
//                                     <p class="card-text">${product.name_en}</p>
//                                     <p class="card-text"><strong>فروشنده: </strong>${product.price.seller_full_name}</p>
//                                     <p class="card-text"><strong>قیمت: </strong>${product.price.price}</p>
//                                 </div>
//                             </div>
//                          </div>`
//     });
//
//     document.getElementById('products').innerHTML = productsHtml;
//
// };