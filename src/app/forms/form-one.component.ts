import {
    Component
} from '@angular/core';

import { Book } from '../shared/models/books';
import { bookData } from '../shared/data/book-data';

@Component({
    template: `
    <form>
        <div
            clickOutside
            class="select-container"
            (onClickOutside)="handleClickOutside($event)">
            <md-input-container (click)="handleClickInside(focusable)">
                <input
                    mdInput
                    name="selected"
                    (click)="handleClickInside(focusable)"
                    [(ngModel)]="selected"
                    placeholder="Input One"
                    readonly>
            </md-input-container>
            <div
                class="select-dropdown"
                [hidden]="hide">
                <div class="search-container">
                    <input
                        #focusable
                        class="search"
                        (keyup)="handleSearch($event)">
                    <span
                        class="clr-button"
                        (click)="handleClear(focusable)">
                        x
                    </span>
                </div>
                <ul class="dropdown-list">
                    <li
                        *ngFor="let book of filteredBooks"
                        class="mat-option"
                        role="option"
                        (click)="handleSelect(book)">
                        {{ book.name }}
                    </li>
                </ul>
            </div>
        </div>
        <br>
        {{ books | json }}
    </form>
    `,
    styles: [`
        .select-container {
            position: relative;
            display: inline-block;
        }
        .search-container {
            padding: 15px;
            text-align: left;
        }
        .search {
            width: calc(100% - 40px);
            padding: 5px;
        }
        .select-dropdown {
            box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
            top: -20px;
            pointer-events: auto;
            position: absolute;
            background: #fff;
            z-index: 1000;
        }
        ul.dropdown-list {
            list-style: none;
            padding: 0;
            margin: 0;
            height: auto;
            max-height: 300px;
            overflow-y: scroll;
        }
        .dropdown-list li {
            cursor: pointer;
        }
        .clr-button {
            cursor: pointer;
            float: right;
            display: inline-block;
            text-align: center;
            padding: 5px;
            width: 15px;
            height: 15px;
            color: #f66;
        }
    `]
})
export class FormOneComponent {

    books = bookData;
    selected = '';
    filteredBooks: Book[];
    hide = true;

    constructor() {
        this.filteredBooks = this.books;
    }

    handleSearch(event: any): void {
        this.filteredBooks = this.books.filter( (book) => {
            return book.name.includes(event.target.value);
        });
    }

    handleClickInside(el: HTMLElement): void {
        this.hide = false;
        el.focus();
    }

    handleClickOutside(event: any): void {
        this.hide = true;
    }

    handleSelect(book: Book): void {
        this.selected = book.name;
        this.hide = true;
    }

    handleClear(el: HTMLInputElement): void {
        el.value = '';
        this.filteredBooks = this.books;
    }

}
