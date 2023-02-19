var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

console.log(tabLinks);
console.log(tabContents);

function openTab(tabName, event){
    for(link of tabLinks){
        link.classList.remove("active-link");
        console.log(link);
    }
    //console.log(tabName);
    for(Content of tabContents){
        Content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

var sideMenu = document.getElementById('sideMenu');

function openMenu(){
    sideMenu.style.right = '0';
}

function closeMenu(){
    sideMenu.style.right = '-10rem';
}

    // Contact form


  