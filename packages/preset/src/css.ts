import {PresetVedixOptions} from "./index";
import {generateColor} from "./colors";

export  function genCss (options: PresetVedixOptions) {
    return generateColor(options, (color) => {
        return color.split(" ").join(", ")
    })
}