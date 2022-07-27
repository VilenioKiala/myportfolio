import React from "react";
import Drawer from "../components/main/Drawer";

export const withDrawer = (OriginalComponent: any) => (props: any) => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const openDrawer = React.useCallback(() => setDrawerOpen(true), []);

    return (
        <>
            <Drawer open={drawerOpen} setOpen={setDrawerOpen} />
            <OriginalComponent {...props} openDrawer={openDrawer} />
        </>
    );
};
