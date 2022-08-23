
const nameArray = [];





function displaySelectedPlayer(selectPlayer) {

  // console.log(selectPlayer);

  const tableBody = document.getElementById('player-list');
  
    tableBody.innerHTML = '';

  for(let i = 0; i<selectPlayer.length; i++){
  
  
    let playerName = selectPlayer[i];
    

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
       addToList(this.disabled=false)
       return;
      } 
      
      tableBody.appendChild(tr);
    
    
       
     
      
      
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






