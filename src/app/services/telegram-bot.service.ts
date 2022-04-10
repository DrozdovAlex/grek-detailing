import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
@Injectable({
  providedIn: "root",
})
export class TelegramBotService {
  private readonly telegramApi = "https://api.telegram.org";
  private readonly botToken = "5297890274:AAGjWQ_27cDUB3b2TSG0LBDLbeevFfHIjzA";
  private readonly chatId = "-691181647";

  constructor(private http: HttpClient) {}

  public sendNotification(userForm: FormGroup): void {
    const userName = userForm.get("userName").value;
    const phoneNumber = userForm.get("phoneNumber").value;
    const text = `Новая заявка:<b>%0A%0A${userName}%0A${phoneNumber}</b>`;
    const url = `${this.telegramApi}/bot${this.botToken}/sendMessage?chat_id=${this.chatId}&parse_mode=html&text=${text}`;
    this.http.post(url, "gf").subscribe();
  }
}
