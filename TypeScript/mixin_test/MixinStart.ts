/*
 * @Author: LiuZijia
 * @Date: 2024-06-18 10:31:28
 * @Description: 
 */

import { argv, blueprint } from 'puerts';
import * as UE from 'ue';
import { TestActor } from './TestActor';

console.log("------------------------mixinStart----------------------------");

// 父类mixin
let ucls = UE.Class.Load('/Game/Blueprints/TestActor.TestActor_C');
const MixinTest = blueprint.tojs<typeof UE.Game.Blueprints.TestActor.TestActor_C>(ucls);
const MixinTestWithMixin = blueprint.mixin(MixinTest, TestActor);


//加载子类
let uclsChild = UE.Class.Load('/Game/Blueprints/TestActor_Child.TestActor_Child_C');
// 创建子类
// let uclsChild = UE.Class.Load('/Game/Blueprints/TestActor_Child2.TestActor_Child2_C');
let gameInstance = (argv.getByName("GameInstance") as UE.GameInstance);
let o =  UE.GameplayStatics.BeginDeferredActorSpawnFromClass(gameInstance,uclsChild, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined) as UE.Game.Blueprints.TestActor_Child.TestActor_Child_C;
UE.GameplayStatics.FinishSpawningActor(o, undefined);
o.TestFunction();
