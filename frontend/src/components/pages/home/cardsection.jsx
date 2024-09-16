import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Cardsection() {
    const navigate = useNavigate()
    return (
        <section>
            <div className="text-center my-10">
                <p className="text-3xl">Discover nearby <span className="text-[#38b000]">recycling</span> centers and services effortlessly.</p>
                <p className="text-gray-400 text-tiny">Connecting you to convenient recycling options for a cleaner future.</p>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 lg:col-span-3">

                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://assets.lummi.ai/assets/QmVvHmcaE3UYx8hY89ESFXTtDb25ArSELaUcmC1VaqYWPG?auto=format&w=1500"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black ">Plastic Recyclers</p>
                        </div>
                        <Button className="text-tiny bg-[#38b000] text-white" radius="full" size="sm" onClick={() => navigate('/explore/plastic')}>
                            Explore
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 lg:col-span-3">

                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://assets.lummi.ai/assets/QmNmeGxUJC6mFpV2g7qo2gAAvLWrGcLuThiDNi7kw4Ycqi?auto=format&w=1500"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black ">Cans</p>
                        </div>
                        <Button className="text-tiny bg-[#38b000] text-white" radius="full" size="sm" onClick={() => navigate('/explore/metal')}>
                            Exolore
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 lg:col-span-3">

                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://assets.lummi.ai/assets/QmURSp9yFKXdyJhQrL3UAfrzUCWdGqGSWokidhNxiuRimG?auto=format&w=1500&quot"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                        <p className="text-black text-tiny">Availble soon.</p>
                        <p className="text-black text-tiny">Get notified</p>
                        </div>
                        <Button className="text-tiny bg-[#38b000] text-white" radius="full" size="sm" onClick={() => navigate('/explore/metal')} isDisabled>
                            Exolore
                        </Button>
                    </CardFooter>
                </Card>

                

            </div>
        </section>
    )
}