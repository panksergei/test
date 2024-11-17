import { GLB_VAR } from "./GlobalVariables";

export class Functions {

    static getDataCyTag(tag) {
        return '[' + GLB_VAR.dataCy + '="' + tag + '"]'
    }

}