import * as electron from "electron";
import { Application } from "spectron";

class TestUtils {
    public app: Application;
    public windowsCount = 2;

    public windowByIndex() { return this.windowsCount - 1; }

    public setUp() {
        // start application
        this.app = new Application({
            // path to electron app
            args: ["./dist/main.js"],
            //path: "" + electron,
            path: './node_modules/electron/dist/electron',
            startTimeout: 30000,
            waitTimeout: 30000,
        });
        return this.app.start();
    }

    public tearDown() {
        const windows = this.app.client.getWindowHandles();
        this.app.client.closeWindow()
        this.app.stop()
        //return this.app.stop()
        //return this.app.client.closeWindow()
        //this.app.client.close(windows.sessionId);
    }
}

describe('add100', () => {
    it('should be 1 + 100 = 101', async () => {
        //const u = new TestUtils()
        console.log('#@@@@')
        const app = new TestUtils()
        await app.setUp()
        await app.tearDown()
    });
});