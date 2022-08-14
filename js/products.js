

let categoriesArray =[];

function showCategoriesList(array){
    let htmlContentToAppend = "";

    for (let i=0 ; i <array.products.length; i++){
        let category = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.products.image + `" alt="product image" class="img-thumbnail">
                    </div>
                    <div class ="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                            <h4> `+ category.products.name +`<br> `+ category.products.currency + category.cost +` </h4>
                            <p> `+ ctegory.products.description +`</p>
                            </div>
                            <small class="text-muted">` + category.products.soldCount + `articulos vendidos </small>
                        </div>

                    </div>
                </div>    
            </div>    
            `
            document.getElementById("cat-product-container").innerHTML = htmlContentToAppend; 
    }
    }


//-JSONData()  showCategoriesList() pasándole por parámetro categoriesArray.

document.addEventListener("DOMContentLoaded", ()=> {
    getJSONData(AUTOS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
        }
    });
});