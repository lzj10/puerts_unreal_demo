"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestActor = void 0;
class TestActor {
    ReceiveBeginPlay() {
        console.log("Mixin TestActor ReceiveBeginPlay Call");
    }
    TestFunction() {
        console.log("Mixin TestActor TestFunction Call");
    }
    TestFunction2() {
        console.log("Mixin TestActor TestFunction2 Call");
    }
}
exports.TestActor = TestActor;
//# sourceMappingURL=TestActor.js.map