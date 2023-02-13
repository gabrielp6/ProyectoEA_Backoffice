import { Cat } from "./cat";
import { User } from "./user";

export interface Colony {
    id: String;
    name: String;
    locationx: String;
    locationy: String;
    observations: String;
    cats: Array<Cat>;
}
