import {SignalsCardsComponent} from "./components/signals-cards/signals-cards.component";


class App {
    start() {
        console.log('>> Start()!');
        new SignalsCardsComponent().render();
    }
}

new App().start();