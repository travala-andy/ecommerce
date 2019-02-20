import {Component, OnInit} from '@angular/core';
import {Currency} from "../../@theme/glossary/currency.constant";
import {NbMenuService} from "@nebular/theme";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {WarningComponent} from "../../@theme/components/warning/warning.component";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productList: Array<any> = [];
  subTotal: number = null;
  currency: string = '';

  constructor(private menuService: NbMenuService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.currency = Currency.USD;
    this.fakeCart();
    this.productList.forEach(product => {
      return this.subTotal += product.price * product.quantity;
    });
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  fakeCart() {
    this.productList = [
      {
        name: "Product 1",
        provider: "Ali33",
        price: "500",
        quantity: 3
      },
      {
        name: "Product 2",
        provider: "1vuonchuoi9",
        price: "600",
        quantity: 2
      },
      {
        name: "Product 3",
        provider: "Anonymous",
        price: "1000",
        quantity: 1
      },
    ]
  }

  setMaxValue(product) {
    if (product.quantity > 5) {
      return product.quantity = 5;
    }
  }

  checkPressKey() {
    return false;
  }

  doEncreaseQuantity(product) {
    return product.quantity += 1;
  }

  doDecreaseQuantity(product) {
    return product.quantity -= 1;
  }

  doProceedPayment() {
    console.log(this.productList)
  }

  doDeleteProduct() {
    const activeModal = this.modalService.open(WarningComponent,
      {backdrop: 'static', centered: true});
    activeModal.componentInstance.warningHeader = 'Delete from cart';
    activeModal.componentInstance.warningMessage
      = 'Do ya wanna remove this item out of cart ?';
  }

}
