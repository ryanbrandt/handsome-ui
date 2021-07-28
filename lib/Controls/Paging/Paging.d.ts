import * as React from "react";
export declare const TEST_ID = "paging";
interface Props {
    /**
     * Function to execute on "next" page click
     */
    onNext: Function;
    /**
     * Function to execute on "prev" page click
     */
    onPrev: Function;
    /**
     * Number representing the current page
     */
    page: number;
    /**
     * Number representing the total number of pages
     */
    totalPages: number;
}
declare const Paging: React.FunctionComponent<Props>;
export default Paging;
