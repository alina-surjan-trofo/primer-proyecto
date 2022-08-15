

let categoriesListado =[];

function showCategoriesList(listado){
    let lista = "";

    for (let i=0 ; i <listado.products.length; i++){
        let vehiculo = listado[i];
        lista += `
        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="` + vehiculo.image + `" alt="product image" class="img-thumbnail">
                    </div>
                    <div class ="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                            <h4> `+ vehiculo.products.name +`<br> `+ vehiculo.products.currency + vehiculo.cost +` </h4>
                            <p> `+ vehiculo.products.description +`</p>
                            </div>
                            <small class="text-muted">` + vehiculo.products.soldCount + `articulos vendidos </small>
                        </div>

                    </div>
                </div>    
            </div>    
            `
            document.getElementById("cat-product-container").innerHTML = lista; 
    }
    }


//-JSONData()  showCategoriesList() pasándole por parámetro categoriesArray.

document.addEventListener("DOMContentLoaded", ()=> {
    getJSONData(AUTOS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){ 
            categoriesListado = resultObj.data;
            showCategoriesList(categoriesListado);
        }
        else  alertify.alert('Alert Message!');
         
        }
    })
