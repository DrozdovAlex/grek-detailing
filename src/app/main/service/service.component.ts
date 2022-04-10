import { Component, Input, OnInit } from "@angular/core";
import { ServiceModel } from "../models/service.models";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.scss"],
})
export class ServiceComponent implements OnInit {
  @Input() service: ServiceModel;

  constructor() {}

  ngOnInit() {}
}
