import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./logging.service";

@Injectable()
export class AccountService {
  constructor(private loggingService: LogginService) {}
  accounts = [
    { name: "Master Account", status: "active" },
    { name: "Test Account", status: "inactive" },
    { name: "Hidden Account", status: "unknown" },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }

  statusUpdated = new EventEmitter<string>();
}
