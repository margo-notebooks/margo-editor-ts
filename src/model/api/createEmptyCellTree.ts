import { IMargoNotebook } from "../interfaces";

/**
 * Create an empty Margo notebook 
 * @returns { IMargoNotebook }
 */
export default function createEmptyMargoNotebook(): IMargoNotebook {
    return {
        nodes: []
    }
}

