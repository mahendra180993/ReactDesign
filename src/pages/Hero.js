import React from 'react'

const Hero= () => {
    return (
        <div className="bg-white mt-12">
            <div><img className="ml-12 w-1/2" src="assests/dall.png" alt="logo" /></div>
            <div className="flex justify-center gap-5 float-right mr-96 -mt-80">
                <div class="border-r-4 h-16 border-green-600  "></div>
                <div className="font-bold text-2xl">
                    DevOps skills lead to<br /> Competitive Salaries
                </div>
            </div>
            <div style={{color:"#515151"}} className="text-lg font-lg -mt-64  float-right mx-80 p-4">
            On average, jobs with Salesforce skills<br/> pay around INR 36 LPA per year
            </div>

        </div>
    );
};

export default Hero;
