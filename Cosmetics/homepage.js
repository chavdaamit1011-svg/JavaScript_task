let slider = {
  images: document.querySelectorAll(".slider img"),
  videos: document.querySelectorAll(".slider video"),
  index: 0,

  showimg() {

    this.images.forEach(img => img.classList.remove("active"));
    this.videos.forEach(v => v.classList.remove("active"));

    let totalImages = this.images.length;

    if (this.index < totalImages) {
      this.images[this.index].classList.add("active");
    } else {
      let vIndex = this.index - totalImages;
      this.videos[vIndex].classList.add("active");
    }

    document.querySelectorAll(".dots span").forEach(dot => dot.classList.remove("active-dot"));
    document.querySelectorAll(".dots span")[this.index].classList.add("active-dot");
  },

  next() {
    let total = this.images.length + this.videos.length;
    this.index = (this.index + 1) % total;
    this.showimg();
  },

  prev() {
    let total = this.images.length + this.videos.length;
    this.index = (this.index - 1 + total) % total;
    this.showimg();
  }
};

document.querySelector(".btn-prev").addEventListener("click", () => slider.prev());
document.querySelector(".btn-next").addEventListener("click", () => slider.next());

setInterval(() => slider.next(), 7000);

// Dots Create
const dotContainer = document.querySelector(".dots");
let totalSlides = slider.images.length + slider.videos.length;

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    slider.index = i;
    slider.showimg();
  });
  dotContainer.appendChild(dot);
}

document.querySelectorAll(".dots span")[0].classList.add("active-dot");

