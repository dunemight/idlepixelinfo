
const body = document.querySelector("body")
    const menu = addEle({dad:body,setClass:"menu"})
    const info = addEle({dad:body,setClass:"info"})
    const global = addEle({dad:body,setID:"info",width:"100%",height:"100%",margin:"40px 0 0 100px"})
        const right = addEle({dad:global,setID:"right"})

const lastUp = "(Last up 2024/06/07 19:40) *new expensive item*"
const infoTitle = "Idle Planet Miner Infos " +lastUp

const togSel = "linear-gradient(to bottom left,rgba(90,185,47,0.5) 70%,rgba(169,169,169,1))"
const togNot = "linear-gradient(to bottom left,rgba(0,0,0,0) 60%,rgba(169,169,169,1))"

info.innerHTML = infoTitle

let projectPop = undefined
let gameLook = spanText("lime","New")
let toggleOldNewText = "Toggle the game Graphics here,<br>(Planets / Items)<br> now set to ⇒ "

const menuButtons = [
    {label:"Events",clickFunction:clickEvent},
    {label:"Look",clickFunction:clickLook},
    {label:"Faq",clickFunction:clickFaqs},
    {label:"Planets",clickFunction:clickPlanets},
    {label:"Items",clickFunction:clickItems},
    {label:"Projects",clickFunction:clickProjects},
    {label:"Station",clickFunction:clickStation},
    {label:"Rooms",clickFunction:clickRooms},
    {label:"Process",clickFunction:clickProcess},
]

function addLeftButtons(){menuButtons.forEach(btn=>{
    let myc = "" ; if(btn.label==="Events"){myc="orangered"}
addEle({dad:menu,setClass:"menuBtn",text:btn.label,backG:togNot,textC:myc,setFunc:btn.clickFunction}) }) }

addLeftButtons()

window.onload = firstContact()

console.log(lastUp)

let loopfork = 0

/*
let sst = 1
let bbt = 2938
stationCells.forEach(cel=>{
    if(cel.label.includes("credits")){
        console.log(cel)        
        sst += cel.totalBonus
    }
})
console.log(sst)
console.log(sst*bbt)
*/
