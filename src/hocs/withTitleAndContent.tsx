import React from "react";

const withTitleAndContent =
    (WrappedComponent: any, title: string, pageContent?: string) =>
    ({ ...props }) => {
        React.useEffect(() => {
            document.title = title;
            document.textContent = pageContent || "";
        }, []);

        return <WrappedComponent {...props} />;
    };

export default withTitleAndContent;
