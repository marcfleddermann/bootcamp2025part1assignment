function showNav(){
    
    var navList = document.getElementById("nav-list");

    if(navList.classList.contains("hidden")){
        document.getElementById('body').style.overflow ="hidden";
        document.getElementById('slide-track').style.display ="none";
        navList.classList.remove("hidden");
        navList.classList.add("flex");
    } else {
        document.getElementById('body').style.overflow ="auto";
        document.getElementById('slide-track').style.display ="flex";
        navList.classList.remove("flex");
        navList.classList.add("hidden");
    }

}