import {TestBed} from "@angular/core/testing";
import {AppHeaderComponent} from "./app-header.component";

describe("Header component Unit Testing", ()=>{

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [AppHeaderComponent]
    })
  })

  it("should create instance of Header Component", ()=>{
    TestBed.configureTestingModule({
      declarations:[AppHeaderComponent]
    })
    let fixture = TestBed.createComponent(AppHeaderComponent);
    let hdrObj = fixture.debugElement.componentInstance;
    expect(hdrObj).toBeTruthy();
  })



  it("it should verify cmpHeading data", ()=>{
    let fixture = TestBed.createComponent(AppHeaderComponent);
    let hdrObj = fixture.debugElement.componentInstance;
    expect(hdrObj.cmpHeading).toEqual("My Shopping Cart App");
  })

})
