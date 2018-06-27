import {Signal} from "../../models/signal";
import {SignalType} from "../../models/signal-type";
import {SignalsService} from "../../services/signals-service";
import {RenderedComponent} from "../../core/components/rendered.component";
import * as template from './signals-cards.component.hbs';

export class SignalsCardsComponent implements RenderedComponent {
    signals: Array<Signal> = [];
    signalTypes: Array<SignalType> = [];

    constructor(private _signalsService: SignalsService = new SignalsService()) {

    }

    render() {

        this._signalsService.getSignals().then(response => {
            this.signals = response.data.signals;
            this.signalTypes = this.extractSignalTypes(response.data.signals);
        });

    }

    extractSignalTypes(signals: Array<Signal>) {
        return [];
    }

    onInit() {

    }

}