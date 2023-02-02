import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ value = 0 }) => <div style={{
    height: "120px",
    width: "120px",
    margin: "auto"
}}>
    <CircularProgressbarWithChildren
        value={value}
        minValue={0}
        maxValue={10}
        strokeWidth={3}
        styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            // rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            // textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            // pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: "#f8fcff",
            // textColor: '#f88',
            trailColor: 'inherit',
            // backgroundColor: '#3e98c7',
        })}
    >
        <div style={{ height: "96%", width: "96%", borderRadius: "50%", backgroundColor: "#476d7c", display: "grid" }}>
            <div style={{ height: "80px", width: "80px", borderRadius: "50%", backgroundColor: "#70dbe7", margin: "auto", display: "grid" }}>
                <div style={{ margin: "auto", fontSize: "1.6em", color: "#f2f9ff", fontWeight: "bold" }}>{value}</div>
            </div>
        </div>
    </CircularProgressbarWithChildren>
</div>;

export default CircularProgressBar;