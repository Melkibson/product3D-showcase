import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from "valtio";
import {
    headTextAnimation,
    headContentAnimation,
    headContainerAnimation,
    slideAnimation
} from '../config/motion'
import state from "../store/index.js";
import { Image } from "../components/atoms/image/header"
import { Headline } from "../components/molecules/header/index.js";

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header className="" {...slideAnimation('down')}>
                        <Image
                            src="/threejs.png"
                            alt="logo"
                        />
                    </motion.header>
                    <Headline/>
                </motion.section>
            )}
        </AnimatePresence>

    );
}

export default Home
