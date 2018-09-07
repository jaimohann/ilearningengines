import React from 'react';
import InfoBox from '../../../UI/InfoBox/InfoBox';
import Box from '../../../UI/Box/Box';
import Aux from '../../../../hoc/Auxi/Auxi'
import {Line as LineChart} from 'react-chartjs'


const dashboard = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Elements of Marketing",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "Fujairah Airport Drills",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      },
      {
        label: "Respiration",
        fillColor: "rgba(221,105,105,0.2)",
        strokeColor: "rgba((221,105,105,1)",
        pointColor: "rgba((221,105,105,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [30, 78, 54, 89, 90, 55, 89]
      }
      
    ]
  };

  const chartOptions = {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,
  
    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",
  
    //Number - Width of the grid lines
    scaleGridLineWidth : 1,
  
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
  
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
  
    //Boolean - Whether the line is curved between points
    bezierCurve : true,
  
    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,
  
    //Boolean - Whether to show a dot for each point
    pointDot : true,
  
    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,
  
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,
  
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,
  
    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,
  
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,
  
    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,
   
    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",
    
  
    //Boolean - Whether to horizontally center the label and point dot inside the grid
    offsetGridLines : false
  };
    return ( 
      
      
      <Aux>
        <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <InfoBox color="bg-aqua" icon={["fas","cogs"]} caption="CPU Traffic" number1="90" number2="%"></InfoBox>
        </div>
       
        <div className="col-md-3 col-sm-6 col-xs-12">
        
        <InfoBox color="bg-red" icon={["fab","facebook-f"]} caption="Likes" number1="41,410"></InfoBox>
        

          
        </div>
       

        
        <div className="clearfix visible-sm-block"></div>

        <div className="col-md-3 col-sm-6 col-xs-12">

                
          <InfoBox color="bg-green" icon={["fas", "shopping-cart"]} caption="Sales" number1="760"></InfoBox>
        


          
        </div>
        
        <div className="col-md-3 col-sm-6 col-xs-12">

                        
        <InfoBox color="bg-yellow" icon={["fas", "users"]} caption="New Members" number1="2,000"></InfoBox>
        

         
        </div>
        
      </div>
      <div className="row">
      <div className="col-md-12">
        
        <Box caption="Curriculum Analysis">

        <div className="row">
                <div className="col-md-8">
                  <p className="text-center">
                    <strong>Top 3 Curriculums: 1 Jan, 2018 - 30 Jul, 2018</strong>
                  </p>

                  <div className="chart">
                   
                    
                    <LineChart data={chartData} options={chartOptions} width="701" height="200"></LineChart>
                  </div>
                  
                </div>
                
                <div className="col-md-4">
                  <p className="text-center">
                    <strong>Goal Completion</strong>
                  </p>

                  <div className="progress-group">
                    <span className="progress-text">Add Products to Cart</span>
                    <span className="progress-number"><b>160</b>/200</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-aqua" style={{width: "80%"}}></div>
                    </div>
                  </div>
                  
                  <div className="progress-group">
                    <span className="progress-text">Complete Purchase</span>
                    <span className="progress-number"><b>310</b>/400</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-red" style={{width: "80%"}}></div>
                    </div>
                  </div>
                  
                  <div className="progress-group">
                    <span className="progress-text">Visit Premium Page</span>
                    <span className="progress-number"><b>480</b>/800</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-green" style={{width: "80%"}}></div>
                    </div>
                  </div>
                  
                  <div className="progress-group">
                    <span className="progress-text">Send Inquiries</span>
                    <span className="progress-number"><b>250</b>/500</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-yellow" style={{width: "80%"}}></div>
                    </div>
                  </div>
                  
                </div>
                
              </div>

              <div><div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                    <h5 className="description-header">$35,210.43</h5>
                    <span className="description-text">TOTAL REVENUE</span>
                  </div>
                  
                </div>
                
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-yellow"><i className="fa fa-caret-left"></i> 0%</span>
                    <h5 className="description-header">$10,390.90</h5>
                    <span className="description-text">TOTAL COST</span>
                  </div>
                  
                </div>
                
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 20%</span>
                    <h5 className="description-header">$24,813.53</h5>
                    <span className="description-text">TOTAL PROFIT</span>
                  </div>
                  
                </div>
                
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block">
                    <span className="description-percentage text-red"><i className="fa fa-caret-down"></i> 18%</span>
                    <h5 className="description-header">1200</h5>
                    <span className="description-text">GOAL COMPLETIONS</span>
                  </div>
                  
                </div>
              </div></div>

        </Box>
        
      </div>
      
    </div>
    </Aux>

     );
}
 
export default dashboard;