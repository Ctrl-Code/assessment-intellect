import Slider from "../Components/Slider";
import WidgetWrapper from "../Components/WidgetWrapper";
import CircularProgressBar from "../Components/ProgressBar";
import { useState } from "react";
import BarSelector from "../Components/BarSelector";
import styles from "./home.module.css";

const Comps = {

    projectSlider: {

        dottedBorder: (props) => <div style={{
            height: "160px",
            width: "160px",
            borderRadius: "50%",
            margin: "15px auto 0",
            display: "grid",
            border: "2px dashed rgba(127,168,186,255)",
        }}>
            {props.children}
        </div>,
    },

    barScale: {},
}

const ranges = ["Very Low", "Low", "Mid", "High", "Very High"];

const Home = () => {

    const [sliderValue, setSliderValue] = useState(0);
    const [selectedBars, setSelectedBars] = useState(0);

    return <div className={styles.home}>
        {/* first widget */}
        <WidgetWrapper height="250px" width="200px">
            <Comps.projectSlider.dottedBorder>
                <CircularProgressBar value={sliderValue} />
            </Comps.projectSlider.dottedBorder>
            <Slider onChange={val => setSliderValue(val)} value={sliderValue} />
        </WidgetWrapper>

        {/* second widget */}
        <WidgetWrapper height="240px" width="210px">
            <div style={{
                color: "#daf7ff",
                fontWeight: "bold",
                fontSize: "12px",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {ranges[selectedBars]}
            </div>
            <BarSelector value={selectedBars} onChange={barValue => setSelectedBars(barValue)} />
        </WidgetWrapper>
    </div>
};

export default Home;