slider.showimg();


 const allProducts = [
  // NEW LAUNCHES=====================================
  {
    name: "Gloss Stick",
    price: "₹499",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Glide-Peptide-Plumping-Gloss-Stick-2_cfc1e2bf.jpg?v=1762350948&width=500",
    colors: ["red", "pink", "brown"],
    rating: 4.5,
    category: "new",
    type: "Lipstick"
  },
  {
    name: "Lip Gloss",
    price: "₹599",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Partner-In-Shine-Transferproof-Lip-Gloss-2_13cdf470.jpg?v=1743681799&width=500",
    colors: ["#f5d6a1", "#e6b788", "#c48a55"],
    rating: 4.2,
    category: "new",
    type: "Lip Gloss"

  },
  {
    name: "Dewy Foundation",
    price: "₹799",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Ace-of-Face-Dewy-Foundation-KIT-2.jpg?v=1763467788&width=500",
    colors: ["black"],
    rating: 4.7,
    category: "new",
    type: "Foundation"
  },
  {
    name: "Sunscreen Gel",
    price: "₹399",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Tan-Ban-4-Niacinamide-Sunscreen-Light-Gel-2_150d1529.jpg?v=1746618856&width=500",
    colors: ["#f8e7c2", "#e9c79d"],
    rating: 4.4,
    category: "new",
    type: "Moisturizer"
  },
  {
    name: "Glow Blush",
    price: "₹499",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Cloud-Nine-Niacinamide-Glow-Blush-2_50605fa1.jpg?v=1743684097&width=500",
    colors: ["#f8e7c2", "#e9c79d"],
    rating: 5.0,
    category: "new",
    type: "Highlighter"
  },
  {
    name: "Serum Lipstick",
    price: "₹699",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Glide-Peptide-Serum-Lipstick-2_a3947462.jpg?v=1758803460&width=500",
    colors: ["#f8e7c2", "#e9c79d"],
    rating: 4.9,
    category: "new",
    type: "Lipstick "
  },
  {
    name: "HD Foundation",
    price: "₹899",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Mettle-HD-Perfecting-Foundation-2_aff229b5.jpg?v=1755518895&width=500",
    colors: ["#f8e7c2", "#e9c79d"],
    rating: 4.1,
    category: "new",
    type: "Foundation"
  },
  {
    name: "Lip Oil Kit",
    price: "₹549",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/SUGAR-Drop-A-Tint-Lip-Oil-Kit-2_78cca6dd.jpg?v=1763466026&width=500",
    colors: ["#f8e7c2", "#e9c79d"],
    rating: 4.4,
    category: "new",
    type: "Serum"
  },
  {
    name: "Eye Intense Kajal",
    price: "₹249",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Kohl-Of-Honour-Intense-Kajal-2_fb0b955d.jpg?v=1750675074&width=500",
    colors: ["#f8e7c2", "#e9c79d"],
    rating: 4.4,
    category: "new",
    type: "Kajal"
  },
  {
    name: "Chrome EyeShadow",
    price: "₹349",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/SUGAR-Play-High-Key-Chrome-Eyeshadow-2.jpg?v=1751378403&width=500",
    colors: ["#f8e7c2", "#e9c79d"],
    rating: 4.4,
    category: "new",
    type: "Mascara"
  },


  // BEST SELLER=========================
  {
    name: "Ultrastay Transferproof Lipstick Set",
    price: "₹499",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Set-of-3-Ultrastay-Transferproof-Lipstick-2_98d4ff65.jpg?v=1762427216&width=500",
    colors: ["#e6b788", "#b35a4d"],
    rating: 4.8,
    category: "best",
    type: "Lipstick"
  },
  {
    name: "Mattifying Compact Powder",
    price: "₹599",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Dream-Cover-SPF15-Mattifying-Compact-Powder-2.jpg?v=1758537957&width=500",
    colors: ["pink", "red"],
    rating: 4.7,
    category: "best",
    type: "Highlighter"

  },
  {
    name: "Crayon Lipstick Kit",
    price: "₹799",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Matte-As-Hell-Crayon-Lipstick-Kit-2.jpg?v=1763467826&width=500",
    colors: ["#f2d7b7"],
    rating: 4.6,
    category: "best",
    type: "Lipstick"
  },
  {
    name: "Translucent Face Powder Kit",
    price: "₹399",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/All-Set-To-Go-Translucent-Face-Powder-Kit-2.jpg?v=1763465387&width=500",
    colors: ["#eee"],
    rating: 4.4,
    category: "best",
    type: "Highlighter"
  },
  {
    name: "Anniversary Lipstick Compact",
    price: "₹449",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Matte-As-Hell-Crayon-Lipstick-Anniversary-Edition-Dream-Cover-SPF15-Mattifying-Compact-Powder.jpg?v=1758544011&width=500",
    colors: ["#f8e7c2", "#e9c79d"],
    rating: 5.0,
    category: "best",
    type: "Lipstick"
  },
  {
    name: "Pore Minimizing Primer",
    price: "₹349",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Base-Of-Glory-Pore-Minimizing-Primer-2_d0d0937d.jpg?v=1758797156&width=500",
    colors: ["#ffe1d4"],
    rating: 4.3,
    category: "best",
    type: "Serum"
  },
  {
    name: "Face Palette Gift Kit",
    price: "₹999",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Contour-De-Force-Face-Palette-Gift-2.jpg?v=1763466217&width=500",
    colors: ["#f8e7c2"],
    rating: 4.9,
    category: "best",
    type: "giftset"
  },
  {
    name: "Mini Matte Lip Kit",
    price: "₹599",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Matte-Attack-Transferproof-Lipstick-2.jpg?v=1747219048&width=500",
    colors: ["#e6b788", "#d08e62"],
    rating: 4.5,
    category: "best",
    type: "Lipstick"
  },
  {
    name: "Nail Lacquer Classic",
    price: "₹199",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Tip-Tac-Toe-Nail-Lacquer-Classic-old-2.jpg?v=1763638770&width=500",
    colors: ["#e6b788", "#d08e62"],
    rating: 4.5,
    category: "best",
    type: "Nail Polish"
  },
  {
    name: "Nail Lacquer Matte",
    price: "₹399",
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Tip-Tac-Toe-Nail-Lacquer-Matte-Kit-2.jpg?v=1763638358&width=600",
    colors: ["#e6b788", "#d08e62"],
    rating: 4.5,
    category: "best",
    type: "Nail Polish"
  }
];
// ========================================================================================================
function Product_data() {
  let product_data = JSON.parse(localStorage.getItem("All_product")) || []
  product_data.push(allProducts)
  localStorage.setItem("All_product", JSON.stringify(allProducts))
}
Product_data()


