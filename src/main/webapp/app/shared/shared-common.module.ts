import { NgModule } from '@angular/core';

import { JhipsterGatwaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterGatwaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterGatwaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterGatwaySharedCommonModule {}
