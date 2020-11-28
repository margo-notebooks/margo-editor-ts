import { IMargoNotebook } from "../interfaces";

/**
 * Get a new reference to a margo notebook. Note that this re-uses existing node
 * references. This is used with react hooks update functions that will force a
 * render when the reference is changed (even if the values don't change)
 * @param { IMargoNotebook } margoNotebook 
 * @returns { IMargoNotebook }
 */
export function cloneNotebook(margoNotebook: IMargoNotebook): IMargoNotebook {
    const ret: IMargoNotebook = {
        nodes: [...margoNotebook.nodes]
    }

    return ret
}