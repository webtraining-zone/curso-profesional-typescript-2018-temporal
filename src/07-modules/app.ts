import {LoginComponent} from "./login-component.component";
import {CardsComponent} from "./cards-component.component";
import {ComponentsManager} from "./components-manager";

class App {
    start() {
        let manager = new ComponentsManager();
        manager.addComponent(new LoginComponent());
        manager.addComponent(new CardsComponent());
        manager.render();
    }
}

new App().start();