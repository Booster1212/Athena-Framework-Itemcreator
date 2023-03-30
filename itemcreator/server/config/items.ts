import { BaseItem } from "@AthenaShared/interfaces/item"

const itemCreatorBehavior = {"canDrop":true,"canStack":true}
const itemCreatorArray: Array<BaseItem> = [
    {
        "name": "Beer",
        "dbName": "item-creator-beer",
        "behavior": itemCreatorBehavior,
        "icon": "@AthenaPlugins/icons/Item-Creator/Beer",
        "data": {},
        "consumableEventToCall": "NO_EVENT",
        "maxStack": 64
    },
    {
        "name": "Energy Drink",
        "dbName": "item-creator-energy-drink",
        "behavior": itemCreatorBehavior,
        "icon": "@AthenaPlugins/icons/Item-Creator/Energy-Drink",
        "data": {},
        "consumableEventToCall": "NO_EVENT",
        "maxStack": 64
    }
]