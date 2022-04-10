import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private display: BehaviorSubject<"open" | "close"> = new BehaviorSubject(
    "close"
  );

  public watch(): Observable<"open" | "close"> {
    return this.display.asObservable();
  }

  public open(): void {
    this.display.next("open");
  }

  public close(): void {
    this.display.next("close");
  }
}
