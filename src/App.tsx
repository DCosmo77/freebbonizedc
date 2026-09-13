import { useState } from "react";
import "./App.css";
import { Camera } from "lucide-react";

function App() {
	return (
		<main className="w-screen h-screen flex justify-center items-center">
			<div className="h-fit flex p-20 justify-center gap-10 items-center">
				<section className="w-1/3">
					<img src="/twibbon.png" alt="Exp Twibbon" />
				</section>
				<section className="h-[24em] p-5 w-1/2 flex flex-col gap-3 justify-between ">
					<article>
						<h1 className="text-6xl font-semibold mb-5">FancyEvent Twibbon</h1>
						<p className="text-xl">Join our event and invite those around you to join in the fun!</p>
					</article>
					<div className="*:cursor-pointer bg-purple-700 p-5 relative text-white rounded-xl w-fit">
						<input type="file" className="absolute inset-0 z-10 opacity-0" />
						<h3 className="flex items-center gap-3">
							<Camera />
							Upload your photo
						</h3>
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
