import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalDashboardTileService {

  constructor() { }

  loaded = false;

  load(): void {
    if (this.loaded) return;

    // TODO: Load script
  }

}
