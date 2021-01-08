var productNameInput = document.getElementById("productNameInput")
var productPriceInput = document.getElementById("productPriceInput")
var productCategoryInput = document.getElementById("productCategoryInput")
var productDescriptionInput = document.getElementById("productDescriptionInput")
var validationNameAlert = document.getElementById("nameValidationAlert")
var mainBtn = document.getElementById("mainBtn");
var productsContainer; //storing the products
mainBtn.innerHTML = `<button onclick="addProduct()" class="btn btn-outline-info">Add</button>`

if (localStorage.getItem("myProducts") == null) {
    productsContainer = [];
} else {
    productsContainer = JSON.parse(localStorage.getItem("myProducts"));
    displayProducts();
}

function nameValidating() {

    var nameValidation = /^[A-Z][a-z]{3,6}$/
    if (nameValidation.test(productNameInput.value) == true) {
        productNameInput.classList.add("is-valid")
        productNameInput.classList.remove("is-invalid")
        validationNameAlert.classList.replace("d-block", "d-none")
        return 1;
    }
    else {
        productNameInput.classList.add("is-invalid")
        productNameInput.classList.remove("is-valid")
        validationNameAlert.classList.replace("d-none", "d-block")
        return 0;
    }
}

productNameInput.addEventListener("keyup", nameValidating)



function addProduct() {
    if (nameValidating() == true) {
        var product = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            description: productDescriptionInput.value
        };
        productsContainer.push(product);
        localStorage.setItem("myProducts", JSON.stringify(productsContainer));
        clearForm();
        displayProducts();
    }
}

function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";
    productNameInput.classList.remove("is-invalid")
    productNameInput.classList.remove("is-valid")
    validationNameAlert.classList.replace("d-block", "d-none")
}

function displayProducts() {
    var tableContainer = ``;
    for (var i = 0; i < productsContainer.length; i++) {
        tableContainer += `<tr>
        <td>` + i + `</td>
        <td>` + productsContainer[i].name + `</td>
        <td>` + productsContainer[i].price + `</td>
        <td>` + productsContainer[i].category + `</td>
        <td>` + productsContainer[i].description + `</td>
        <td><button onclick="displayForupdate(` + i + `);" class="btn btn-outline-warning">update</button></td>
        <td><button onclick="deleteProduct(` + i + `);" class="btn btn-outline-danger">delete</button></td>
        </tr>`
    }
    document.getElementById("tableBody").innerHTML = tableContainer;

}

function deleteProduct(productIndex) {
    productsContainer.splice(productIndex, 1);
    localStorage.setItem("myProducts", JSON.stringify(productsContainer))
    displayProducts();
}

function searchProduct(searchTerm) {
    for (var i = 0; i < productsContainer.length; i++) {
        var searchResult = '';
        if (productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true ||
            productsContainer[i].price.toLowerCase().includes(searchTerm.toLowerCase()) == true ||
            productsContainer[i].category.toLowerCase().includes(searchTerm.toLowerCase()) == true ||
            productsContainer[i].description.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
            searchResult +=
                `<tr>
            <td>` + i + `</td>
            <td>` + productsContainer[i].name + `</td>
            <td>` + productsContainer[i].price + `</td>
            <td>` + productsContainer[i].category + `</td>
            <td>` + productsContainer[i].description + `</td>
            <td><button onclick="displayForupdate(` + i + `);" class="btn btn-outline-warning">update</button></td>
              <td><button onclick="deleteProduct(` + i + `);" class="btn btn-outline-danger">delete</button></td>
            </tr>`;
        } else {
            console.log("err")
        }
        console.log(searchResult);
        document.getElementById("tableBody").innerHTML = searchResult;
    }

}

function displayForupdate(productIndex) {
    productNameInput.value = productsContainer[productIndex].name;
    productPriceInput.value = productsContainer[productIndex].price;
    productCategoryInput.value = productsContainer[productIndex].category;
    productDescriptionInput.value = productsContainer[productIndex].description;
    mainBtn.innerHTML = ` <button onclick="update(` + productIndex + `)" class="btn btn-outline-warning">update</button> `
}

function update(productIndex) {
    productsContainer[productIndex].name = productNameInput.value
    productsContainer[productIndex].price = productPriceInput.value
    productsContainer[productIndex].category = productCategoryInput.value
    productsContainer[productIndex].description = productDescriptionInput.value
    mainBtn.innerHTML = `<button onclick="addProduct()" class="btn btn-outline-info">Add</button>`
    clearForm();
    displayProducts();
}

