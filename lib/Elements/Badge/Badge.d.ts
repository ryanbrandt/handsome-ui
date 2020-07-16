import * as React from "react";
import "./index.css";
interface Props {
    /**
     * Content to be rendered within the badge, either a string or custom JSX
     */
    content: string | JSX.Element;
    /**
     * Optional CSS classes to apply
     */
    className?: string;
    /**
     * Optional inline styles
     */
    style?: React.CSSProperties;
}
declare const Badge: React.FunctionComponent<Props>;
export default Badge;
