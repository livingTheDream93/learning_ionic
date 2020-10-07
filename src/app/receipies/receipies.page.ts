import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscriber, Subscription } from "rxjs";
import { ReceipiesServiceService } from "./receipies-service.service";
import { Receipie } from "./receipies.model";

@Component({
  selector: "app-receipies",
  templateUrl: "./receipies.page.html",
  styleUrls: ["./receipies.page.scss"],
})
export class ReceipiesPage implements OnInit, OnDestroy {
  receipies: Receipie[];
  receipieSub: Subscription;

  constructor(
    private rcpService: ReceipiesServiceService
  ) {}

  ngOnInit() {
    this.receipieSub = this.rcpService.changeReceipie.subscribe(
      (receipie: Receipie[]) => {
        this.receipies = receipie
      }
    );
    this.rcpService.getAllReceipies()
  }

  ngOnDestroy() {
    this.receipieSub.unsubscribe()
  }
}
