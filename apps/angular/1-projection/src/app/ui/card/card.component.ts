import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardType } from '../../model/card.model';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  template: `
    <div class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4">
      <img [src]="img" width="200px" />

      <section>
        <app-list-item
          *ngFor="let item of list"
          [name]="item.firstName"
          [id]="item.id"
          (delete)="delete.emit(item.id)"></app-list-item>
      </section>

      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="add.emit()">
        Add
      </button>
    </div>
  `,
  standalone: true,
  imports: [NgIf, NgFor, ListItemComponent],
})
export class CardComponent {
  @Input() list: any[] | null = null;
  @Input() img!: string;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();

  CardType = CardType;

  constructor() {}
}
