  let mobilesdiv = document.querySelector(".mobiles");
    let watchesdiv = document.querySelector(".watches");
    let cartitemsel=document.querySelector(".cartitems");
    let subtotalel=document.querySelector(".subtotal");
    let itemsincartel=document.querySelector(".dropdown sup");
  let prods = [
      

    { id: 1, image: "images/product-item1.jpg",
         name: "Iphone10",
          price: 980,
           stock: 10,
            qty: 0 },
    { id: 2,
         image: "images/product-item2.jpg",
          name: "Iphone11",
           price: 1100,
            stock: 5,
             qty: 0 },
    { id: 3,
         image: "images/product-item3.jpg",
          name: "Iphone 8",
           price: 780,
            stock: 8,
             qty: 0 },
    { id: 4, 
        image:"images/product-item4.jpg",
         name: "Iphone 13",
          price: 1500,
           stock: 12, 
           qty: 0 },
    { id: 5,
         image: "images/product-item5.jpg",
          name: "Iphone 12",
           price: 1300,
            stock: 11, 
            qty: 0 },
    { id: 6, 
        image: "images/product-item6.jpg",
         name: "PINK WATCH", 
         price: 870,
          stock: 12,
           qty: 0 },
    { id: 7,
         image: "images/product-item7.jpg",
          name: "HEAVY WATCH",
           price: 680,
            stock: 8,
             qty: 0 },
    { id: 8, image: "images/product-item8.jpg",
         name: "SPOTTED WATCH",
          price: 750,
           stock: 8,
            qty: 0 },
        { id: 9, image: "images/product-item9.jpg",
         name: "BLACK WATCH",
          price: 650,
           stock: 8,
            qty: 0 },

            { id: 10, image: "images/product-item10.jpg",
         name: "BLACK WATCH",
          price: 750,
           stock: 8,
            qty: 0 }

        ]


function displaymobiles()
{
    prods.slice(0,5).map((p) =>{
           mobilesdiv.innerHTML += `
  <div class="col">
    <div class="card h-100 border-0 ms-4">
      <div class="position-relative">
        <img src=${p.image} class="card-img-top" alt="...">
        <div class="position-absolute bottom-0 start-50 translate-middle-x">
          <button type="button" class="btn btn-dark btn1" onclick="addtocart(${p.id})">
            ADD TO CART
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                 fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
              <path d="..."/>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-body d-flex justify-content-between">
        <h5 class="card-title">${p.name}</h5>
        <h5 class="card-title text-info">$${p.price}</h5>
      </div>
    </div>
  </div>`;

        
        })
}
displaymobiles()




function displaywatches()
{
    prods.slice(5,10).map((p) =>{
            watchesdiv.innerHTML += `
        <div class="col">
                <div class="card h-100 border-0 ms-4">
                        <div class="position-relative">
            <img src=${p.image} class="card-img-top" alt="...">
               <div class="position-absolute bottom-0 start-50 translate-middle-x">
                    <button type="button" class="btn btn-dark btn1" onclick="addtocart(${p.id})">ADD TO CART<svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                   fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                <path
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                  </svg></button>
                      </div>
                   </div>
              <div class="card-body d-flex justify-content-between">
                     <h5 class="card-title">${p.name}</h5>
                      <h5 class="card-title text-info">$${p.price}</h5>
                      </div>
                           </div>
                     </div>
        `
        })
}
displaywatches()

let cart=JSON.parse(localStorage.getItem("CART")) || [];

updatecart();
function addtocart(id)
{
    // check if product already exist
    if(cart.some((item)=>item.id===id))
    {
        changeqty("plus",id);
    }
    else
    { 
    let item=prods.find((prod)=>prod.id===id) ;      
    cart.push({
        ...item,
        qty:1
    });
    
    }
   updatecart(); 
}
function updatecart()
{
    rendercartitems();
    rendersubtotal();
    localStorage.setItem("CART",JSON.stringify(cart));
}
function rendercartitems()
{
    cart.forEach((item)=>{
cartitemsel.innerHTML+=`
                  <table class="table w-100">
                  <tbody>
                    <tr><td><img src=${item.image} height=50 width=50></td>
                    <td><p style="font-size:13px;">${item.name}</p></td>
                    <td>$${item.price}</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.id})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                  </svg> ${item.qty} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.id})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></td>
                    <td><i class="fa-solid fa-trash text-primary" onclick="removeitem(${item.id})"></i></td>
                  </tr></tbody></table>`

    })
}
function changeqty(action,id)
{
    cart=cart.map((item)=>{
        let qty=item.qty;
        if(item.id===id)
        {
            if(action==="minus" && qty>1)
            {
                qty--;
            }
            else if(action==="plus" && qty<item.stock)
            {
                qty++;
            }
        }
        return {
            ...item,
            qty,
        };
    })
    updatecart();
}
function rendersubtotal()
{
    let totalprice=0,totalitems=0;
    cart.forEach((item)=>{
        totalprice+=item.price*item.qty;
        totalitems+=item.qty;
    });
   subtotalel.innerHTML = `Subtotal (${totalitems} items): $${totalprice.toFixed(2)}`;

    itemsincartel.innerHTML= totalitems;            
}
function removeitem(id)
{
    cart=cart.filter((item)=>item.id!==id);
    updatecart();
}