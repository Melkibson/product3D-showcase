import React, { useState, useEffect} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../config/config.js";
import state  from "../store";
import { download } from "../assets/images"
import { downloadCanvasToImage, reader } from "../config/helpers.js";
import {FilterTabs, DecalTypes, EditorTabs} from "../config/constants.js";
import { fadeAnimation, slideAnimation} from "../config/motion.js";
import { AIPicker, ColorPicker, FilePicker } from "../components/organisms";
import { Button } from "../components/atoms/button";
import { Tab } from "../components/atoms/tab";

const Customizer = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                    <motion.div
                        key="custom"
                        className="absolute top-0 left-0 z-10"
                        {...slideAnimation('left')}
                    >
                        <div className="flex items-center min-h-screen">
                            <div className="editortabs-container tabs">
                                {EditorTabs.map(tab => (
                                    <Tab
                                        key={tab.name}
                                        handleClick={() => {}}
                                        tab={tab}
                                    />
                                ))
                                }
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute top-5 right-5 z-10"
                        {...fadeAnimation}>
                        <Button
                            type="filled"
                            title="Go back"
                            handleClick={() => state.intro = true}
                            styles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                    <motion.div
                        className="filtertabs-container"
                        {...slideAnimation('up')}
                    >
                        {FilterTabs.map(tab => (
                            <Tab
                                key={tab.name}
                                handleClick={() => {}}
                                tab={tab}
                                isFilterTab={true}
                                isActiveTab=""
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default Customizer
