let car=document.getElementById("cars")
let sum=document.getElementById("sum")
let strat=document.getElementById("strat")
let new_el=document.getElementById("new_el")
let masage=document.getElementById("masage")
// 
let r_sum=0
let new_carnumber=[]
//


strat.addEventListener("click",function(){
    let num1=randomcar()
    let num2=randomcar()
    new_carnumber=[num1,num2 ]
    r_sum=num1+num2

   
    
    car.innerHTML="cars: "

    for (let index = 0; index < new_carnumber.length; index++) {
        car.innerHTML+=new_carnumber[index]+" "
        
    }

    
    sum.innerText=`sum: ${r_sum}`
    if(r_sum <= 20){
        masage.innerText="Draw a new card?"
    }else if(r_sum === 21){
        masage.innerText="You've got Blackjack!"

    }
    else {
        masage.innerText = "You're out of the game!"
    }
  
})

// creating random numbers
function randomcar(){
    let randomcarnumber=Math.floor(Math.random()*14)
    if(randomcarnumber >10){
        return 10

    }
    else if(randomcarnumber ===1){
        return 11
    }
    else{
        return randomcarnumber
    }
}

// creating new car
