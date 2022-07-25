import React from "react";
import TalkModal from "../components/main/TalkModal";

export const withTalkModal = (OriginalComponent: any) => (props: any) => {
    const [modalOpen, setModalOpen] = React.useState(false);

    const openModal = React.useCallback(() => setModalOpen(true), []);

    return (
        <>
            <TalkModal open={modalOpen} setOpen={setModalOpen} />
            <OriginalComponent {...props} openModal={openModal} />
        </>
    );
};
