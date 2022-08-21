

// player-expenses

function playerExpense(elementId, element){
    const getPlayerExpenses = document.getElementById(elementId);

    
     

    getPlayerExpenses.innerText = element;

}




// budget section

document.getElementById('calculate').addEventListener('click', function () {


    // perPlayer

    const getPerPlayerCost = document.getElementById('per-player');

    const perPlayerCost = parseInt(getPerPlayerCost.value);



   
    //player expenses



    playerExpense("player-expenses", perPlayerCost)

   
   


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



   getTotalExpenseOfMyTeam.innerText = totalCost;

})


