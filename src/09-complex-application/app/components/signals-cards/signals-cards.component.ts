import {Signal} from "../../models/signal";
import {SignalType} from "../../models/signal-type";
import {SignalsService} from "../../services/signals-service";
import {RenderedComponent} from "../../core/components/rendered.component";
import {BaseComponent} from "../../core/components/base.component";
import {ConstructorComponentOptions} from "../../core/options/constructor-component-options";

// import * as template from "./signals-cards.component.hbs";

export class SignalsCardsComponent extends BaseComponent implements RenderedComponent {
    signals: Array<Signal> = [];
    signalTypes: Array<SignalType> = [];

    constructor(options: ConstructorComponentOptions, private _signalsService: SignalsService = new SignalsService()) {
        super(options);
    }

    render() {

        const template = require("./signals-cards.component.hbs");

        this._signalsService.getSignals().then(response => {
            this.signals = response.data.signals;
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

    extractSignalTypes(signals: Array<Signal>): any {
        return [];
    }

    onInit() {

    }

}