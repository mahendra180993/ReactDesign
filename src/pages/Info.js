import React from 'react'

const Info = () => {
    return (
        <div>
            <div >
                <img style={{height:400}} className="w-screen" src="assests/12.jpg" alt="logo"/>
                <div>
                <p className="text-white text-4xl font-bold -mt-96 flex ml-12">Have a Questions?</p>
                <p className="text-gray-500 test-lg font-lg flex ml-12">we help you go further then you ever dreamed,24/7</p>
                </div>
                <div className="flex flex-row justify-center gap-52 mt-32">
                    <img className="h-16" src="assests/char.png" alt="logo"/>
                    <img className="h-16" src="assests/usss1.png" alt="logo"/>
                    <img className="h-16" src="assests/msg.png" alt="logo"/>
                    <img className="h-16" src="assests/chat.png" alt="logo"/>
                </div>
                <div className="flex flex-row gap-36 justify-center text-white">
                    <p>+91 9440462222<br/><span class="ml-10">India</span></p>
                    <p>+1 (469) 876-5365<br/><span class="ml-10">Usa</span></p>
                    <p>hello@digital-lync.com<br/><span class="ml-10">Email</span></p>
                    <p>live chat</p>
                </div>
            </div>
        </div>
    );
};

export default Info;