// ============================================================================================
function showproduct(category, containerSelector, nextBtn, prevBtn) {

  const container = document.querySelector(containerSelector);
  const products = allProducts.filter(p => p.category === category);


  products.forEach((p, index) => {
    let colorsHTML = p.colors
      .map(c => `<span style="background:${c}"></span>`)
      .join("");

    container.innerHTML += `
        <div class="product-card" data-index="${index}" data-category="${p.category}" style="position:relative;">
        <button class="wishlist-btn"
            data-name="${p.name}"
            data-price="${p.price}"
            data-img="${p.img}">
            <i class="bi bi-heart"></i>
        </button>


            <img src="${p.img}">
            <h5>${p.name}</h5>
            <div class="rating">⭐⭐⭐⭐☆ (${p.rating})</div>
            <div class="colors">${colorsHTML}</div>
            <div class="price">${p.price}</div>     

            <button class="add-btn home-add-btn"
            data-index="${index}"
            data-category="${p.category}"
  data-name="${p.name}"
  data-price="${p.price}"
  data-img="${p.img}">
  Add to Cart
</button>


        </div>
        `;
  });


  // ==========================================ProductPage==================================

  document.addEventListener("click", function (e) {

   
    if (e.target.classList.contains("home-add-btn")) {
      return;
    }

    const card = e.target.closest(".product-card");

    if (card) {
      let index = card.dataset.index;
      let category = card.dataset.category;

      let filtered = allProducts.filter(p => p.category === category);

      localStorage.setItem("selectedProduct", JSON.stringify(filtered[index]));

      window.location.href = "ProductPage.html";
    }
  });

  // ======================================================================================================


  const next = document.querySelector(nextBtn);
  const prev = document.querySelector(prevBtn);
  let cardWidth = document.querySelector(".product-card").offsetWidth + 25;

  next.addEventListener("click", () => {
    container.scrollBy({ left: cardWidth * 4, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    container.scrollBy({ left: -cardWidth * 4, behavior: "smooth" });
  });
}



showproduct("new", ".product-container", ".product-next", ".product-prev");
showproduct("best", ".bs-container", ".bs-next", ".bs-prev");



setTimeout(() => {

  // ================= COLOR SELECT ==========================================================================
  document.querySelectorAll(".product-card").forEach(card => {
    let dots = card.querySelectorAll(".colors span");
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        dots.forEach(d => d.classList.remove("active-color"));
        dot.classList.add("active-color");
      });
    });
  });

  // ================= ADD BUTTON ===================================================================
  // CART ARRAY
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // UPDATE NAVBAR COUNT
  function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
  }
  updateCartCount();


  // EVENT DELEGATION (BEST — sab pages ma chale)
  document.addEventListener("click", function (e) {

    if (e.target.classList.contains("add-btn")) {

     
      if (!localStorage.getItem("isLoggedIn")) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
      }
     

      let btn = e.target;

      let product = {
        name: btn.dataset.name,
        price: btn.dataset.price,
        img: btn.dataset.img
      };

      let exist = cart.find(p => p.name === product.name);

      if (exist) {
        cart = cart.filter(p => p.name !== product.name);

        btn.classList.remove("added");
        btn.innerHTML = "Add to Cart";
        btn.style.background = "#000";
        btn.style.boxShadow = "none";
        btn.style.transform = "scale(1)";
      }
      else {
        cart.push(product);

        btn.classList.add("added");
        btn.innerHTML = "✔ Added";
        btn.style.background = "#28a745";
        btn.style.boxShadow = "0 3px 10px rgba(40,167,69,0.4)";
        btn.style.transform = "scale(1.05)";

        setTimeout(() => {
          btn.style.transform = "scale(1)";
        }, 200);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
    }

  });



}, 200);





let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateWishlistCount() {
  let c = document.querySelector("#wishlist-count");
  if (c) c.innerText = wishlist.length;
}
updateWishlistCount();


// ================= WISHLIST BUTTON WORKING =====================
function enableWishlistButtons() {
  document.querySelectorAll(".wishlist-btn").forEach(btn => {

   
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();  
    });

   
    let product = {
      name: btn.dataset.name,
      price: btn.dataset.price,
      img: btn.dataset.img,
    };

   
    if (wishlist.some(w => w.name === product.name)) {
      btn.innerHTML = `<i class="bi bi-heart-fill text-danger"></i>`;
    }

   
    btn.addEventListener("click", () => {

      
      if (!localStorage.getItem("isLoggedIn")) {

        
        alert("Please login to use wishlist.");

        
        window.location.href = "login.html";
        return;
      }

      let exists = wishlist.some(w => w.name === product.name);

      if (exists) {
        wishlist = wishlist.filter(w => w.name !== product.name);
        btn.innerHTML = `<i class="bi bi-heart"></i>`;
      } else {
        wishlist.push(product);
        btn.innerHTML = `<i class="bi bi-heart-fill text-danger"></i>`;
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      updateWishlistCount();
    });
  });
}


// Enable after DOM load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(enableWishlistButtons, 300);
});




// ==========================================================================================










