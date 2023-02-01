const billinput = document.querySelector('#bill-amount')
//var nextbutton = console.log(billinput.value)
const cashinput = document.querySelector('#cash')
const cashGivenbutton = document.querySelector('#cash-given-button')
const message =  document.querySelector('#errormessage')
const noOFNotes = document.querySelectorAll('.no-of-notes')


const availableNotes = [2000,500,100,20,10,5,1]

cashGivenbutton.addEventListener("click",function validatebillcashamount(){
     hidemessagestyle()
     if(billinput.value > 0 ){
            if(cashinput.value <= billinput.value ){
            showmessage('do you want to wash the plates');
            }else{
               const amountToreturn = cashinput.value - billinput.value;
               calculateCHange(amountToreturn)
            }
     }else{
        
          showmessage("bill amount should be grater than zero")
     }

})


function calculateCHange(amountToreturn){
      for(let i=0; i < availableNotes.length;i++){

          const notes = Math.trunc(amountToreturn/availableNotes[i]) ;
          console.log(availableNotes[i])
          amountToreturn = amountToreturn % availableNotes[i];
          noOFNotes[i].innerText = notes;
      }
     
       

}

function showmessage(msg){
         message.style.display = "block";
         message.innerText = msg;

}


function hidemessagestyle(){
     message.style.display = "none";
    
}