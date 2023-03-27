"use client";

import Login from "@/components/Login";
import Register from "@/components/Register";
import { usePathname } from "next/navigation";

export default function Home() {
	const pathname = usePathname();

	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="hidden md:flex md:w-1/2 h-full border-red-500 border-2"></div>
			<div className="w-full h-full md:w-1/2 flex flex-col justify-center items-center overflow-auto">
				{pathname === "/register" ? <Register /> : <Login />}
			</div>
		</div>
	);
}
