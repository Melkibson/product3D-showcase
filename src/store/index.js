import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#efbd48',
    textColor:'#fff',
    isLogoTexture: true,
    isFullTextue: false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png',
})

export default state;