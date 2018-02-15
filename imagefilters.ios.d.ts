import { Image } from "tns-core-modules/ui/image";
import { ImageSource } from "tns-core-modules/image-source";
export declare class ImageFilters {
    private _context;
    constructor();
    sepiaEffect(img: Image, intensity?: number): Promise<ImageSource>;
    gamma(img: Image, intensity?: number): Promise<{}>;
    invert(img: Image): Promise<{}>;
    chromeEffect(img: Image): Promise<{}>;
    fadeEffect(img: Image): Promise<{}>;
    vintage(img: Image): Promise<{}>;
    colorize(img: Image, intensity?: number): Promise<{}>;
    motionBlur(img: Image): Promise<{}>;
    comicBook(img: Image): Promise<{}>;
    crystalize(img: Image): Promise<{}>;
    colorEdges(img: Image): Promise<{}>;
    coloringBook(img: Image): Promise<{}>;
    dull(img: Image): Promise<{}>;
    threeD(img: Image): Promise<{}>;
    sketch(img: Image): Promise<{}>;
    pointillize(img: Image): Promise<{}>;
    spotLight(img: Image): Promise<{}>;
    kaleidoscope(img: Image): Promise<{}>;
    opTile(img: Image): Promise<{}>;
    perspectiveTile(img: Image): Promise<{}>;
    twirl(img: Image): Promise<{}>;
    exposure(img: Image, intensity?: number): Promise<{}>;
    brightness(img: Image, intensity?: number): Promise<{}>;
    vibrant(img: Image, intensity?: number): Promise<{}>;
    gaussianBlur(img: Image, radius?: number): Promise<{}>;
    blackAndWhite(img: Image): Promise<{}>;
    tonalEffect(img: Image): Promise<{}>;
    circularWrap(img: Image): Promise<{}>;
    holeDistort(img: Image): Promise<{}>;
    lightTunnel(img: Image): Promise<{}>;
    pinchDistort(img: Image): Promise<{}>;
    torusLensDistort(img: Image): Promise<{}>;
    vortexDistort(img: Image): Promise<{}>;
    circularScreen(img: Image): Promise<{}>;
    halftone(img: Image): Promise<{}>;
    lineScreen(img: Image): Promise<{}>;
    contrast(img: Image, intensity?: number): Promise<{}>;
    sharpen(img: Image, intensity?: number): Promise<{}>;
    posterize(img: Image, intensity?: number): Promise<{}>;
    private _createCGImage(img);
    private _createOutputCGImage(img);
    private _createFilter(name, img);
    private _processImage(filter);
}
