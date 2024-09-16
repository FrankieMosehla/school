import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom'
export default function Hero () {
    const navigate = useNavigate()
    return (
        <section>
            <div className="hero-section h-[80dvh] w-full pt-[20dvh] lg:pt-[25dvh] px-2 lg:px-5 rounded-lg flex justify-center">
                <div className="flex justify-center lg:block">
                    <div className=" w-[20rem] lg:w-[40rem]">
                        <h1 className="text-white text-3xl text-center lg:text-center lg:text-5xl my-2">Revolutionize <span className="text-[#38b000]">Recycling</span>, One Click at a Time</h1>
                        <p className="text-white text-center">Empowering communities to recycle smarter and reduce waste with seamless, eco-friendly solutions at your fingertips.</p>
                        <div className="text-center">
                            <Button className="px-[40pt] bg-[#38b000] text-white font-bold my-3 shadowed-btn" onClick={() => navigate('/signin')}>Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}