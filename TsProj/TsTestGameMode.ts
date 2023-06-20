import { $ref } from 'puerts';
import * as UE from 'ue';


class TsTestGameMode extends UE.GameModeBase {
    ReceiveBeginPlay(): void {
        console.warn("TsTestGameMode.ReceiveBeginPlay  ");


        const OutActor = UE.NewArray(UE.Actor)
        UE.GameplayStatics.GetAllActorsWithTag(this,"TestCharacter",$ref(OutActor))

        if(OutActor.Num() > 0)
        {
            const AIController = UE.AIBlueprintHelperLibrary.GetAIController(OutActor.Get(0))
            const Bt = UE.BehaviorTree.Load("/Script/AIModule.BehaviorTree'/Game/Blueprints/TestBT.TestBT'")
            AIController.RunBehaviorTree(Bt)
        }

    }
}

export default TsTestGameMode;
