var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);

var lists = document.getElementById("lists").getElementsByTagName("ul");
// var scrollTop = document.documentElement.scrollTop;
// console.log(scrollTop);

for(var i =0;i<tabs.length;i++) {
    tabs[i].onclick = showlist;
}

function showlist(){
    for(var i =0;i<tabs.length;i++) {
        if(tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }
        else {
            tabs[i].className = "";
            lists[i].className = "";
        }
    
    }

}

var seckillNav = document.getElementById("seckillNav");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;

    if(scrollTop >=260){
        seckillNav.className = "seckill-nav seckill-navfixed";

    }else {
        seckillNav.className = "eckill-nav";
    }
    console.log(scrollTop);
}