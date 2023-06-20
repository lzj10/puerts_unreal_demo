"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
const UE = require("ue");
class TsTestGameInstance extends UE.TypeScriptGameInstance {
    // root: Root;
    ReceiveInit() {
        console.warn('TsTestGameInstance.ReceiveInit ');
        this.StartNotify.Bind(() => this.OnStart());
    }
    //@no-blueprint
    OnStart() {
        console.warn('TsTestGameInstance.OnStart');
        // ReactUMG.init(this.GetWorld());
        // this.root = UI.Load();
        (0, puerts_1.on)('HMR.finish', (moduleName, module) => this.OnReload(moduleName, module));
    }
    //@no-blueprint
    OnReload(moduleName, module) {
        console.warn('HMR.finish', moduleName);
        // if (moduleName == "main-ui/index") {
        //     if (this.root) this.root.removeFromViewport();
        //     this.root = UI.Load();
        // }
    }
}
exports.default = TsTestGameInstance;
//# sourceMappingURL=TsTestGameInstance.js.map