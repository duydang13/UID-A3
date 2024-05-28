document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { imgSrc: "/images/pennyfarthing.png", alt: "penny", name: "PENNY FARTHING", price: "$12.00" },
        { imgSrc: "/images/koala.png", alt: "koala", name: "CHOCOLATE KOALA", price: "from $29.95" },
        { imgSrc: "/images/australia.png", alt: "australia", name: "CHOCOLATE AUSTRALIA", price: "$16.00" },
        { imgSrc: "/images/honey.png", alt: "honey", name: "HONEYCOMB SLAB", price: "$10.00" },
        { imgSrc: "/images/balls.png", alt: "balls", name: "CHOCOLATE GOLF BALLS", price: "$5.50" },
        { imgSrc: "/images/pooh.png", alt: "bear", name: "CARAMEL POOH BEAR", price: "$4.00" },
        { imgSrc: "/images/buttons.png", alt: "buttons", name: "CHOCOLATE BUTTONS", price: "from $6.95" },
        { imgSrc: "/images/kangaroos.png", alt: "kangaroo", name: "KANGAROO'S & KOALA'S", price: "$4.00" },
        { imgSrc: "/images/circus.png", alt: "circus", name: "CHOCOLATE CIRCUS", price: "$4.50" },
        { imgSrc: "/images/transport.png", alt: "tranpsort", name: "CHOCOLATE TRANSPORT", price: "$4.50" },
        { imgSrc: "/images/caramel.png", alt: "caramel", name: "CARAMEL FILLED BAR", price: "$6.00" },
        { imgSrc: "/images/speckle.png", alt: "speckle", name: "CHOCOLATE SPECKLE XXL", price: "$12.00" },
    ];

    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML=`
            <img src="${product.imgSrc}" alt="${product.alt}">
            <div class="product-card-des">
                <h2 class="name-description">${product.name.replace(" ", "<br>")}</h2>
                <h2 class="prices">${product.price}</h2>
            </div>
        `;

        productContainer.appendChild(productCard);
    });
});
