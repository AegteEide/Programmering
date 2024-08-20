let currentPage = 1
let pages //array med alle elementer med class = page

function setup(){
    select('#page' + currentPage).addClass('visible')
    console.log("P5.js er loaded")
    pages = selectAll('.page')
    
}

function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }
    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')

}



function keyPressed(){
    console.log(key)
    shiftPage(key)
}