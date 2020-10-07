import { Injectable } from "@angular/core";
import { Subject, Subscriber } from "rxjs";
import { Receipie } from "./receipies.model";

@Injectable({
  providedIn: "root",
})
export class ReceipiesServiceService {
  private receipies: Receipie[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl:
        "https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg",
      ing: ["french fries", "Potatoes", "Sauce"],
    },
    {
      id: "r2",
      title: "Pasta",
      imageUrl:
        "https://hips.hearstapps.com/delish/assets/17/36/1504715566-delish-fettuccine-alfredo.jpg",
      ing: ["Pasta", "Soy Sauce"],
    },
  ];
  changeReceipie = new Subject<Receipie[]>();
  constructor() {}

  getAllReceipies() {
    this.changeReceipie.next(this.receipies);
  }

  getReceipiebyId(id: string) {
    return {
      ...this.receipies.find((el) => {
        return el.id === id;
      }),
    };
  }

  deleteReceipie(id: string) {
    this.receipies = [
      ...this.receipies.filter((el) => {
        return el.id !== id;
      }),
    ];
    this.changeReceipie.next(this.receipies);
    // Alternate approach
    /**
     * this.receipies = this.receipies.filter(el => {
     *  return el.id !== id
     * })
     *
     * this way the receipies will automatically get updated
     * but since we avoild direct mutation of data, its better to add a subscriber
     */
  }
}
