import {
    ViewerApp,


    addBasePlugins,
    ITexture, TweakpaneUiPlugin,

    IViewerPlugin,

    // Color, // Import THREE.js internals
    // Texture, // Import THREE.js internals
} from "webgi";
import "./styles.css";

async function setupViewer(){

    // Initialize the viewer
    const viewer = new ViewerApp({
        canvas: document.getElementById('webgi-canvas') as HTMLCanvasElement,
        isAntialiased: true,

    })


    // or use this to add all main ones at once.
    await addBasePlugins(viewer) // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

    // Import and add a GLB file.
    await viewer.load("./assets/PyramidGamingPC.glb")

}

setupViewer()
