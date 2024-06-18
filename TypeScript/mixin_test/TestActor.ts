import * as UE from "ue";
export interface TestActor extends UE.Game.Blueprints.TestActor.TestActor_C {}
export class TestActor {
  ReceiveBeginPlay(): void {
    console.log("Mixin TestActor ReceiveBeginPlay Call");
  }

  TestFunction(): void {
    console.log("Mixin TestActor TestFunction Call");
  }

  TestFunction2(): void {
    console.log("Mixin TestActor TestFunction2 Call");
  }
}
