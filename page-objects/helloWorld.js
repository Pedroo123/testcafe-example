import { Selector } from 'testcafe';

class HelloWorldPage {

    btnStart = Selector("#start").withText("Start");

    loadingBar = Selector("#loading");

    finished = Selector("#finish").withText("Hello World!");
}

export default HelloWorldPage();
