const WidgetWrapper = ({
    children = null,
    height = "200px",
    width = "200px",
}) => {
    return <div style={{
        backgroundColor: "rgba(48,94,110,255)",
        borderRadius: "3px",
        height,
        width,
    }}>
        {children}
    </div>
};

export default WidgetWrapper;