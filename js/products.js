//dirección para obtener el listado en formato json:
const LIST_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";



let categoriesArray = [];


function showCategoriesList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let category = array[i];
        htmlContentToAppend += `
        <main class="pb-5 container">
            <div class="container">
                <div class="col-3">
                    <img src="` + category.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ category.name +`</h4> 
                        <p> `+ category.description +`</p> 
                        <p> `+ category.cost +`</p>
                        <p> `+ category.currency +`</p>
                        </div>
                        <small class="text-muted">` + category.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </main>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}


//-JSONData()  showCategoriesList() pasándole por parámetro categoriesArray.

*/

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
        }
    });
});