
//  function replacePrice(id)
//  {
//      let getExtraCost =document.getElementById('id').innerText= '180';
//      const ExtraPrice=parseInt(getExtraCost);
//      console.log(ExtraPrice); 
//  }
 
//  function sixteenGB()
//  { 
//     replacePrice(extraMemoryCost); 
//  }


 function eightGB()
 {
   const getExtraMemoryCost =  document.getElementById('extraMemoryCost').innerText='20'
  const ExtraMemoryPrice=parseInt(getExtraMemoryCost);
  console.log(ExtraMemoryPrice);
  
 }

 function sixteenGB()
 {
    let getExtraMemoryCost =  document.getElementById('extraMemoryCost').innerText='180'
    const ExtraMemoryPrice=parseInt(getExtraMemoryCost);
    console.log(ExtraMemoryPrice);
    let  getTotalCost =  document.getElementById('totalPrice');
    const totalPrice = parseInt(1299+ExtraMemoryPrice);
    const TotalCost =getTotalCost.innerText=totalPrice;
      
 }
function ssdTowFiftyGB()
{
   let getExtraStorageCost =  document.getElementById('extraMemoryCost').innerText='180'
   const ExtraMemoryPrice=parseInt(getExtraMemoryCost);


  
}
function ssdFiveTwelveGB()
{

}
function ssdOneGB()
{

}
// function totalPrice()
// {
//    let  getTotalCost =  document.getElementById('totalPrice');
// const totalPrice = parseInt(1299+ExtraMemoryPrice);
// const TotalCost =getTotalCost.innerText=totalPrice;
//    console.log(TotalCost);
// }