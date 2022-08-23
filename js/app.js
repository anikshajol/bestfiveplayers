

// player-expenses

function playerExpense(elementId, element){
    const getPlayerExpenses = document.getElementById(elementId);

    
     

    getPlayerExpenses.innerText = element;

}




// budget section

document.getElementById('calculate').addEventListener('click', function () {


    // perPlayer

    const getPerPlayerCost = document.getElementById('per-player');

    const setPerPlayerCost = parseInt(getPerPlayerCost.value);

    const perPlayerCost = setPerPlayerCost* nameArray.length;



   
    //player expenses



    playerExpense("player-expenses", perPlayerCost)




    if(isNaN(perPlayerCost)){
        alert('input a valid number');
        document.getElementById('player-expenses').innerText= 00
    }

   
   


})





//calculate total cost


function getValueById(inputId){
    const getAnotherCost = document.getElementById(inputId);

    const anotherCost = parseInt(getAnotherCost.value);

    return anotherCost;
}



document.getElementById('calculate-total').addEventListener('click', function () {
   const managerCost = getValueById('manager-cost');
   const coachCost = getValueById('coach-cost');

   const subTotal = managerCost+coachCost;

   const getPlayerExpense = document.getElementById('player-expenses');

   const playerExpense = parseInt(getPlayerExpense.innerText);

 

   const totalCost = subTotal+playerExpense;

   const getTotalExpenseOfMyTeam = document.getElementById('total-expenses');


   if(isNaN(managerCost && coachCost)){
    alert('Please Input Number')
    totalCost = 00
   
   }

   getTotalExpenseOfMyTeam.innerText = totalCost;



})


