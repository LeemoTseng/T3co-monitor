import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    imports:[
        CommonModule,
        MatIconModule
    ],
    exports:[
        CommonModule,
        MatIconModule,
    ]
})
export class SharedModule{}