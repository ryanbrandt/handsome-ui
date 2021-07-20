import * as React from "react";
interface Props {
    /**
     * Children to be rendered within the app
     */
    children: React.ReactNode;
    /**
     * Optional header menu to be rendered within the application container
     */
    header?: React.ReactNode;
    /**
     * Global app container css class
     */
    className?: string;
    /**
     * Global app container inline styles
     */
    style?: React.CSSProperties;
}
declare const AppContainer: React.FunctionComponent<Props>;
export default AppContainer;
