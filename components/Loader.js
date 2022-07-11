import React from "react";
import Lottie from "react-lottie"
import * as animationData from '../assets/loader/lf30_editor_2yon13cp.json'
import {motion} from "framer-motion";

export default class Loader extends React.Component {


    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }

    render() {
        const buttonStyle = {
            display: 'block',
            padding: '100px',
        };

        const defaultOptions = {
            loop: true,
            autoplay: true,
            padding: 100,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return <motion.div
            initial={{ scale: 0 }}
            animate={{  scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10
            }}

            className="loader">
                <div className="loader_inside">
                <Lottie options={defaultOptions}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}/>
                </div>
           
            {/*<button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
            <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
            <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>*/}
        </motion.div>
    }
}
