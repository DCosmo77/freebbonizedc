import { useState } from "react";
import { ArrowDownToLine, SquarePen, Copy } from "lucide-react";
import campaignData from "../campaign-data.json";

type CaptionType = Record<string, string>;
const { caption, props: captionProps } = campaignData;

function fillCaption(template: string, values: CaptionType) {
	return template.replace(/\[(\w+)\]/g, (_, key) => values[key]?.trim() || `[${key}]`);
}

export default function DownloadPageSidebar({ canvas }: { canvas: React.RefObject<HTMLCanvasElement> }) {
	const [isEdit, setIsEdit] = useState(false);
	const [captionValues, setCapValues] = useState<CaptionType>(() => Object.fromEntries(captionProps.map((key) => [key, ""])));

	const filledCaption = fillCaption(caption, captionValues);

	function handleDownloadCanvas(canvas: React.RefObject<HTMLCanvasElement>, filename: string) {
		if (!canvas.current) return;
		const dataUrl = canvas.current.toDataURL("image/png");
		const link = document.createElement("a");
		link.href = dataUrl;
		link.download = filename;
		link.click();
	}

	return (
		<section className="h-[24em] p-5 w-full relative flex flex-col gap-3 justify-between ">
			{isEdit && (
				<div className="bg-black/50 fixed z-40 inset-0 flex justify-center items-center">
					<div className="bg-white p-5 rounded-md">
						<h2 className="font-semibold text-xl">Adjust caption</h2>
						<ul className="*:flex *:justify-between *:items-center flex flex-col gap-3">
							{captionProps.map((prop, idx) => (
								<li key={idx}>
									<label htmlFor={prop}>{prop}</label>
									<input type="text" name={prop} id={prop} className="outline-none border-b ml-3" onChange={(e) => setCapValues((prev) => ({ ...prev, [prop]: e.target.value }))} />
								</li>
							))}
						</ul>
						<button onClick={() => setIsEdit(false)} className="cursor-pointer py-2 px-3 rounded-md bg-gray-800 text-white font-semibold mt-5">
							Done
						</button>
					</div>
				</div>
			)}
			<article>
				<h1 className="text-4xl font-semibold mb-5">Ready to share!</h1>
				<div className="flex flex-col gap-3">
					Caption:
					<p className="p-2 border rounded-md border-gray-600/50">{filledCaption} </p>
					<div className="flex *:grow gap-3  w-full">
						<button onClick={() => navigator.clipboard.writeText(filledCaption)} className="bg-purple-700 text-white flex justify-center items-center p-3 gap-3 rounded-md  cursor-pointer">
							<Copy />
							Copy Caption
						</button>
						<button onClick={() => setIsEdit(true)} className="bg-purple-700 text-white flex justify-center items-center p-3 gap-3 rounded-md  cursor-pointer">
							<SquarePen />
							Edit Caption
						</button>
					</div>
				</div>
			</article>
			<button onClick={() => handleDownloadCanvas(canvas, "fancy-twibbon.png")} className="flex items-center gap-2 font-semibold cursor-pointer bg-purple-700 p-5 text-white rounded-xl w-fit">
				<ArrowDownToLine />
				Download Image
			</button>
		</section>
	);
}
