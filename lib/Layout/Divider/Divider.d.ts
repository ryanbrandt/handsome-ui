import * as React from "react";
import "./index.css";
interface Props {
    /**
     * Optional additional CSS classes to be applied to the divider
     */
    className?: string;
    /**
     * Optional inline styling
     */
    style?: React.CSSProperties;
    /**
     * Optional flag to specify if gradient or solid variation of border
     */
    solid?: boolean;
    /**
     * Optional flag to specify a vertifcal divider
     */
    vertical?: boolean;
}
declare const Divider: React.FunctionComponent<Props>;
export default Divider;
