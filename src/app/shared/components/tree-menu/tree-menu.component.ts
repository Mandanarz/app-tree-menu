import { Component, OnInit, Renderer2, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {

  @ViewChild('treeMenuContainer') treeMenuContainer: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    if (this.treeMenuContainer) {
      console.log(this.treeMenuContainer);
      let items = this.treeMenuContainer.nativeElement.querySelectorAll("li");
      for (let i = 0; i < items.length; i++) {
        this.makeList(items[i]);
      };

    };
  }

  makeList(li) {
    let self = this;
    if (li.querySelector("ul")) {
      let nodes = li.querySelectorAll("ul");
      let ul = nodes[0];
      this.renderer.setStyle(ul, 'display', 'none');;
      let span = this.renderer.createElement('span');
      span.className = "collapsed";
      span.addEventListener("click", (event: Event) => {
        ul.style.display = (ul.style.display == "none") ? "block" : "none";
        span.className = (ul.style.display == "none") ? "collapsed" : "expanded";
      });
      li.appendChild(span);
    };
  }

}
