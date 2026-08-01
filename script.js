async function loadReminders(){

const response=await fetch("/reminders");

const reminders=await response.json();

const list=document.getElementById("list");

list.innerHTML="";

reminders.forEach(r=>{

list.innerHTML+=`

<li>

<b>${r.title}</b><br>

${r.date} ${r.time}

<br><br>

<button onclick="deleteReminder(${r.id})">

Delete

</button>

</li>

`;

});

}

async function addReminder(){

const title=document.getElementById("title").value;

const date=document.getElementById("date").value;

const time=document.getElementById("time").value;

await fetch("/reminders",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

title,

date,

time

})

});

document.getElementById("title").value="";

loadReminders();

}

async function deleteReminder(id){

await fetch("/reminders/"+id,{

method:"DELETE"

});

loadReminders();

}

loadReminders();