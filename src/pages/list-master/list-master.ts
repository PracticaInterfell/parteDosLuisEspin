import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { BookingProvider } from "../../providers/booking/booking";
import { SessionProvider } from "../../providers/session/session";

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {

  user: any;
  data: any[];

  constructor(public navCtrl: NavController, 
    private bookingService:BookingProvider,
    private session: SessionProvider,
    public modalCtrl: ModalController) {

    this.user = this.session.getUser();
    this.bookingService.getBookings(this.user, "miguel@tuten.cl").subscribe(mData => {
      if (mData > 0) {
        for (let index = 0; index < mData.length; index++) {
          const mobj: any = new Object();
          mobj.bookingId = mData[index].bookingId;
          mobj.cliente = mData[index].tutenUserClient.firstName + ' ' + mData[index].tutenUserClient.lastName;
          mobj.fecha = mData[index].bookingTime;
          mobj.direccion = mData[index].locationId.streetAddress;
          mobj.precio = mData[index].bookingPrice;
          this.data.push(mobj);
        }
      } else {
        this.data = this.session.getDataTest();
      }
    }, err => console.log(err));
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.data = this.session.getDataTest();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {
        return (item.bookingId.indexOf(val) > -1);
      })
    }
}

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item:any) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
