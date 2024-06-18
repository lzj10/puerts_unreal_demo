"use strict";
/*
 * @Author: LiuZijia
 * @Date: 2024-06-18 10:31:28
 * @Description:
 */
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
const UE = require("ue");
const TestActor_1 = require("./TestActor");
console.log("------------------------mixinStart----------------------------");
// 父类mixin
let ucls = UE.Class.Load('/Game/Blueprints/TestActor.TestActor_C');
const MixinTest = puerts_1.blueprint.tojs(ucls);
const MixinTestWithMixin = puerts_1.blueprint.mixin(MixinTest, TestActor_1.TestActor);
//加载子类
let uclsChild = UE.Class.Load('/Game/Blueprints/TestActor_Child.TestActor_Child_C');
// 创建子类
// let uclsChild = UE.Class.Load('/Game/Blueprints/TestActor_Child2.TestActor_Child2_C');
let gameInstance = puerts_1.argv.getByName("GameInstance");
let o = UE.GameplayStatics.BeginDeferredActorSpawnFromClass(gameInstance, uclsChild, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined);
UE.GameplayStatics.FinishSpawningActor(o, undefined);
o.TestFunction();
//# sourceMappingURL=MixinStart.js.map