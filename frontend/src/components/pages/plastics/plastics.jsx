import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, User, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from '@nextui-org/react'
import { useNavigate, useParams } from 'react-router-dom';

export default function People() {

    const {material} = useParams()
    const navigate = useNavigate()

    const plasticRecyclers = [
        { id: 1, username: "Jaden Sithole", role: "Paper", description: "A veteran in the recycling industry, Joe specializes in trading high-quality recycled paper products for a sustainable future.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 2, username: "Kabelo Mokoena", role: "Plastic", description: "Sam is passionate about eco-friendly practices, focusing on plastic waste collection and recycling for green innovation.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 3, username: "Thando Ndlovu", role: "Plastic", description: "Mike helps businesses find sustainable alternatives by providing recycled plastic materials for a variety of industries.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 4, username: "TomEcoTrade", role: "Plastic", description: "Tom is dedicated to transforming plastic waste into reusable materials, offering eco-friendly solutions for manufacturers.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 5, username: "LisaPlasticPro", role: "Plastic", description: "Lisa specializes in sourcing recycled plastics and connecting businesses with sustainable, high-quality plastic products.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 6, username: "KateGreenDeal", role: "Plastic", description: "Kate is focused on reducing plastic pollution by supplying recycled plastic materials to environmentally conscious companies.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 7, username: "PaulEcoFriendly", role: "Plastic", description: "Paul works with businesses to turn plastic waste into valuable raw materials, supporting eco-friendly production.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 8, username: "JakePlasticKing", role: "Plastic", description: "Jake provides top-notch recycling services for industries, turning plastic waste into reusable products for various applications.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 9, username: "AmyRecycles", role: "Plastic", description: "Amy is committed to helping businesses repurpose plastic waste into sustainable materials that support green initiatives.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 10, username: "BenGreenRecycler", role: "Plastic", description: "Ben focuses on post-consumer and post-industrial plastic recycling, transforming waste into valuable, reusable materials.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 11, username: "Jack", role: "Paper", description: "Specializes in collecting, sorting, and processing paper products like cardboard and used paper.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 12, username: "Sarah", role: "Plastic", description: "Handles various types of plastic materials, sorting, cleaning, and melting them down for reuse.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 13, username: "Mike", role: "E-Waste", description: "Focuses on recycling electronic waste such as old computers and phones, extracting valuable materials and safely disposing of toxic components.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 14, username: "Linda", role: "Glass", description: "Specializes in collecting and processing glass by color and type to create new glass products or alternative building materials.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 15, username: "Tom", role: "Metal", description: "Processes metal scraps, including aluminum and steel, turning them into materials for new products or recycling them into other forms.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 16, username: "Jenny", role: "Organic Waste", description: "Handles organic waste like food scraps and yard trimmings, turning them into compost or biogas.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 17, username: "Chris", role: "Textile", description: "Focuses on recycling old clothes and fabrics, transforming them into new textiles or other reusable materials.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 18, username: "Kate", role: "Construction Waste", description: "Recycles materials from construction and demolition sites, such as concrete, wood, and metals, for reuse in new construction projects.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 19, username: "Ethan", role: "Household Waste", description: "Handles everyday household waste, sorting recyclables from general trash and ensuring proper processing.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 20, username: "John", role: "Automotive", description: "Specializes in recycling parts and materials from old vehicles, including metal parts, tires, and fluids.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 21, username: "Anna", role: "Quality Control Specialist", description: "Ensures the recycled materials meet quality standards before they are processed or sold.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 22, username: "Brian", role: "Logistics Coordinator", description: "Manages the transport and delivery of recyclable materials to the appropriate processing facilities.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 23, username: "Megan", role: "Waste Collection Driver", description: "Drives the truck to collect recyclable materials from residential and commercial areas.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 24, username: "Dave", role: "Maintenance Technician", description: "Repairs and maintains recycling machinery and equipment to ensure smooth operations.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 25, username: "Amy", role: "Field Technician", description: "Provides on-site technical support and resolves issues with recycling equipment.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 26, username: "Tyler", role: "Environmental Consultant", description: "Advises on best practices for recycling and improving environmental impact.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 27, username: "Liz", role: "Public Relations Specialist", description: "Promotes recycling programs and educates the community about recycling benefits.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 28, username: "Gary", role: "Sustainability Coordinator", description: "Implements and manages sustainability initiatives within the recycling process.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 29, username: "Emma", role: "Inventory Specialist", description: "Tracks and manages the stock of recyclable materials and ensures efficient use.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 30, username: "Shawn", role: "Operations Coordinator", description: "Coordinates daily operations to ensure recycling processes are efficient and effective.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 31, username: "Jake", role: "Recycling Consultant", description: "Provides expertise and advice on setting up and improving recycling programs for businesses.", profilePicture: "https://thispersondoesnotexist.com/" },
        { id: 32, username: "Olivia", role: "Safety Officer", description: "Ensures all safety protocols are followed in the recycling facility to prevent accidents.", profilePicture: "https://thispersondoesnotexist.com/" }
    ];
    
    

    const template = plasticRecyclers.filter(recycler => recycler.role.toLowerCase() === material)
    return (
        <section className='mt-[15dvh] px-4 lg:px-10'>
            <div>
                <p className='text-center font-semibold text-2xl my-2 text-gray-500'>Explore <span className='text-[#38b000]'>{material}</span> Recyclers</p>
                <div className='my-4'>
                    <Input type='search' placeholder='search...' startContent={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={" #6b7280"} fill={"none"}>
                        <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                    }/>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
                {template.map((recycler, i) => (
                    <div className=" col-span-12 lg:col-span-3" key={i}>
                        <Card className="max-w-[400px]">
                            <CardHeader className="flex justify-between">
                                <User
                                    name={recycler.username}
                                    description={recycler.role + " recycler "}
                                    avatarProps={{
                                        src: recycler.profilePicture
                                    }}
                                />
                                <div>
                                    <Dropdown>
                                        <DropdownTrigger>
                                            <button
                                                variant="bordered"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#000000"} fill={"none"}>
                                                    <path d="M11.992 12H12.001" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11.9842 18H11.9932" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11.9998 6H12.0088" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Static Actions">
                                            <DropdownItem key="new">
                                                <div className='flex gap-1'>
                                                    <div className='mt-'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"red"} fill={"none"}>
                                                            <path d="M5.32171 9.6829C7.73539 5.41196 8.94222 3.27648 10.5983 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0578 3.27648 16.2646 5.41196 18.6783 9.6829C21.092 13.9538 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6548 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9538 5.32171 9.6829Z" stroke="currentColor" strokeWidth="1.5" />
                                                            <path d="M11.992 16H12.001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M12 13L12 8.99997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <div className='text-gray-400'>
                                                        Report
                                                    </div>
                                                </div>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <p className='text-sm text-gray-500'>{recycler.description}</p>
                            </CardBody>
                            <Divider />
                            <CardFooter className='flex justify-center'>
                                <Button className='bg-[#38b000] shadowed-btn text-white px-[5rem] flex' onClick={()=>{
                                    navigate(`/chat/${recycler.id}`)
                                }}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"white"} fill={"none"}>
                                            <path d="M8.5 14.5H15.5M8.5 9.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        Message
                                    </div>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    )
}