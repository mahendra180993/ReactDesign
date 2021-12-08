import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="flex bg-white h-18 mt-5">
                <div>
                    <img className="mx-28 h-16" src="assests/dl.png" alt="logo" />
                </div>
                <div className="flex  gap-14 items-center mx-44">
                    <div className="flex">
                        Courses<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div className="flex">
                        Programs<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div>
                        Projects
                    </div>
                    <div className="flex">
                        careerSupport
                    </div>
                    <div>
                        signin
                    </div>
                    <div>
                        <button className=" bg-green-500 w-40 rounded-full py-3 px-6 text-white float-left">GetSkilled</button>
                    </div>
                </div>
            </div>
            <div>
                <img src="assests/main.png" alt="logo" />
                <div className="-mt-96 ">
                    <p style={{ color: "#0D3900" }} className="text-4xl font-bold ">Better, Faster and Stronger with the<br /> Futuristic DevOps Careers</p>
                    <div style={{ color: "#0D3900" }} className="text-lg font-normal p-2 mt-4">
                        Get hold of the modern software development and operations approach which<br /> allows faster build of products and smarter maintenance of deployments.
                    </div>
                    <div >
                        <button className="bg-green-500 w-1/5 h-12 rounded-full text-white mt-4 " >Which career is right for me?</button>
                    </div>
                </div>
            </div>
            <div className="mt-36">
                <img  className="w-screen" style={{height:500}}   src="assests/map.png" alt="logo"/>
            </div>
              
        </div>
    );
};

export default Navbar;
