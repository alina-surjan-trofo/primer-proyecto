

let categoriesListado =[];

function showCategoriesList(autos){
    let listaVehiculos = "";

    for (auto of autos.products){
        
        listaVehiculos += `
        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="` + auto.image + `" alt="product image" class="img-thumbnail">
                    </div>
                    <div class ="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                            <h4> `+ auto.name +`<br> `+ auto.currency + auto.cost +` </h4>
                            <p> `+ auto.description +`</p>
                            </div>
                            <small class="text-muted">` + auto.soldCount + `articulos vendidos </small>
                        </div>

                    </div>
                </div>    
            </div>  
            </div>  
            `
            
    }
    document.getElementById("cat-product-container").innerHTML = listaVehiculos; 
}


//uso el -JSONData() de Initjs / usola info del productsurl dejo que la lista que da el json sea lista de vehiculos y entonces se muestra la misma

document.addEventListener('DOMContentLoaded',()=>{
    getJSONData (PRODUCTS_URL).then(function(resultObj){ 
        if (resultObj.status === "ok"){

            listaVehiculos = resultObj.data;
            showCategoriesList(listaVehiculos);

        }
    })
})
