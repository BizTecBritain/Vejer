import { useState, useEffect } from "react";

export default function ResponsiveColumns({ col1, col2, col3, col4, maxTwo }) {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const onResize = () => {
            setScreenSize(window.innerWidth);
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    if (maxTwo == null) {maxTwo = false;}

    if (screenSize <= 645) {
        return (
            <div style={{overflow: "auto"}}>
                <div style={{float: "left", width: "100%"}}>
                    {col1}
                    {col2}
                    {col3}
                    {col4}
                </div>
            </div>
        )
    } else if (screenSize <= 1225 || maxTwo) {
        return (
            <div style={{overflow: "auto"}}>
                <div style={{float: "left", width: "50%"}}>
                    {col1}
                    {col3}
                </div>
                <div style={{float: "left", width: "50%"}}>
                    {col2}
                    {col4}
                </div>
            </div>
        )
    } else {
        return (
            <div style={{overflow: "auto"}}>
                <div style={{float: "left", width: "25%"}}>
                    {col1}
                </div>
                <div style={{float: "left", width: "25%"}}>
                    {col2}
                </div>
                <div style={{float: "left", width: "25%"}}>
                    {col3}
                </div>
                <div style={{float: "left", width: "25%"}}>
                    {col4}
                </div>
            </div>
        )
    }
}