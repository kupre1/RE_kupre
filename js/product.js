const productList = document.getElementById("product-list");

const prevButton = document.getElementById("prev-button");

const nextButton = document.getElementById("next-button");

let currentPage = 1;

const limit = 2;

let products = [];
fetch("../js/product.json")
  .then((res) => res.json())
  .then((data) => {
    products = data;

    displayProducts();
  });

function displayProducts() {
  productList.innerHTML = " ";

  const start = (currentPage - 1) * limit;
  const end = start + limit;

  const productsToDisplay = products.slice(start, end);

  productsToDisplay.forEach((product) => {
    const productMainPhoto = document.createElement("div");
    productMainPhoto.classList.add("productMainPhoto");
    productList.appendChild(productMainPhoto);

    const img = document.createElement("img");
    img.src = `assets/product.png-main/${product.img}`;
    productMainPhoto.appendChild(img);
    console.log();

    const productsText = document.createElement("div");
    productsText.classList.add("productsText");
    productList.appendChild(productsText);

    const product1 = document.createElement("p");
    product1.classList.add("product-1");
    productsText.appendChild(product1);
    product1.textContent = `${product.name}`;

    const product11 = document.createElement("p");
    product11.classList.add("product-11");
    productsText.appendChild(product11);
    product11.textContent = `${product.type}`;

    const product2 = document.createElement("p");
    product2.classList.add("product-2");
    productsText.appendChild(product2);
    product2.textContent = `${product.description}`;

    const productBtn = document.createElement("button");
    productBtn.classList.add("product-btn");
    productBtn.textContent = "view More";
    productsText.appendChild(productBtn);
    productBtn.addEventListener("click", function () {
      viewMore(product.id);
      productBtn.addEventListener("click", function () {
        viewMore(product.id);
      });

      function viewMore(productId) {
        window.location.href = `productlist.html?id=${productId}`;
      }
    });
    productsText.appendChild(productBtn);
    productList.appendChild(productsText);
  });
}

function viewMore(productId) {
  window.location.href = `product.html?id=${productId}`;
}

prevButton.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage = currentPage - 1;
    displayProducts();
  }
});

nextButton.addEventListener("click", function () {
  console.log(1);
  if (currentPage < Math.ceil(products.length / limit)) {
    currentPage = currentPage + 1;
    displayProducts();
  }
});
