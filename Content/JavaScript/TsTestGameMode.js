"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
const UE = require("ue");
class TsTestGameMode extends UE.GameModeBase {
    ReceiveBeginPlay() {
        console.warn("TsTestGameMode.ReceiveBeginPlay  ");
        const OutActor = UE.NewArray(UE.Actor);
        UE.GameplayStatics.GetAllActorsWithTag(this, "TestCharacter", (0, puerts_1.$ref)(OutActor));
        if (OutActor.Num() > 0) {
            const AIController = UE.AIBlueprintHelperLibrary.GetAIController(OutActor.Get(0));
            const Bt = UE.BehaviorTree.Load("/Script/AIModule.BehaviorTree'/Game/Blueprints/TestBT.TestBT'");
            AIController.RunBehaviorTree(Bt);
        }
    }
}
exports.default = TsTestGameMode;
//# sourceMappingURL=TsTestGameMode.js.map