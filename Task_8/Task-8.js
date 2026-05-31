//---------------------------- Java script Task -8 -----------------------

let api = "https://fakestoreapi.com/products";

fetch(api)
  .then((Response) => {
    return Response.json();
  })
  .then((products) => {
    console.log(products);

    // Task 1: Print All Products

    products.forEach((product) => {
      console.log("Title:", product.title);
      console.log("Price :", product.price);
    });

    // Task 2: Print Only Product Titles

    let producttitles = products.map((P) => {
      return P.title;
    });
    console.log(producttitles);

    // Task 3: Print Total Products

    console.log("Total Products :", products.length);

    // Task 4: Print All Categories

    let Categories = [...new Set(products.map((product) => product.category))];

    Categories.forEach((category) => {
      console.log(category);
    });

    // Task 5: Print Products Above $50

    let High_price = products.filter((product) => product.price > 50);
    High_price.forEach((P) => {
      console.log(`${P.title} - ${P.price}`);
    });

    // Task 6 Print Products below 50

    let Low_price = products.filter((product) => product.price < 50);
    Low_price.forEach((P) => {
      console.log(`${P.title} - ${P.price}`);
    });

    // TASK 7: Find First Product Above $100

    let Priceabove = products.find((Product) => {
      return Product.price >= 100;
    });
    console.log(Priceabove);

    // Task 8: Search Product

    let searchText = "shirt";

    let textsearch = products.filter((product) => {
      return product.title.toLowerCase().includes(searchText.toLowerCase());
    });
    textsearch.forEach((product) => {
      console.log(product.title);
    });

    // TASK 9: Count Electronics Products

    let electronics = products.filter((product) => {
      return product.category === "electronics";
    });

    console.log("Total electronics :", electronics.length);

    // TASK 10: Print Highest Price Product

    let highest_Price = products.reduce((high, curr) => {
      return curr.price > high.price ? curr : high;
    });

    console.log(highest_Price);

    // Task 11: Print Lowest Price Product

    let lowest_Price = products.reduce((high, curr) => {
      return curr.price < high.price ? curr : high;
    });
    console.log(lowest_Price);

    // TASK 12: Calculate Total Price of All Products

    let total_Price = products.reduce((total_product, product_price) => {
      return total_product + product_price.price;
    }, 0);

    console.log("Total Price :", total_Price.toFixed(2));

    // TASK 13: Calculate Average Product Price

    let average_Price = total_Price / products.length;

    console.log("Average Price :", average_Price);

    // TASK 14: Print Product With Highest Rating

    let highest_product_rating = products.reduce((bes, curr) => {
      return curr.rating.rate > bes.rating.rate ? bes : curr;
    });
    console.log(highest_product_rating);

    // TASK 15: Print Product With lowest Rating

    let lowest_product_rating = products.reduce((bes, curr) => {
      return curr.rating.rate < bes.rating.rate ? bes : curr;
    });
    console.log(lowest_product_rating);

    // TASK 16: Category Wise Product Count

    let count = products.reduce((ac, P) => {
      if (ac[P.category]) {
        ac[P.category]++;
      } else {
        ac[P.category] = 1;
      }
      return ac;
    }, {});

    console.log(count);

    // TASK 17: Create Discounted Products

    let discount = products.map((product) => {
      return {
        title: product.title,
        old_price: product.price,
        New_price: (product.price * 0.9).toFixed(2),
      };
    });
    console.log(discount);

    // TASK 18: Sort Products Low To High

    let low_to_High = [...products].sort((a, b) => a.price - b.price);

    console.log(low_to_High);

    // TASK 19: Sort Products High To Low

    let high_to_low = [...products].sort((a, b) => b.price - a.price);

    console.log(high_to_low);

    // TASK 20: Check Any Product Above $500

    let any_Above = products.some((product) => product.price > 500);

    console.log(any_Above);

    // TASK 21: Check All Products Above Rating 3

    let rating_above = products.every((product) => product.rating.rate > 3);

    console.log(rating_above);

    // TASK 22: Print Top 5 Costliest Products

    let top = [...products].sort((a, b) => b.price - a.price).slice(0, 5);

    top.forEach((product) => {
      console.log(product.title);
    });

    // TASK 23: Print Top 5 Rated Products

    let top_products = [...products]
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 5);

    top_products.forEach((product) => {
      console.log(product.title, "-", product.rating.rate);
    });

    // TASK 24: Group Products By Category

    let group_Products = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }

      acc[product.category].push(product);

      return acc;
    }, {});

    console.log(group_Products);

    // TASK 25: Convert Product Prices To INR

    let INR = 85;

    products.forEach((product) => {
      let inr_Price = product.price * INR;

      console.log("Title :", product.title);
      console.log("Price : ₹" + inr_Price.toFixed(2));
    });

    // TASK 26: Amazon Product Filter

    let products_filter = products.filter((product) => {
      return (
        product.price < 500 &&
        product.rating.rate > 4 &&
        product.category === "electronics"
      );
    });

    console.log(products_filter);

    // TASK 27: Best Seller Product

    let top_seller = products.reduce((best, current) => {
      return current.rating.rate > best.rating.rate ? current : best;
    });

    console.log(top_seller);

    // TASK 28: Product Analytics Dashboard

    console.log("Total Products :", products.length);

    console.log("Total Categories :", Categories.length);

    console.log("Highest Price Product :", highest_Price.title);

    console.log("Lowest Price Product :", lowest_Price.title);

    console.log("Average Price :", average_Price.toFixed(2));

    console.log("Best Rated Product :", highest_product_rating.title);

    // TASK 29: Inventory Report

    let expensive_Products = products.filter((product) => product.price > 100);

    let affordable_Products = products.filter(
      (product) => product.price <= 100,
    );

    console.log("Expensive Products :", expensive_Products.length);

    console.log("Affordable Products :", affordable_Products.length);

    console.log(
      "Electronics :",
      products.filter((product) => product.category === "electronics").length,
    );

    console.log(
      "Jewellery :",
      products.filter((product) => product.category === "jewelery").length,
    );

    console.log(
      "Mens Clothing :",
      products.filter((product) => product.category === "men's clothing")
        .length,
    );

    console.log(
      "Womens Clothing :",
      products.filter((product) => product.category === "women's clothing")
        .length,
    );

    // TASK 30: Complete Admin Dashboard

    console.log("Total Products :", products.length);

    console.log("Total Categories :", Categories.length);

    console.log(total_Price);

    console.log("Average Price :", average_Price.toFixed(2));

    console.log("Highest Price Product :", highest_Price.title);

    console.log("Lowest Price Product :", lowest_Price.title);

    console.log("Best Rated Product :", highest_product_rating.title);
    console.log("Lowest rating product", lowest_product_rating);

    console.log("products above 100 :", High_price);
    console.log("products below 50 :", Low_price);

    console.log(" ");

    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
