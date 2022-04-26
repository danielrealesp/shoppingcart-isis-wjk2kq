import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';

import {Item} from './item.model'

// Se importa la librería de Formularios para poder utilizar NgModel
import {FormsModule} from '@angular/forms';

describe('ShoppingCartComponent', () => {
    let component: ShoppingCartComponent;
    let fixture: ComponentFixture<ShoppingCartComponent>;
    let item = new Item('item', 9.95, 1);
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [ ShoppingCartComponent ]
        })
        .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ShoppingCartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('create an instance', () => {
        const shoppingCart = new ShoppingCartComponent();
        expect(shoppingCart).toBeTruthy();
    });
    it('correct basic invoice', () => {
        const shoppingCart = new ShoppingCartComponent();
        expect(shoppingCart.total())
        .toEqual(item.getPrice());
    });
    it('add a product', () => {
        const shoppingCart = new ShoppingCartComponent();
        const item2 = new Item('item2', 1, 10);
        shoppingCart.addItem();
        const items = shoppingCart.items();
        items[1].description = item2.getDescription();
        items[1].qty = item2.getQty();
        items[1].cost = item2.getPrice();
        expect(shoppingCart.total())
        .toEqual(item.getPrice() + item2.getPrice());
        shoppingCart.addItem();
        expect(shoppingCart.items().length)
        .toEqual(3);
    });
    it('delete a product', () => {
        const shoppingCart = new ShoppingCartComponent();
        var shoppingCartSize = 1;
        shoppingCart.addItem();
        shoppingCart += 1;
        shoppingCart.addItem();
        shoppingCart += 1;
        expect(shoppingCart.items().length)
        .toEqual(shoppingCart);
        shoppingCart.deleteItem(1);
        shoppingCart -= 1;
        expect(shoppingCart.items().length)
        .toEqual(shoppingCart);
        expect(shoppingCart.total())
        .toEqual(item.getPrice());
    });
});
