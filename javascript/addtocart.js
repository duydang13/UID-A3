const product = [
        { id: 0, imgSrc: "/images/pennyfarthing.png", alt: "penny", name: "PENNY FARTHING", price: "$12.00" },
        { id: 1, imgSrc: "/images/koala.png", alt: "koala", name: "CHOCOLATE KOALA", price: "from $29.95" },
        { id: 2, imgSrc: "/images/australia.png", alt: "australia", name: "CHOCOLATE AUSTRALIA", price: "$16.00" },
];

const categories = [...new Set(products.map((item)=>
{return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {imgSrc, name, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${imgSrc}></img>
            </div>
            <div class='bottom'>
                <p>${name}</p>
                <h2>$ ${price}</h2> +
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            </div>
        </div>`
    )
}).join('');

