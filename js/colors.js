
document.addEventListener('DOMContentLoaded',function(){
    const chart = Highcharts.chart('container',{
        chart:{
            type: 'column'
        },
        title: {
            text: 'Different colors'
        },
        colors:['#578756','#286886','#0000FF','#FFFF00'],
        series: [{
            
                name:'Data',
                data:[5,10,15,20]
        }]
    });
});