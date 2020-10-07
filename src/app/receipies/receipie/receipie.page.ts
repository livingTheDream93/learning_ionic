import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      if (!param.has("receipieId")) {
        return;
      }
      this.id = param.get("receipieId");
      this.receipie = this.rcpService.getReceipiebyId(this.id);
    });
  }

  deleteReceipie(id: string) {
    this.rcpService.deleteReceipie(id);
    this.router.navigate(["/receipies"]);
  }
}
