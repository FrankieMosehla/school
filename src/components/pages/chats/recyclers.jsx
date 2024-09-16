
import { CgProfile } from "react-icons/cg";
import { FaMessage } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, User } from '@nextui-org/react'

const recyclersData = [
	{
		id: 1,
		name: "Jaden Sithole",
		lastMessage: "Hey, I can recycle your plastics.",
		profileImage:
			"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
	},
	{
		id: 2,
		name: "Kabelo Mokoena",
		lastMessage: "I specialize in metal recycling.",
		profileImage:
			"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
	},
	{
		id: 3,
		name: "Thando Ndlovu",
		lastMessage: "Can help with glass recycling.",
		profileImage:
			"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
	},
];

export default function Recyclers() {
	const [searchTerm, setSearchTerm] = useState("");
	const filteredRecyclers = recyclersData.filter((recycler) =>
		recycler.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="min-h-screen ">
			<div className="p-4">
				<h1 className="text-center font-bold text-2xl text-gray-700">
					Recyclers Nearby
				</h1>
			</div>

			<div className="mb-6 p-4">
				<Input
					type="text"
					placeholder="Search for recyclers here"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					startContent={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#000000"} fill={"none"}>
							<path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
						</svg>
					}
				/>

			</div>

			<div className="grid grid-cols-12 gap-2 px-2">
				{filteredRecyclers.length > 0 ? (
					filteredRecyclers.map((recycler) => (
						<Link to={`/chats/${recycler.id}`} className="col-span-12">
							<div
								key={recycler.id}
								className="p-4 bg-white rounded-lg flex justify-between items-center"
							>
								<div className="flex space-x-4 items-center">
									<User
										name={recycler.name}
										description={recycler.lastMessage}
									/>
								</div>
								<div className="flex space-x-4 items-center">
									<p className="text-tiny text-gray-400">12 : 30</p>
								</div>
							</div>
						</Link>
					))
				) : (
					<p className="text-center text-gray-500 col-span-12">No recyclers found.</p>
				)}
			</div>
		</div>
	);
}

