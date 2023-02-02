import { Slider as MuiSlider } from '@mui/material';
import styles from "./Slider.module.css";

const Slider = ({ onChange = (newValue) => { }, value = 0 }) => {
    return <div style={{ width: "160px", margin: "auto", height: "10px" }}>
        <MuiSlider
            aria-label="Range"
            defaultValue={0}
            valueLabelDisplay="off"
            step={1}
            min={0}
            max={10}
            onChange={event => onChange(event.target.value)}
            classes={{
                rail: styles.sliderRail,
                thumb: styles.sliderThumb,
                track: styles.sliderTrack,
            }}
        />
    </div>
};

export default Slider;