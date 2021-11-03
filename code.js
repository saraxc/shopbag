let products = [{
    id: 1,
    name: "Healer",
    artist: "GroupLove",
    price: 2750,
    vinyl: "https://media-us.cdn.prod.wmgecom.com/media/catalog/product/cache/1354/image/600x/9df78eab33525d08d6e5fb8d27136e95/g/r/grouplovehealerexclusivevinylnew.png"

},
{
    id: 2,
    name: "Fine Line",
    artist: "Harry Styles",
    price: 4099,
    vinyl: "https://cdn.shopify.com/s/files/1/2349/3299/products/Harry_-_std_CD_240x.png?v=1574491513"
},
{
    id: 3,
    name: "After Hours",
    artist: "The Weeknd",
    price: 4550,
    vinyl: "https://disqueriakyd.cl/wp-content/uploads/2021/06/the-weeknd-after-hours-600x600.jpg"
},
{
    id: 4,
    name: "Parachute",
    artist: "Petit Biscut",
    price: 2799,
    vinyl: "https://cdn.shopify.com/s/files/1/0063/2255/2896/products/3700187673093.PT01_1024x1024@2x.jpg?v=1612615448"
},
{
    id: 5,
    name: "Live at Knebworth",
    artist: "Pink Floyd",
    price: 4710,
    vinyl: "https://cdn.shopify.com/s/files/1/0287/4323/7725/products/3942738-2689541_500x500.jpg?v=1618303493"
},
{
    id: 6,
    name: "Cuttin' grass VOL.2",
    artist: "Sturgill Simpson",
    price: 18,
    vinyl: "https://cdn.shopify.com/s/files/1/0069/3465/9162/products/cuttin_grass_vol_1_vinyl_store00203_1600x.jpg?v=1602776350"
},
{

    id: 7,
    name: "FACES YELLOW EDITION VINYL",
    artist: "Mac Miller",
    price: 4998,
    vinyl: "https://images.stockx.com/images/Mac-Miller-Faces-Yellow-Edition-Vinyl.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1632256551&pad=0&fm=webp"
}
]

function decimalForm(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
let carrito = [];
let total1 = 0;

let container_vinyl = document.getElementById("myProducts")


for (const iteraction of products) {
    container_vinyl.innerHTML += `
    <div class="col">
        <div class="card">
            <img src="${iteraction.vinyl}" class="card-img-top w-100 img-vinyl" alt="...">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                    <h5 class="fw-bold card-title">${iteraction.name}</h5>
                    <p class="card-text">${iteraction.artist}</p>
                    <h6 class="fw-bold">$${decimalForm(iteraction.price)}</h6>
                    <button type="button" class="btn boton btn-dark" onclick="addVinyl(${iteraction.price})">Add to bag</button>
                </div>
        </div>
    </div>
    `
}


class Car {
    constructor() {
        this.products = []
    }

    new_vinyl(new_vinyl) {
        this.products.push(new_vinyl)
        return this.products
    }

    total_price() {
        let total = 0
        this.products.forEach(function (data_product) {
            total = parseInt(total) + parseInt(data_product.price)
        });
        return total
    }

}
let shop = new Car()

function addVinyl(precio_product) {
    let vinylprice = { price: precio_product }
    console.log(shop.new_vinyl(vinylprice))
    document.getElementById("totalVinlyShop").innerHTML = shop.total_price()
}
