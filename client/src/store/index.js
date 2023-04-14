import { proxy } from "valtio"

const state = proxy({
    intro: true, // currently in home page or not
    color: "#EFBD48", // default color
    isLogoTexture: true, // are we displaying logo on shirt
    isFullTexture: false,
    logoDecal: "./threejs.png",
    fullDecal: "./threejs.png"
});

export default state;