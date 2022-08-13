const catProductAutos101 = "https://japceibal.github.io/emercado-api/cats_products/101.json"

let categoriesArray =[];

function showCategoriesList(array){
    let htmlContentToAppend = "";

    for (let i = 0; i <array.length; i++){
        let category = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.image + `" alt="product image" class="imgcatautos">
                    </div>
                    <div class ="col>
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                            <h4> `+ category.name +`<br> `+ category.currency + category.cost +` </h4>
                            <p> `+ ctegory.description +`</p>
                            </div>
                            <small class="text-muted">` + category.soldCount + `articulos vendidos </small>
                        </div>

                    </div>
                </div>    
            </div>    
            `
            document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
    }


//-JSONData()  showCategoriesList() pasándole por parámetro categoriesArray.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(catProductAutos101).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
        }
    });
});