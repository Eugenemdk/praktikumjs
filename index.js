/*
let elemDivFlex=document.createElement('div')
//elemDivFlex.className="box"
elemDivFlex.style.display="flex"
elemDivFlex.style.justifyContent="space-between"
elemDivFlex.style.flexDirection="row"
elemDivFlex.style.marginTop="10px"
*/
let text_var=document.createTextNode("Memory Game,Scroll the toggling below and choose number of cards:")
document.body.append(text_var)
let count_var=document.createElement("p")
count_var.id='values'
document.body.append(count_var)

let inputTiles=document.createElement("input")
inputTiles.id="toggleTiles"
inputTiles.type="range"
inputTiles.min=5
inputTiles.max=50
inputTiles.step=5
inputTiles.value=5
inputTiles.style.marginLeft="50%"
inputTiles.style.marginTop="5px"
document.body.append(inputTiles)

let count_value=document.querySelector("input")
let log = document.getElementById('values');
count_value.addEventListener('input', updateValue);

function updateValue(e) {
    log.textContent = e.target.value;
  }function updateValue(e) {
  log.textContent = e.target.value;
}


const tiles=[];
let elemDivFlexArr=[]
for(let s=0;s<3;s++){
    elemDivFlexArr[s]=document.createElement('div')
    //elemDivFlex.className="box"
    elemDivFlexArr[s].style.display="flex"
    elemDivFlexArr[s].style.justifyContent="space-between"
    elemDivFlexArr[s].style.flexDirection="row"
    elemDivFlexArr[s].style.marginTop="10px"
    for(let i=0;i<10;i++){
        tiles[i]=document.createElement('div')
        tiles[i].style.width="50px";
        tiles[i].style.height="50px";
        tiles[i].style.backgroundColor="#555"
        elemDivFlexArr[s].append(tiles[i]);
       }
       document.body.append(elemDivFlexArr[s])
}



