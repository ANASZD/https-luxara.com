// ======================
// LUXARA PRODUCTS
// ======================

const products = [

{
    name:"Liquid Blush",
    price:"$24",
    image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
},

{
    name:"Lip Gloss",
    price:"$18",
    image:"https://images.unsplash.com/photo-1583241800698-9d9df8d9b5a8?w=600"
},

{
    name:"Foundation",
    price:"$35",
    image:"https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=600"
},

{
    name:"Beauty Cream",
    price:"$29",
    image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600"
}

];

const grid = document.getElementById("product-grid");

products.forEach(product=>{

grid.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p class="price">${product.price}</p>

<a href="#" class="buy-btn">

Shop Now

</a>

</div>

</div>

`;

});
