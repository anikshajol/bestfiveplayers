
const nameArray = [];





function displaySelectedPlayer(selectPlayer) {

  // console.log(selectPlayer);

  const playerList = document.getElementById('player-list');
  
  playerList.innerHTML = '';

  for(let i = 0; i<selectPlayer.length; i++){
  
  
    let playerName = selectPlayer[i];
    

    const list = document.createElement('li');

    list.innerText=playerName;
  

    list.style.fontSize = "1.5rem";
    list.style.fontWeight = "bold";
    list.style.listStyleType = 'number'
    list.style.color = 'white'
    list.style.paddingRight = '2rem'
    
    // error handle
    
      if(selectPlayer.length>5 ){
     
       alert("You can't select grater than five")
      
       return
      } 

      playerList.appendChild(list);
    
    
       
     
      
      
  }

}



function addToList(element) {
  // console.log(element.parentNode.parentNode.children[0].innerText);

  const selectedPlayer = element.parentNode.parentNode.children[0].innerText;

element.disabled = true;
  
 nameArray.push(selectedPlayer);

   let addedSelectedPlayer = document.getElementById('list-item').innerText;

   let setSelectedPlayer = nameArray.length;

  
 displaySelectedPlayer(nameArray)

 
   
}






