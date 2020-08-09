import { Component } from "@angular/core";
import { Cipher } from "./cipher";
import { CipheringService } from "./ciphering.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  title = "caesar-cipher";
  phrase: string;
  offset: number;
  constructor(private cipheringService: CipheringService) {}
  cipherModel = new Cipher(this.phrase, this.offset);
  onSubmit() {
    console.log("form submitted");
    this.cipheringService.cipher(this.cipherModel).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
