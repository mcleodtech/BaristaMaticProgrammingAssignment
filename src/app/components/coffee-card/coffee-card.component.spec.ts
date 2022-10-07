import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { CoffeeCardComponent } from './coffee-card.component';

describe('CoffeeCardComponent', () => {
  let component: CoffeeCardComponent;
  let fixture: ComponentFixture<CoffeeCardComponent>;
  let drink = 
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
    image_name: "coffee.jpg"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeCardComponent ],
      imports: [ HttpClientTestingModule ],
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

  it('should disable button', () => {
    component.makeDrink(drink)
    expect(component.disabled('Coffee')).toBeFalsy()
    component.makeDrink(drink)
    expect(component.disabled('Coffee') === true).toBeTruthy()
  })

});
