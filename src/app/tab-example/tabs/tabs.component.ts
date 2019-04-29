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
      <slot (slotchange)="slotChange($event)"></slot>
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
<<<<<<< HEAD

    const assigned = $event.target.assignedNodes();
    this.tabs = assigned.filter(n => n.localName === 'my-tab');
    
    if (this.tabs.length > 0) {
        this.activate(this.tabs[0]);
    }

=======
    // TODO: Get projected tabs from $event.target.assignedNodes();
    //   and store them in this.tabs

ivate first tab
>>>>>>> 55c6e27... disable linting for this demo
  }

  activate(tab: TabComponent) {
    this.tabs.forEach(t => t['hidden'] = true);
    tab['hidden'] = false;
  }

}
