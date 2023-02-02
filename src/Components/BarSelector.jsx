import React from "react";

const Comps = {
    individualBars: ({ width = "100px", active = false, onClick = () => { } }) => <div onClick={onClick} style={{
        height: "22px",
        width,
        borderTop: `22px solid ${active ? "#fff" : "#819da8"}`,
        borderLeft: `${width / 2} solid transparent`,
        borderRight: `${width / 2} solid transparent`,
        // clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
        borderRadius: "10px 10px 20px 20px",
        // backgroundColor: active ? "#ffffff" : "#819da8",
        cursor: "pointer",
    }} />,
};

const BarSelector = ({ onChange = (value) => { }, value = 0 }) => {
    const widths = [130, 100, 70, 40, 20];
    return <div style={{ display: "flex", flexDirection: "column", rowGap: "10px", alignItems: "center" }}>
        {
            widths.map((width, index) => <Comps.individualBars
                width={`${width}px`}
                active={(widths.length - index - 1) <= value}
                key={width}
                onClick={() => onChange(widths.length - index - 1)} />
            )
        }
    </div>
};

export default BarSelector;