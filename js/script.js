var productNameInput = document.getElementById("productNameInput")
var productPriceInput = document.getElementById("productPriceInput")
var productCategoryInput = document.getElementById("productCategoryInput")
var productDescriptionInput = document.getElementById("productDescriptionInput")


var productsContainer; //storing the products
if(localStorage.getItem("myProducts")==null){
    productsContainer=[];
}else{
    productsContainer=JSON.parse( localStorage.getItem("myProducts"));
    displayProducts();
}


function addProduct()
{
    var product = {
        name: productNameInput.value ,
        price:productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value
    };
    productsContainer.push(product);
    localStorage.setItem("myProducts",JSON.stringify(productsContainer));
    clearForm();
    displayProducts();
} 
function clearForm()
{
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescriptionInput.value="";

}

function displayProducts() {
    var tableContainer=``;
    for(var i=0;i<productsContainer.length;i++)
    {
        tableContainer +=`<tr>
        <td>`+i+`</td>
        <td>`+productsContainer[i].name+`</td>
        <td>`+productsContainer[i].price+`</td>
        <td>`+productsContainer[i].category+`</td>
        <td>`+productsContainer[i].description+`</td>
        <td><button class="btn btn-outline-warning">update</button></td>
        <td><button class="btn btn-outline-danger">delete</button></td>
        </tr>`
    }
    console.log(tableContainer);
    document.getElementById("tableBody").innerHTML= tableContainer;
  
}