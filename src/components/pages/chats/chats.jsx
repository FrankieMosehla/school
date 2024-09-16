
// import { IoIosArrowBack } from "react-icons/io";

import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button, Input } from "@nextui-org/react";

const recyclerChats = [
	{
		id: 1,
		name: "Jaden Sithole",
		lastMessage: "Hey, I can recycle your plastics.",
		profileImage:
			"https://thispersondoesnotexist.com/",
	},
	{
		id: 2,
		name: "Kabelo Mokoena",
		lastMessage: "I specialize in metal recycling.",
		profileImage:
			"https://thispersondoesnotexist.com/",
	},
	{
		id: 3,
		name: "Thando Ndlovu",
		lastMessage: "Can help with glass recycling.",
		profileImage:
			"https://thispersondoesnotexist.com/",
	},
];

export default function Chats() {

	const { userId } = useParams();
	const recycler = recyclerChats.find((user) => user.id == userId);
	const chatContainerRef = useRef(null);
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");

	const handleSendMessage = () => {
		if (newMessage) {
			const chat = {
				id: messages.length + 1,
				user: "kamo",
				content: newMessage,
			};
			setMessages([...messages, chat]);
			setNewMessage("");
		}
	};

	const handleSendMessageAndScroll = () => {
		handleSendMessage();
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
		}
	};

	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
		}
	}, [messages]);

	return (
		<div className="h-screen">
			<div
				key={recycler.id}
				className="sticky top-0 right-0 left-0 p-4 bg-white rounded-lg shadow-md flex justify-between items-center z-10"
			>
				<div className="flex space-x-4 items-center">
					<Link to="/recyclers">
						{/* <IoIosArrowBack className="text-gray-500" size={23} /> */}
					</Link>
					<img
						className="h-10 w-10 rounded-full object-cover"
						src={recycler.profileImage}
						alt={`${recycler.name} profile`}
					/>
					<div>
						<h1 className="font-bold text-gray-700">{recycler.name}</h1>
					</div>
				</div>
			</div>
			<div
				ref={chatContainerRef}
				className="mb-6 p-4 rounded h-[550px] w-full overflow-y-auto flex flex-col "
			>
				{messages.map((post) => (
					<div
						key={post.id}
						className={`mb-2 rounded flex ${post.user === "kamo" ? "justify-end" : "justify-start"
							}`}
					>
						<div
							className={`p-2 break-words max-w-[70%] ${post.user === "kamo" ? "bg-green-100" : "bg-gray-100"
								} rounded-lg`}
						>
							<p className="font-semibold">{post.user === "kamo"?"":post.user}</p>
							<p>{post.content}</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex items-center p-4 fixed bottom-0 left-0 right-0">
				<Input
					type="text"
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					placeholder="Type a message..."
					className="flex-1 rounded "
				/>
				<Button
					onClick={handleSendMessageAndScroll}
					className=" text-white px-4 py-2 rounded  transition-colors bg-white"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#000000"} fill={"none"}>
						<path d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z" stroke="currentColor" strokeWidth="1.5" />
						<path d="M11.5 12.5L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</Button>
			</div>
		</div>
	);
}

