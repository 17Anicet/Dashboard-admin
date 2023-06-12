
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

