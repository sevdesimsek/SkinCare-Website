
const productList=document.querySelector('product-list');

function openNav() {
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px"; 
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; //side navbar açtığımda arka plan opaklaştı
}

function closeNav() {
  document.getElementById("side-menu").style.width = "0"; 
  document.getElementById("main").style.marginLeft= "0"; 
  document.body.style.backgroundColor = "white"; //kapattıktan sonra eski haline döndü 
}


eventListeners();
function eventListeners(){
    window.addEventListener('DOMContentLoaded',()=>{
        loadJSON();
    });

}

//Load Product items content form JSON file

function loadJSON(){
    fetch('products.json')
    .then(response=>response.json())
    .then(data=>{  console.log(data); // konsolda gördük tüm json dosyası datalrını
        let html='';
        data.forEach(product=>{
           
         html+=`
            <div class="product-item">
                            <div class="product-img">
                                <img src="${product.imgSrc}" alt="product image">
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fa-solid fa-cart-plus"></i>Add To Cart
                                </button>
                            </div>
                            <div class="product-content">
                                <h3 class="product-name">${product.name}</h3>
                                <span class="product-category">${product.category}</span>
                                <p class="product-price">${product.price}</p>
                            </div>
                        </div>
         `;
        });
        document.getElementById('product-list').innerHTML=html;

    })
}