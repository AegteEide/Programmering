let calendarContainer
let doorSound 
let dataStructure = [
  {
    day:"1",
    content:"./assets/aliceinchains.jpg",
  },
  {
    day:"2",
    content:"./assets/aliceinchains.jpg",
  },
  {
    day:"3",
    content:"./assets/aliceinchains.jpg",
  },
  {
    day:"4",
    content:"./assets/aliceinchains.jpg",
  },
  {
    day:"5",
    content:"./assets/aliceinchains.jpg",
  },
  {
    day:"6",
    content:"./assets/aliceinchains.jpg",
  },
]

function preload() {
  doorSound = loadSound('./assets/doorSound.mp3')
}

function setup() {
  //HTML containeren
  calendarContainer = select('#calendar')

  let door = new Door(calendarContainer,"12","./assets/aliceinchains.jpg", doorSound)

  for(door of dataStructure){
    new Door(calendarContainer, door.day)
  }
}