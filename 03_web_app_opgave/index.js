let currentPage = 2

let pages //array med alle elementer med class = page
let menuItems //et array med alle menupunkterne

function setup(){
    
    pages = selectAll('.page')
    menuItems = selectAll('.menuitem')
    
    //menu items skal reagere ved at skifte side
    for(m of menuItems){
        m.mousePressed(function(e)  {
            //e.target er selv HTML div'en id gør at vi kune vil have id'et
            console.log(e.target.id)
            //slice -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            //Kalde shiftPage som skifter side til variablen nr
            shiftPage(nr)
        })
    }
    
    
    shiftPage(currentPage) //shiftpage er funktionen der tager et tal og skifter til en side
}

//shiftPage funktionen
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
    select("#menu" + currentPage).removeClass('active')
    currentPage = num
    
    select("#page" + currentPage).addClass('visible')
    select("#menu" + currentPage).addClass('active')



}



function keyPressed(){
    console.log(key)
    shiftPage(key)
}