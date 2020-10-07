import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ReceipiesServiceService } from "../receipies-service.service";
import { Receipie } from "../receipies.model";

@Component({
  selector: "app-receipie",
  templateUrl: "./receipie.page.html",
  styleUrls: ["./receipie.page.scss"],
})
export class ReceipiePage implements OnInit {
  receipie: Receipie;
  id: string;
  constructor(
    private rcpService: ReceipiesServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      if (!param.has("receipieId")) {
        this.router.navigate(["/receipies"]);
        return;
      }
      this.id = param.get("receipieId");
      this.receipie = this.rcpService.getReceipiebyId(this.id);
    });
  }

  deleteReceipie(id: string) {
    this.alertCtrl.create({
      header: "Are you sure",
      message: "Do you really want to delete the receipie?",
      buttons: [
        {
          text: "cancel",
          role: "cancel",
        },
        {
          text: "delete",
          handler: () => {
            this.rcpService.deleteReceipie(id);
            this.router.navigate(["/receipies"]);
          },
        },
      ],
    }).then(alertEl => {
      alertEl.present()
    });
  }
}
