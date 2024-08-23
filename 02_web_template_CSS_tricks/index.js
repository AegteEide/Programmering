let currentPage = 1
let menuNumber = 1

let pages //array med alle elementer med class = page
let menuItems //et array med alle menupunkterne
let colors = ['red','green','blue','limegreen','lightcyan','lightgrey','lightblue']

function setup(){
    select('#page' + currentPage).addClass('visible')
    select('#menu' + menuNumber).addClass('active')

    console.log("P5.js er loaded")
    pages = selectAll('.page')
    menuItems = selectAll('.menuitem')

    for(m of menuItems){
        m.mousePressed(function(e)  {
            //e.target er selv HTML div'en id gør at vi kune vil have id'et
            console.log(e.target.id)
            //slice -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            shiftPage(nr)
        })
    }

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

    select("#menu" + menuNumber).removeClass('active')
    menuNumber = num
    select("#menu" + menuNumber).addClass('active')



}



function keyPressed(){
    console.log(key)
    shiftPage(key)
}