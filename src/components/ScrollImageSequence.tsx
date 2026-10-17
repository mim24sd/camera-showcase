
import { useEffect, useRef } from "react";

type ScrollImageSequenceProps = {
    frameCount: number;
    frameFolder?: string;
    filePrefix?: string;
    extension?: string;
    startFrame?: number;
    scrollHeight?: number;
};

export default function ScrollImageSequence({
                                                frameCount,
                                                frameFolder = "/frames-sequence",
                                                filePrefix = "frame-",
                                                extension = "jpg",
                                                startFrame = 1,
                                                scrollHeight = 400,
                                            }: ScrollImageSequenceProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (!section || !canvas || !context || frameCount <= 0) {
            return;
        }

        const imageCache = new Map<number, HTMLImageElement>();
        let currentFrame = 0;
        let animationId = 0;
        let disposed = false;

        const drawFrame = (frameIndex: number) => {
            const image = imageCache.get(frameIndex);

            if (!image?.complete || !image.naturalWidth || !image.naturalHeight) {
                return;
            }

            const rect = canvas.getBoundingClientRect();
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

            const width = Math.round(rect.width * pixelRatio);
            const height = Math.round(rect.height * pixelRatio);

            if (!width || !height) {
                return;
            }

            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }

            context.clearRect(0, 0, width, height);
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = "high";

            const scale = Math.min(
                width / image.naturalWidth,
                height / image.naturalHeight,
            );

            const imageWidth = image.naturalWidth * scale;
            const imageHeight = image.naturalHeight * scale;

            const x = (width - imageWidth) / 2;
            const y = (height - imageHeight) / 2;

            context.drawImage(image, x, y, imageWidth, imageHeight);
        };

        const loadFrame = (frameIndex: number) => {
            if (frameIndex < 0 || frameIndex >= frameCount) {
                return;
            }

            if (imageCache.has(frameIndex)) {
                return;
            }

            const image = new Image();
            image.decoding = "async";

            const frameNumber = String(startFrame + frameIndex).padStart(4, "0");
            const normalizedFolder = frameFolder.replace(/\/$/, "");

            image.onload = () => {
                if (!disposed && frameIndex === currentFrame) {
                    drawFrame(frameIndex);
                }
            };

            image.onerror = () => {
                console.error(
                    `Failed to load frame: ${normalizedFolder}/${filePrefix}${frameNumber}.${extension}`,
                );
            };

            imageCache.set(frameIndex, image);
            image.src = `${normalizedFolder}/${filePrefix}${frameNumber}.${extension}`;
        };

        const pruneCache = () => {
            for (const [frameIndex, image] of imageCache) {
                if (Math.abs(frameIndex - currentFrame) > 6) {
                    image.onload = null;
                    image.onerror = null;
                    image.removeAttribute("src");
                    imageCache.delete(frameIndex);
                }
            }
        };

        const loadFrameWindow = (frameIndex: number) => {
            const nearbyFrames = [
                frameIndex,
                frameIndex + 1,
                frameIndex - 1,
                frameIndex + 2,
                frameIndex - 2,
                frameIndex + 3,
                frameIndex - 3,
            ];

            nearbyFrames.forEach(loadFrame);
            pruneCache();

            drawFrame(frameIndex);
        };

        const updateFrame = () => {
            cancelAnimationFrame(animationId);

            animationId = requestAnimationFrame(() => {
                const sectionTop = section.getBoundingClientRect().top;

                // Animate over the requested scroll distance, then hold
                // the final frame for one extra viewport before unpinning.
                const animationScrollDistance =
                    (scrollHeight / 100) * window.innerHeight;

                const progress =
                    animationScrollDistance <= 0
                        ? 0
                        : Math.min(
                            1,
                            Math.max(0, -sectionTop / animationScrollDistance),
                        );

                currentFrame = Math.round(progress * (frameCount - 1));

                loadFrameWindow(currentFrame);
            });
        };

        window.addEventListener("scroll", updateFrame, { passive: true });
        window.addEventListener("resize", updateFrame);

        updateFrame();

        return () => {
            disposed = true;
            cancelAnimationFrame(animationId);
            window.removeEventListener("scroll", updateFrame);
            window.removeEventListener("resize", updateFrame);

            imageCache.forEach((image) => {
                image.onload = null;
                image.onerror = null;
                image.removeAttribute("src");
            });

            imageCache.clear();
        };
    }, [frameCount, frameFolder, filePrefix, extension, startFrame, scrollHeight]);

    return (
        <section
            ref={sectionRef}
            style={{
                position: "relative",
                width: "100vw",
                marginLeft: "calc(50% - 50vw)",
                height: `${scrollHeight + 200}vh`,
            }}
        >
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                    background: "#1b100b",
                }}
            >
                <canvas
                    ref={canvasRef}
                    role="img"
                    aria-label="Scroll-controlled camera disassembly animation"
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </div>
        </section>
    );
}
