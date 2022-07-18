import React, { MouseEvent } from "react";

const useGradientAnimation = () => {
    const [gradientY, setGradientY] = React.useState<number>(0);
    const [gradientX, setGradientX] = React.useState<number>(0);

    function onMouseMove(e: MouseEvent) {
        setGradientY(
            e.currentTarget.getBoundingClientRect().y +
                e.currentTarget.getBoundingClientRect().height -
                e.clientY
        );

        setGradientX(
            e.currentTarget.getBoundingClientRect().x +
                e.currentTarget.getBoundingClientRect().width -
                e.clientX
        );
    }

    function onMouseOut() {
        setGradientX(0);
        setGradientY(0);
    }

    return {
        onMouseMove,
        onMouseOut,
        gradientX,
        gradientY,
    };
};

export { useGradientAnimation };
