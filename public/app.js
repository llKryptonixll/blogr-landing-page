// navbar connect button logic
const connectButton = document.getElementById("connect-button");
connectButton.addEventListener("click", () => {
    rotateArrow("arrow");

    // open/close connect list
    const connectList = document.getElementById("connect-list");
    connectList.classList.toggle("hidden");
});


// sidenavigation logic
const openSidebar = document.getElementById("open-sidebar");
const closeSidebar = document.getElementById("close-sidebar");
const sidebar = document.getElementById("sidebar");

openSidebar.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
    openSidebar.classList.add("hidden");
    closeSidebar.classList.remove("hidden")
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("hidden");
    openSidebar.classList.remove("hidden");
    closeSidebar.classList.add("hidden");
});

const connectButton_Mobile = document.getElementById("connect-btn-mobile");
connectButton_Mobile.addEventListener("click", () => {
    rotateArrow("arrow-mobile");

    // this makes the navbar smaller if the connect list is shown
    const mobileNav = document.getElementById("mobile-nav");
    if(mobileNav.classList.contains("grid-rows-2")){
        mobileNav.classList.toggle("grid-rows-3");
        mobileNav.classList.remove("grid-rows-2");
    }
    else{
        mobileNav.classList.toggle("grid-rows-2");
        mobileNav.classList.remove("grid-rows-3"); 
    }

    const connectList_Mobile = document.getElementById("connect-list-mobile");
    connectList_Mobile.classList.toggle("hidden");

});

function rotateArrow(arrowDesktop){
    // rotate arrow
    const arrow = document.getElementById(arrowDesktop);
    arrow.classList.toggle("rotate-180");
}