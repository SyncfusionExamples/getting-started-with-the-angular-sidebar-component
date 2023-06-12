import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {registerLicense} from '@syncfusion/ej2-base'
import { AppModule } from './app/app.module';
registerLicense("ORg4AjUWIQA/Gnt2VFhiQlJPcEBDWXxLflF1VWpTe1Z6dVNWESFaRnZdQV1lSXhSdEBjWXlXdHxX");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
