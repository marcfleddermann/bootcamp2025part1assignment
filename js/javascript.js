function showNav(){
    
    var navList = document.getElementById("nav-list");

    if(navList.classList.contains("hidden")){
        document.getElementById('body').style.overflow ="hidden";
        navList.classList.remove("hidden");
        navList.classList.add("flex");
    } else {
        document.getElementById('body').style.overflow ="auto";
        navList.classList.remove("flex");
        navList.classList.add("hidden");
    }
    

}