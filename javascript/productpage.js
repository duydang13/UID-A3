/*creating a list of products, storing them and creating a div for each*/
document.addEventListener('DOMContentLoaded', function() {
    const product = [
        { id: 0, imgSrc: "/images/pennyfarthing.png", alt: "penny", name: "PENNY FARTHING", price: "$12.00", link: "/html/productpage1.html"},
        { id: 1, imgSrc: "/images/koala.png", alt: "koala", name: "CHOCOLATE KOALA", price: "from $29.95" },
        { id: 2, imgSrc: "/images/australia.png", alt: "australia", name: "CHOCOLATE AUSTRALIA", price: "$16.00", link: "/html/productpage2.html" },
        { id: 3, imgSrc: "/images/honey.png", alt: "honey", name: "HONEYCOMB SLAB", price: "$10.00" },
        { id: 4, imgSrc: "/images/balls.png", alt: "balls", name: "CHOCOLATE GOLF BALLS", price: "$5.50" },
        { id: 5, imgSrc: "/images/pooh.png", alt: "bear", name: "CARAMEL POOH BEAR", price: "$4.00" },
        { id: 6, imgSrc: "/images/buttons.png", alt: "buttons", name: "CHOCOLATE BUTTONS", price: "from $6.95" },
        { id: 7, imgSrc: "/images/kangaroos.png", alt: "kangaroo", name: "KANGAROO'S & KOALA'S", price: "$4.00" },
        { id: 8,imgSrc: "/images/circus.png", alt: "circus", name: "CHOCOLATE CIRCUS", price: "$4.50" },
        { id: 9, imgSrc: "/images/transport.png", alt: "tranpsort", name: "CHOCOLATE TRANSPORT", price: "$4.50" },
        { id: 10,imgSrc: "/images/caramel.png", alt: "caramel", name: "CARAMEL FILLED BAR", price: "$6.00" },
        { id: 11, imgSrc: "/images/speckle.png", alt: "speckle", name: "CHOCOLATE SPECKLE XXL", price: "$12.00" },
    ];

    const productContainer = document.getElementById('product-container');

    function createProductCard(){
        product.forEach(product => {
            const productCard= document.createElement('div');
            productCard.classList.add('product-card');

            const imgElement = product.link
                ? `<a href="${product.link}"><img src="${product.imgSrc}" alt="${product.alt}"></a>`
                : `<img src="${product.imgSrc}" alt="${product.alt}">`;
            
            productCard.innerHTML=`
                ${imgElement}
                <div class="product-card-des">
                    <h2 class="name-description">${product.name.replace(" ", "<br>")}</h2>
                    <h2 class="prices">${product.price}</h2>
                </div>
            `;
    
            productContainer.appendChild(productCard);
        });
    };


    function hideProducts(){
    const products = document.querySelectorAll(".product-card");
    const seeMoreButton = document.getElementById("see-more");
    seeMoreButton.style.display = "block";

    if (products.length>6) {
        /*Hide the products at first*/
    for (let i = products.length-6; i< products.length; i++) {
        if (products[i]){
            products[i].style.display = "none";
        }
    } 
    /*Add a click event listener to the see more button to reveal more products*/
    seeMoreButton.addEventListener("click", function(){
        for (let i = products.length-6; i< products.length; i++) {
        if (products[i]){
            products[i].style.display = "grid";
            }
        }
    /*Hide the see more button*/
    seeMoreButton.style.display= "none";
    });
    } else {
        seeMoreButton.style.display = "none";
    }
}

createProductCard(product);
hideProducts();

});



