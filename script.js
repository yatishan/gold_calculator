let calculateBtn=document.getElementById('calculateBtn');
calculateBtn.addEventListener('click',function(){
    let goldWeightValue=document.getElementById('gold-weight').value;
    let salePriceValue=document.getElementById('sale').value;
    let currentPriceValue=document.getElementById('current-price').value;
    if(goldWeightValue=="" || salePriceValue=="" || currentPriceValue==""){
        alert("please enter valid numbers in all field")
    }else{
        let goldWeightPae=document.getElementById('gold-weight-pae');
        let goldPrice=document.getElementById("gold-price");
        let handPrice=document.getElementById("hand-price");
        goldWeightPae.textContent=(eval(goldWeightValue/1.0205)).toFixed(2);
        goldPrice.textContent=eval((goldWeightValue/1.0205)/16*currentPriceValue).toFixed(2);
    
        handPrice.textContent=(Number(salePriceValue)-Number(goldPrice.textContent)).toFixed(2);
    }
   
})