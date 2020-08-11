import { Component, Inject } from "@angular/core";
import { Cipher } from "./cipher";
import { CipheringService } from "./ciphering.service";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  title = "caesar cipher";
  phrase = "";
  offset: number;
  cipheredPhrase = "";
  errorMessage: string;
  previousQueries = this.storage.get("previousQueries") || "";

  constructor(
    private cipheringService: CipheringService,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}
  cipherModel = new Cipher(this.phrase, this.offset);

  onSubmit() {
    this.cipheringService.cipher(this.cipherModel).subscribe(
      (data) => {
        console.log("post call");
        [this.cipheredPhrase] = Object.values(data);
        this.previousQueries +=
          "<li>" +
          this.cipherModel.phrase +
          " --> " +
          Object.values(data) +
          "</li>";
        this.storage.set("previousQueries", this.previousQueries);
      },
      (error) => {
        console.log(`Error: ${error}`);
        this.errorMessage = "Oops, something went wrong!";
      }
    );
  }
}
