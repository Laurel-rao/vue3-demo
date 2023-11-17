import Home from "@/demos/home/homeIndex.vue";
import NotFound from "@/demos/home/notFound.vue";
import QueryDemo from "@/demos/hookRemote/queryDemo.vue";
import HookRemote from "@/demos/hookRemote/hookDemo.vue";
import HookDemo from "@/demos/hookDemo/hookDemo.vue";
import TransAttr from "@/demos/transAttr/transAttr.vue";
import AdvanceSlot from "@/demos/advanceSlot/advanceSlot.vue";

export const routers =[
    {"name": "home", "path": "/", "component": Home},
    {"name": "notFound", "path": "/notFound", "component": NotFound},
    {"name": "TanStackDemo", "path": "/TanStackDemo", "component": QueryDemo},
    {"name": "HookRemote", "path": "/HookRemote", "component": HookRemote},
    {"name": "HookDemo", "path": "/HookDemo", "component": HookDemo},
    {"name": "透传", "path": "/attr", "component": TransAttr},
    {"name": "插槽 Slot", "path": "/slot", "component": AdvanceSlot},
]
