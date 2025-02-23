function showNav(){
    var navList = document.getElementById("nav-list");

    if(navList.classList.contains("hidden")){

        navList.classList.remove("hidden");
        navList.classList.add("flex");
    } else {
        navList.classList.remove("flex");
        navList.classList.add("hidden");
    }
    

}