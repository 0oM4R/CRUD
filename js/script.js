var productNameInput = document.getElementById("productNameInput")
var productPriceInput = document.getElementById("productPriceInput")
var productCategoryInput = document.getElementById("productCategoryInput")
var productDescriptionInput = document.getElementById("productDescriptionInput")

var productsContainer=[]; //storing the products



function addProduct()
{
    var product = {
        name: productNameInput.value ,
        price:productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value
    };
    productsContainer.push(product);
    clearForm();
    
} 
function clearForm()
{
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescriptionInput.value="";

}