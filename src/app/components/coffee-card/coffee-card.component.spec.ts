import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DrinkDispensorService } from 'src/app/services/drink-dispensor.service';

import { CoffeeCardComponent } from './coffee-card.component';

describe('CoffeeCardComponent', () => {
  let component: CoffeeCardComponent;
  let fixture: ComponentFixture<CoffeeCardComponent>;
  let coffee = 
  {
    id: 1,
    name: "Coffee",
    ingredients: [
      {
        units: 3,
        ingredient: "Coffee"
      },
      {
        units: 1,
        ingredient: "Sugar"
      },
      {
        units: 1,
        ingredient: "Cream"
      }
    ],
    price: 2.75,
    image_name: "coffee.jpg"
}

  let decafCoffee = 
  {
    id: 2,
    name: "Decaf Coffee",
    ingredients: [
      {
        units: 3,
        ingredient: "Decaf Coffee"
      },
      {
        units: 1,
        ingredient: "Sugar"
      },
      {
        units: 1,
        ingredient: "Cream"
      }
    ],
    price: 2.75,
    image_name: "decaf-coffee.jpg"
}



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeCardComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [provideMockStore({ }), DrinkDispensorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => { // Remove inject()
    expect(DrinkDispensorService).toBeTruthy();
  });

  it('should disable button', () => {
    component.makeDrink(coffee)
    expect(component.disabled('Coffee')).toBeFalsy()
    component.makeDrink(coffee)
    expect(component.disabled('Coffee')).toBeFalsy()
    component.makeDrink(coffee)
    expect(component.disabled('Coffee')).toBeFalsy()
    component.makeDrink(coffee)
    expect(component.disabled('Coffee')).toBeFalsy()
  })

  it('should disable multiple buttons', () => {
    component.makeDrink(coffee)
    expect(component.disabled('Coffee')).toBeFalsy()
    component.makeDrink(coffee)
    expect(component.disabled('Coffee')).toBeFalsy()
    component.makeDrink(coffee)
    expect(component.disabled('Coffee')).toBeFalsy()
    component.makeDrink(coffee)
    expect(component.disabled('Coffee')).toBeFalsy()
    component.makeDrink(decafCoffee)
    expect(component.disabled('Decaf Coffee')).toBeFalsy()   
    expect(component.disabled('Coffee')).toBeFalsy()
    component.makeDrink(decafCoffee)
    expect(component.disabled('Decaf Coffee')).toBeFalsy()
    expect(component.disabled('Coffee')).toBeFalsy()
    component.makeDrink(decafCoffee)
    expect(component.disabled('Decaf Coffee')).toBeFalsy()
    expect(component.disabled('Coffee')).toBeFalsy()
    component.makeDrink(decafCoffee)
    expect(component.disabled('Decaf Coffee')).toBeFalsy()
    expect(component.disabled('Coffee')).toBeFalsy()
  })

});
