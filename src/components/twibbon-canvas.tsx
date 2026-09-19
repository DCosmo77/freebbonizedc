import { useEffect, useRef } from "react";

export default function TwibbonCanvas({ userPhoto, transform, frameSrc, size = 500 }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const frameRef = useRef(new Image());

	useEffect(() => {
		frameRef.current.src = frameSrc;
		frameRef.current.onload = draw;
	}, [frameSrc]);

	useEffect(draw, [userPhoto, transform]);

	function draw() {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		ctx?.clearRect(0, 0, size, size);

		if (userPhoto) {
			ctx?.save();
			ctx?.translate(size / 2 + transform.x, size / 2 + transform.y);
			ctx?.rotate((transform.rotate * Math.PI) / 180);
			ctx?.scale(transform.scale / 100, transform.scale / 100);
			ctx?.drawImage(userPhoto, -userPhoto.width / 2, -userPhoto.height / 2);
			ctx?.restore();
		}
		ctx?.drawImage(frameRef.current, 0, 0, size, size);
	}

	return <canvas ref={canvasRef} width={size} height={size} className="w-full h-auto" />;
}
