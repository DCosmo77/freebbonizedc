import { useState } from "react";
import "./App.css";
import TwibbonCanvas from "./components/twibbon-canvas";
import LandingPageSidebar from "./components/landing-page";
import AdjustPageSidebar from "./components/adjust-page";

function App() {
	const [sidebarState, setSidebarState] = useState<"landing" | "adjust" | "ready">("landing");
	const [userPhoto, setUserPhoto] = useState<HTMLImageElement | null>(null);
	const [photoTransform, setPhotoTransform] = useState({ x: 0, y: 0, scale: 100, rotate: 0 });

	function handlePhotoSelected(img: HTMLImageElement) {
		setUserPhoto(img);
		setSidebarState("adjust");
	}

	return (
		<main className="w-screen h-screen flex justify-center items-center">
			<div className="h-fit flex p-20 justify-center gap-10 items-center">
				<section className="w-96">
					<TwibbonCanvas userPhoto={userPhoto} frameSrc={"/twibbon.png"} transform={photoTransform} />
				</section>
				{sidebarState == "landing" && <LandingPageSidebar onPhotoSelected={handlePhotoSelected} />}
				{sidebarState == "adjust" && <AdjustPageSidebar onPhotoSelected={handlePhotoSelected} transform={photoTransform} setTransform={setPhotoTransform} />}
			</div>
		</main>
	);
}

export default App;
