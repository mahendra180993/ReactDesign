import React from 'react'

const Location = () => {
    return (
        <>
        <div className="bg-green-50 h-screen mt-20">
            <div>
                <p style={{color:"#434343"}} className="text-4xl font-bold flex justify-center p-10">Locations</p>
                <p className="text-lg ml-96">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam</p>
            </div>
            <div className="flex flex-row">
                <div style={{height:300,width:500}} className="bg-white rounded-lg ml-36 mt-16">
                    <img className="h-1/2 " src="assests/hyd.png" alt="logo"/>
                    <p style={{color:"#434343"}} className="sm:text-xl font-semibold mt-4 sm:text-center">Gachibowli-Hyderabad</p>
                    <p style={{color:"#9D9D9D"}} className="sm:text-center">2nd floor, Khajaguda Main Road next to Andhra Bank, Khajaguda<br/>
                     - Nanakramguda Rd, near DPS, Gachibowli, Hyderabad,<br/>
                      Telangana 500008</p>
                </div>
                <div style={{height:300,width:500}} className="bg-white rounded-lg ml-8 mt-16">
                    <img className="h-1/2 " src="assests/hyd.png" alt="logo"/>
                    <p style={{color:"#434343"}} className="text-xl font-semibold mt-4 text-center">USA</p>
                    <p style={{color:"#9D9D9D"}} className="text-center">#23664, Richland Grove Dr, Ashburn, VA 20148</p>
                    
                </div>    
            </div> 
        </div>
        <div className=" bg-gray-50">
            <div className="p-2">
                <img  className="sm:ml-52" src="assests/arrow.png" alt="logo"/>
                <img className="sm:ml-72 sm:-mt-80" src="assests/hand.png" alt="logo"/>
            </div>
        </div>
        </>
    );
};

export default Location;
