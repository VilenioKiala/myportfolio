import React from "react";
import ImageDisplayer from "../components/ImageDisplayer";

export const withImageDisplayer = (OriginalComponent: any) => (props: any) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [imageOnDisplayer, setImageOnDisplayer] = React.useState("");

    const openImageDisplayer = React.useCallback(() => setOpen(true), []);

    return (
        <>
            <ImageDisplayer
                open={open}
                setOpen={setOpen}
                image={imageOnDisplayer}
            />
            <OriginalComponent
                {...props}
                openImageDisplayer={openImageDisplayer}
                setImageOnDisplayer={setImageOnDisplayer}
            />
        </>
    );
};
