
document.addEventListener('DOMContentLoaded',  function(){
    const chart = Highcharts.chart('container',{
        chart:{
            type: 'column'
        },
        title: {
            text: 'Fruit consumption'
        },
        xAxis:{
            categories:['Apples','Bananas','Oranges']
        },
        yAxis:{
            title:{
              text: 'Fruit eaten'  
            }
        },
        series: [{
            
                name:'Jane',
                data:[5,20,40]
        },{
            name:'John',
            data: [25,32,60]
        }]
    });
});