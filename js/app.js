
document.addEventListener('DOMContentLoaded',  function(){
    const chart = Highcharts.chart('bloc-charts',{
        chart:{
            type: 'column'
        },
        title: {
            text: 'Attendance',
        },
        xAxis:{
            categories:['Mon','Tue','Wed','Thur','Fri','Sat','Sun']
        },
        yAxis:{
            title:{
              text: 'Hours'  
            }
        },
        series: [{
            name:'Synopis',
            data:[2.0,0.5,0.3,1.5,0.3,0.6,1.0],
            color: '#000620',
        },{
            name:'Total time',
            data: [0.5,1.5,1.0,0.4,1.0,2.0,0.3],
            color: '#58585a'
        }]
    });
});


const date = new Date();
date.setDate(1);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
const monthDays = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const firstDayIndex = date.getDay();
const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
const nextDays = 2 - lastDayIndex -1;


document.querySelector(".date h4").innerHTML =  months[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toDateString();

let days = "";

for(let x=firstDayIndex; x > 0; x--){
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
}

for (let i=1; i<=lastDay; i++){
    if (i === new Date(),getDate)
    days += `<div>${i}</div>`;
    
}

for (let j=1; j<=nextDays;j++){
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
}


