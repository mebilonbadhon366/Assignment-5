
const donateButton=document.getElementById("donate");
donateButton.addEventListener('click',function() {

    
    const donation = parseFloat(document.getElementById("donation").value);
    

const totalDonation = parseFloat(document.getElementById('total-donation').innerText);
// console.log(typeof totalDonation,typeof donation);

// console.log( totalDonation);
const newDonation= totalDonation + donation;
const newDonationElement=document.getElementById('total-donation')
newDonationElement.innerText=newDonation;

const balance= parseFloat(document.getElementById('balance').innerHTML);

const newBalance= balance - donation ;
const newBalanceElement=document.getElementById('balance');
newBalanceElement.innerText=newBalance;






const historyItem = document.createElement("div");
historyItem.className='bg-white p-3 rounded border1-2 border-indigo-500';

historyItem.innerHTML =
`<p>${donation} Taka is donated for famine-2024 at Feni, Bangladesh</p>
<p>${new Date().toString()}</p>

`; 

const historyContainer=document.getElementById("history-list");
historyContainer.insertBefore(historyItem,historyContainer.firstChild);

document.getElementById('history-list').classList.remove('hidden');





});







// history tap functionality

const historyTab=document.getElementById("history-tab");
const donateTab=document.getElementById("donation-tab");
historyTab.addEventListener('click', function(){




historyTab.classList.add("bg-lime-400", "text-black");
historyTab.classList.remove("text-gray-700");
donateTab.classList.remove("bg-lime-400", "text-black");

document.getElementById('donate-form').classList.add('hidden');
// document.getElementById('history-list').classList.remove('hidden');

    

// const historyItem=document.createElement("div");
// historyItem.className='bg-white p-3 rounded border1-2 border-indigo-500';

// historyItem.innerHTML =
// // {/* <p><span>{donation}</span> Taka is Donated for famine-2024 at Feni, Bangladesh</p> */}
//   <p>{new Date().toLocaleDateString()}</p>
// const historyContainer=document.getElementById("history-list");
// historyContainer.insertBefore(historyItem,historyContainer.firstChild);





});

// donate tab functionality
const donationButton=document.getElementById("donation-tab");
const historyButton =document.getElementById("history-tab");
donationButton.addEventListener('click', function(){




donationButton.classList.add("bg-lime-400", "text-black");
// historyTab.classList.remove("text-gray-700");
historyButton.classList.remove("bg-lime-400", "text-black");

document.getElementById("donate-form").classList.remove('hidden');




});

// live validation for input 
// document.getElementById("donation").addEventListener("input",function(){

// const inputValue=parseFloat(document.getElementById("donatio").value)



// })