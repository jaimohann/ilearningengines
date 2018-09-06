import React from 'react';
import InfoBox from '../../../UI/InfoBox/InfoBox';



const dashboard = () => {
    return ( 
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
     );
}
 
export default dashboard;