import Slider from "../Components/Slider";
import WidgetWrapper from "../Components/WidgetWrapper";
import CircularProgressBar from "../Components/ProgressBar";
import { useState } from "react";

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

const Home = () => {

    const [sliderValue, setSliderValue] = useState(0);

    return <div style={{
        display: "flex",
        columnGap: "30px",
        alignItems: "flex-end"
    }}>
        <WidgetWrapper height="250px" width="200px">
            <Comps.projectSlider.dottedBorder>
                <CircularProgressBar value={sliderValue} />
            </Comps.projectSlider.dottedBorder>
            <Slider onChange={val => setSliderValue(val)} value={sliderValue} />
        </WidgetWrapper>
    </div>
};

export default Home;