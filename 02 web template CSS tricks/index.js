let currentPage = 3
let colors = ['red','green','blue','limegreen','lightcyan','lightgrey','lightblue']

let pages //array med alle elementer med class = page

function setup(){
    select('#page' + currentPage).addClass('visible')
    console.log("P5.js er loaded")
    pages = selectAll('.page')

    //Lav en masse div'er vi kommer ind i page3
    for(c of colors){
        let div = createDiv()
        div.style('background-color', c)
        select('#page3').child(div)
    }

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