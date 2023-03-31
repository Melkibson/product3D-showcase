import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from "valtio";
import {
    headTextAnimation,
    headContentAnimation,
    headContainerAnimation
} from '../config/motion'
import state from "../store/index.js";

const Home = () => {
    return (
        <div>
            <div>Home</div>
        </div>
    );
}

export default Home
