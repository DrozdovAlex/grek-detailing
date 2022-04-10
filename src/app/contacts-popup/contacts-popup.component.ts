import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { ModalService } from "../services/modal.service";
import { TelegramBotService } from "../services/telegram-bot.service";

@Component({
  selector: "app-contacts-popup",
  templateUrl: "./contacts-popup.component.html",
  styleUrls: ["./contacts-popup.component.scss"],
})
export class ContactsPopupComponent implements OnInit {
  public display$: Observable<"open" | "close">;
  public userForm: FormGroup;

  constructor(
    private modalService: ModalService,
    private telegramBot: TelegramBotService
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
    this.initForm();
  }

  private initForm(): void {
    this.userForm = new FormGroup({
      userName: new FormControl("", Validators.required),
      phoneNumber: new FormControl("", Validators.required),
    });
  }

  public close(): void {
    this.modalService.close();
    this.initForm();
  }

  public onSubmit(): void {
    this.telegramBot.sendNotification(this.userForm);
    this.close();
  }
}
