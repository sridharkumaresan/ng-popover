import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { PopoverComponent } from "./popover.component";
import { Popover } from "./popover.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PopoverComponent,
        Popover,
    ],
    exports: [
        PopoverComponent,
        Popover,
    ],
    entryComponents: [
        PopoverComponent
    ]
})
export class PopoverModule {

}