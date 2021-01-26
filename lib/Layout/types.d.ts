/**
 * Common type defining a generic menu option
 * Reused across several menu components
 */
export interface MenuOption {
    [key: string]: any;
    /**
     * @param name
     * The name and display of the option
     */
    name: string;
    /**
     * @param action
     * A function to execute on the selection of the item
     */
    action: Function;
    /**
     * @param active
     * An optional parameter specifying if the option is "active"
     */
    active?: boolean;
}
