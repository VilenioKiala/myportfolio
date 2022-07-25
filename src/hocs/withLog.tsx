export const withLog = (Component: any, log: string) => (props: any) => {
    console.log(log);

    return <Component {...props} />;
};
