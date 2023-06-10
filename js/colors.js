
document.addEventListener('DOMContentLoaded',function(){
    const chart = Highcharts.chart('bloc-charts',{
        chart:{
            type: 'column'
        },
        title: {
            text: 'Different colors'
        },
        colors:['#578756','#000620'],
        series: [{
            
                name:'Data',
                data:[5,10,15,20]
        }]
    });
});