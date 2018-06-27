import {Signal} from "../../models/signal";
import {SignalType} from "../../models/signal-type";
import {SignalsService} from "../../services/signals-service";
import {RenderedComponent} from "../../core/components/rendered.component";
import {BaseComponent} from "../../core/components/base.component";
import {ConstructorComponentOptions} from "../../core/options/constructor-component-options";

import * as template from "./signals-cards.component.hbs";
import {ApiConfig} from "../../config/api-config";
import {StringUtils} from "../../utils/string-utils";

export class SignalsCardsComponent extends BaseComponent implements RenderedComponent {
    signals: Array<Signal> = [];
    signalTypes: Array<SignalType> = [];

    constructor(options: ConstructorComponentOptions, private _signalsService: SignalsService = new SignalsService()) {
        super(options);
    }

    render() {

        // const template = require("./signals-cards.component.hbs");

        this._signalsService.getSignals().then(response => {
            this.signals = this.transformSignalsData(response.data.signals);
            this.signalTypes = this.extractSignalTypes(response.data.signals);

            this.applyRenderFromParentComponent(template, this.signals, this.signalTypes)
        });

    }

    applyRenderFromParentComponent(template: any, signals: Array<Signal>, signalTypes: Array<SignalType>) {
        super.render({
            data: {
                signals: signals,
                signalTypes: signalTypes
            },
            template: template
        });
    }

    transformSignalsData(signals: Array<Signal>) {
        return signals.map(signal => {
            return {
                filename: signal.filename,
                imageURL: `${ApiConfig.BASE_URL}/traffic-signals-images/sct/${signal.filename}`,
                name: signal.name,
                description: signal.description,
                summary: StringUtils.cutString(signal.description),
                type: signal.type
            };
        });
    }

    isSignalTypeItemInArray(item: SignalType, array: Array<SignalType>): boolean {
        return array.filter(type => type.name === item.name).length > 0;
    }

    extractSignalTypes(signals: Array<Signal>): any {
        const signalTypes: Array<SignalType> = [];

        signals.forEach(signal => {
            if (!this.isSignalTypeItemInArray(signal.type, signalTypes)) {
                signalTypes.push(signal.type);
            }
        });
        return signalTypes;
    }

    onInit() {

    }

}