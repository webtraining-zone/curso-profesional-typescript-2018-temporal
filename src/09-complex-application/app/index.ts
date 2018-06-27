import {SignalsService} from "./services/signals-service";

class App {
    start() {
        console.log('>> Start()!');

        const service: SignalsService = new SignalsService();

        service.getSignals().then(response => {
            console.warn(response.data);
        })
    }
}

new App().start();