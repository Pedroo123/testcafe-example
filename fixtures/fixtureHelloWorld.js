import helloWorld from "../page-objects/helloWorld";
import {t} from 'testcafe';

fixture `Exemplo de teste com testCafe`.page `https://the-internet.herokuapp.com/dynamic_loading/1`

test('Validando um seletor basico', async t => {

    await t
        .click(helloWorld.btnStart)
        .expect(helloWorld.finished).exists.ok();
});