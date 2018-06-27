import {SignalType} from "./signal-type";

export interface Signal {
    filename: string;
    name: string;
    description: string;
    type: SignalType;
}