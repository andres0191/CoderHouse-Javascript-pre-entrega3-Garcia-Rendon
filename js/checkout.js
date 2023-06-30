const tbody = document.querySelector('tbody')

 function mostrarProductos(productCar){
    return`<tr id="${productCar.ref}">
                <td><img class="donitaIcon" src="${productCar.imagen}"></td>
                <td>${productCar.base}</td>
                <td>${productCar.description}</td>
                <td>${productCar.precio}</td>
                <td><img class="deleteProduct" style="width:35px" src="./src/img/eliminar.png"></td>
           </tr>`
}

function searchProductos(){
    return`<tr id="${productCar.ref}">
            <td><img class="donitaIcon" src="${productCar.imagen}"></td>
            <td>${productCar.base}</td>
            <td>${productCar.description}</td>
            <td>${productCar.precio}</td>
            <td><img class="deleteProduct" style="width:35px" src="./src/img/eliminar.png"></td>
        </tr>`
}


//Add prodcuts to LS and print in table
function updateProducts(){
    let carShop = dataLS()
    if(carShop.length > 0){
        carShop.forEach((productCar) => {
            tbody.innerHTML += mostrarProductos(productCar)
        })
    }
}

updateProducts()

//Delete Product
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('deleteProduct')) {
        const rowId = e.target.closest('tr').id;
        const index = parseInt(rowId.split('-')[1])
        carShop.splice(index, 1)
        localStorage.setItem('myShop', JSON.stringify(carShop))
        e.target.closest('tr').remove()
    }
})
