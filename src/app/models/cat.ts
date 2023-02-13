import { Colony } from "./colony";

export interface Cat {
    id: String;
    name: String;
    sex: String;
    weight: String;
    compatibilities: String;
    incompatibilities: String;
    diseases: String;
    imageUrl: String;
    colony: Colony;
}
