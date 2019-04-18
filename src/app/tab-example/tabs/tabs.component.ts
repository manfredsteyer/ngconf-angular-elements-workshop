import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  template: `
  <div id="tabs">

    <div>
      <div class="tab-key" *ngFor="let tab of tabs">
        <a (click)="activate(tab)">{{tab.title}}</a>
      </div>
    </div>

    <div  style="clear:both;">
      <slot></slot>
      <!-- ^^ TODO: Register for slotchange event here -->
    </div>

  </div>
  `,
  styles: [`
    .tab-key {
      padding:20px;
      text-decoration: underline;
      cursor: pointer;
      float:left;
    }
  `],
   encapsulation: ViewEncapsulation.ShadowDom
})
export class TabsComponent {

  tabs: TabComponent[] = [];

  constructor() { }

  slotChange($event) {
    // TODO: Get projected tabs and store them in this.tabs
    // const assigned = $event.target.assignedNodes();
    // this.tabs = assigned.filter(n => n.localName === 'my-tab');

    // TODO: Activate first tab
    // if (this.tabs.length > 0) {
    //   this.activate(this.tabs[0]);
    // }
  }

  activate(tab: TabComponent) {
    // TODO: Hide all tabs but the passed one
    // this.tabs.forEach(t => t['hidden'] = true);
    // tab['hidden'] = false;
  }

}
