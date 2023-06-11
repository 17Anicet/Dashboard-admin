
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

//getting new date

const currentDate = document.querySelector('.current-date');
daysTag =document.querySelector('.days');
Icons =document.querySelectorAll('.icons i');

let date = new Date(),
currYear = date.getFullYear,
currMonth = date.getMonth;

const months = ["January","February","March","April","May", "June", "July", "August","September","November","December"];
const renderCalendar = () =>{
    let firstDayOfTheMonth = new Date(currYear,currMonth, 1).getDay(),
    lastDateOfTheMonth = new Date (currYear, currMonth +1, 0).getDate(),
    lastDayOfTheMonth = new Date (currYear, currMonth, lastDateOfTheMonth).getDate(),
    lastDateOfLastMonth = new Date (currYear, currMonth, 0).getDate();

    let liTag ="";

    for (let i = firstDayOfTheMonth; i>0; i--){
        liTag +=  `<li class="inactive">${lastDateOfLastMonth - i + 1}</li> `;
    }

    for (let i = 1; i<=lastDateOfTheMonth; i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                    && currYear === new Date() .getFullYear() ? "active" : "";
        liTag +=  `<li class="${isToday}">${i}</li> `;
    }
    for (let i = lastDayOfTheMonth; i<6; i++){
        liTag +=  `<li class="inactive">${i-lastDateOfLastMonth+1}</li> `;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

Icons.forEach(icon => {
    icon.addEventListener('click',() =>{
        currMonth = icon.id === "prev" ?  currMonth -1 : currMonth + 1;

        if (currMonth < 0 || currMonth> 11){
            date = new Date(currYear,currMonth);
            currYear = date.getFullYear();
            currMonth= date.getMonth();
        }
        else{
            date = new Date();
        }

        renderCalendar();
    })
});