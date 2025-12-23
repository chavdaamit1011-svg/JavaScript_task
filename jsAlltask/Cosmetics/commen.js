
//    LOAD NAVBAR=======================================================

fetch("header.html")
    .then(response => response.text())
    .then(data => {
        const navbar = document.getElementById("sugar-navbar");
        if (navbar) {
            navbar.innerHTML = data;
        }

        setupLoginUI();

       
        const searchBtn = document.getElementById("searchBtn");
        if (searchBtn) {
            searchBtn.addEventListener("click", searchProduct);
        }

       
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function (e) {
                const itemName = e.target.innerText;
                window.location.href =
                    `filter.html?subcategory=${encodeURIComponent(itemName)}`;
            });
        });
    });


    // LOAD FOOTER===========================================================

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        const footer = document.getElementById("sugar-footer");
        if (footer) {
            footer.innerHTML = data;
        }
    });


//    SEARCH FUNCTION===========================================================

function searchProduct() {
    let query = document.getElementById("searchInput")?.value.trim().toLowerCase();
    if (!query) return;

    let results = allProducts.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );

    localStorage.setItem("searchResults", JSON.stringify(results));
    window.location.href = "search.html";
}


// LOGIN CHECK=======================================================

function checkLogin() {
    return localStorage.getItem("isLoggedIn") === "true";
}


// LOGIN UI SETUP=====================================================

function setupLoginUI() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let user = localStorage.getItem("loggedUser");

    let loginLink = document.getElementById("loginLink");
    let logoutBtn = document.getElementById("logoutBtn");
    let userName = document.getElementById("userName");

    if (!loginLink || !logoutBtn) return;

    if (isLoggedIn === "true") {
        loginLink.style.display = "none";
        logoutBtn.style.display = "inline-block";

        let allUsers = JSON.parse(localStorage.getItem("users")) || [];
        let found = allUsers.find(u => u.email === user);
        userName.innerText = found ? found.name : "";
    }
    else {
        loginLink.style.display = "inline-block";
        logoutBtn.style.display = "none";
        userName.innerText = "";
    }
}



//    LOGOUT======================================

function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("wishlist");
    localStorage.removeItem("cart");

    alert("Logged Out Successfully!");

    setupLoginUI();

    window.location.href = "homepage.html";
}
