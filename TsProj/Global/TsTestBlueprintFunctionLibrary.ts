import { BlueprintFunctionLibrary } from "ue";

class TsTestBlueprintFunctionLibrary extends BlueprintFunctionLibrary
{
    static TestFunction():void{
        console.log("TsTestBlueprintFunctionLibrary TestFunction call! ")
    }
}

export default TsTestBlueprintFunctionLibrary