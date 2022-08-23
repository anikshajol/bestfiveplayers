
const nameArray = [];





function displaySelectedPlayer(selectPlayer) {

  // console.log(selectPlayer);

  const tableBody = document.getElementById('player-list');
  
    tableBody.innerHTML = '';

  for(let i = 0; i<selectPlayer.length; i++){
  
    // const playerName = nameArray[i];
    let playerName = selectPlayer[i];
    // console.log(playerName);

    const tr = document.createElement('tr');

    tr.innerHTML = ` 
    
    <th>${i+1}</th>
    <td>${playerName}</td>
    
    
    `
  

    tr.style.fontSize = "1.5rem";
    tr.style.fontWeight = "bold"
  
    

    // error handle
    
      if(selectPlayer.length>5 ){
     
       alert("You can't select grater than five")
       
      } 
    
      else{
        tableBody.appendChild(tr);
      }
      
      
  }

}



function addToList(element) {
  // console.log(element.parentNode.parentNode.children[0].innerText);

  const selectedPlayer = element.parentNode.parentNode.children[0].innerText;

element.disabled = true;
  
 nameArray.push(selectedPlayer);



   let addedSelectedPlayer = document.getElementById('list-item').innerText;

   let setSelectedPlayer = nameArray.length;

   if(selectedPlayer>5){
    alert('hi')
    
   
   } 

   displaySelectedPlayer(nameArray)

 
   
}






