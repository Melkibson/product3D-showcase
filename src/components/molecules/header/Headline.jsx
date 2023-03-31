import React from 'react'
import { motion } from "framer-motion";
import { Heading } from "../../atoms/heading/header/index.js";
import Paragraph from "../../atoms/paragraph/header/Paragraph.jsx";

import {
    headTextAnimation,
    headContentAnimation,
    headContainerAnimation,
} from '../../../config/motion'
import state from "../../../store/index.js";
import {Button} from "../../atoms/button/header/index.js";

const Headline = () => {
    return (
        <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
                <Heading
                    titleStart="let's"
                    titleEnd="do it"
                />
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                <Paragraph
                    contentStart="Create your unique and exclusive shirt with our brand-new 3D customazitaion tool."
                    strong="Unleash your creativity"
                    contentEnd="and define your own style."
                />
                <Button
                    type="filled"
                    title="Customize It"
                    handleClick={() => state.intro = false}
                    styles="w-fit px-4 py-2.5 font-bold text-sm"
                />
            </motion.div>
        </motion.div>
    );
}

export default Headline
