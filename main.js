const $= document.querySelector.bind(document);
const $$= document.querySelectorAll.bind(document);
let tabItems = $$(".tab-item")
let tabPanes =$$(".tab-pane")
const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";
let id =0;
let n = tabItems.length;
let changeColor = function(){
    tabItems[id].classList.remove("active")
    tabItems[(id+1)%n].classList.add("active")
    tabPanes[id].classList.remove("active")
    tabPanes[(id+1)%n].classList.add("active")
    line.style.left = tabItems[(id+1)%n].offsetLeft + "px"
    line.style.width = tabItems[(id+1)%n].offsetWidth + "px" 
    id++;
    if (id==n) id=0;  
}

setInterval(changeColor,3000)


tabItems.forEach((tabItem,index)=>{    
    tabItem.addEventListener("click",()=>{
        id=index;
        $(".tab-item.active").classList.remove("active")
        tabItem.classList.add("active")
        $(".tab-pane.active").classList.remove("active")
        tabPanes[index].classList.add("active")
        line.style.left = tabItem.offsetLeft + "px"
        line.style.width = tabItem.offsetWidth + "px"
    })
})

