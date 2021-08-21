



 function eightGB()
 {
   const getExtraMemoryCost =  document.getElementById('extraMemoryCost').innerText=0;
   totalPriceCalculate();
 }

 function sixteenGB()
 {
   
    const getExtraMemoryCost =  document.getElementById('extraMemoryCost').innerText=180;
    totalPriceCalculate();
 }
function ssdTowFiftyGB()
{
   const getExtraStorageCost =  document.getElementById('extraStorageCost').innerText=0;
   totalPriceCalculate();
  
}
function ssdFiveTwelveGB()
{
   const getExtraStorageCost =  document.getElementById('extraStorageCost').innerText=100;
   totalPriceCalculate();
}
function ssdOneGB()
{
   const getExtraStorageCost =  document.getElementById('extraStorageCost').innerText=180;
   totalPriceCalculate();
}

function freeDelivery()
{
   let getDeliveryCost =  document.getElementById('deliveryCharge').innerText=0;
   totalPriceCalculate();
}
function deliveryWithCost()
{
   let getDeliveryCost =  document.getElementById('deliveryCharge').innerText=20;
   totalPriceCalculate();

}


//Total Price Calculated



function totalPriceCalculate(){
   
const getExtraMemoryCost =  document.getElementById('extraMemoryCost').innerText;
const extraMemoryPrice=parseInt(getExtraMemoryCost);
const getExtraStorageCost =  document.getElementById('extraStorageCost').innerText;
const ExtraStorageCost=parseInt(getExtraStorageCost);
const getDeliveryCost =  document.getElementById('deliveryCharge').innerText;
const DeliveryCost=parseInt(getDeliveryCost);
const getTotalPriceValue =document.getElementById('totalPrice').innerText='1299';
let totalPriceValue=parseInt(getTotalPriceValue);
const totalPrice= extraMemoryPrice+ExtraStorageCost+DeliveryCost+totalPriceValue;
document.getElementById('totalPrice').innerText=totalPrice;
document.getElementById('priceWithPromoCode').innerText=totalPrice;

console.log(totalPrice);
}






//Total Price with Promo Code
function promoCode()
{
   const code =  document.getElementById('promoCode').value;
   if(code =='stevekaku')
   {
     let getTotal=document.getElementById('priceWithPromoCode');
     const getTotalPriceValue =document.getElementById('totalPrice').innerText;
     const TotalPrice=parseInt(getTotalPriceValue);
     const priceWithPromoCode=TotalPrice-(TotalPrice*(20/100));
     getTotal.innerText = priceWithPromoCode;
   }
   else{
      let getTotal=document.getElementById('priceWithPromoCode');
     const getTotalPriceValue =document.getElementById('totalPrice').innerText;
     const TotalPrice=parseInt(getTotalPriceValue);
   //   const priceWithPromoCode=TotalPrice-(TotalPrice*(20/100));
     getTotal.innerText = TotalPrice;
   }
}