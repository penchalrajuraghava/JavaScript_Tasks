const productsContainer = document.querySelector(".products-container");
const totalProducts = document.querySelector(".total-products");
const errorDiv = document.querySelector(".error");
const finalDiv = document.querySelector(".final");

const API_URL = "https://fakestoreapi.com/products";

fetch(API_URL)
  .then(function (response) {
    return response.json();
  })

  .then(function (products) {
    totalProducts.textContent = "Total Products: " + products.length;

    products.forEach(function (product) {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const image = document.createElement("img");

      image.setAttribute("src", product.image);

      image.setAttribute("alt", product.title);

      image.setAttribute("class", "product-image");

      let titleText = product.title;

      if (titleText.length > 30) {
        titleText = titleText.slice(0, 30) + "...";
      }

      const title = document.createElement("h2");

      title.setAttribute("class", "product-title");

      title.textContent = titleText;

      const price = document.createElement("p");

      price.setAttribute("class", "product-price");

      price.textContent = "Price: $" + product.price;

      const category = document.createElement("p");

      category.setAttribute("class", "product-category");

      category.textContent = "Category: " + product.category;

      let descriptionText = product.description;

      if (descriptionText.length > 50) {
        descriptionText = descriptionText.slice(0, 50) + "...";
      }

      const description = document.createElement("p");

      description.setAttribute("class", "product-description");

      description.textContent = descriptionText;

      const tag = document.createElement("p");

      tag.setAttribute("class", "product-tag");

      if (product.price > 100) {
        tag.textContent = "Expensive Product";
      } else {
        tag.textContent = "Budget Product";
      }

      const showPriceBtn = document.createElement("button");

      showPriceBtn.textContent = "Show Price";

      showPriceBtn.addEventListener("click", function () {
        alert(product.price);
      });

      const showCategoryBtn = document.createElement("button");

      showCategoryBtn.textContent = "Show Category";

      showCategoryBtn.addEventListener("click", function () {
        alert(product.category);
      });

      const detailsBtn = document.createElement("button");

      detailsBtn.textContent = "View Details";

      detailsBtn.addEventListener("click", function () {
        alert(
          "Title: " +
            product.title +
            "\nPrice: $" +
            product.price +
            "\nCategory: " +
            product.category,
        );
      });

      card.append(
        image,
        title,
        price,
        category,
        description,
        tag,
        showPriceBtn,
        showCategoryBtn,
        detailsBtn,
      );

      productsContainer.append(card);
    });
  })

  .catch(function (error) {
    errorDiv.textContent = "Something Went Wrong";

    errorDiv.style.backgroundColor = "red";

    errorDiv.style.color = "white";

    errorDiv.style.textAlign = "center";

    console.log(error);
  })

  .finally(function () {
    finalDiv.textContent = "API Request Completed Successfully";
  });
