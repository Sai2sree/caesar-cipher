import { Component } from "@angular/core";
import { Cipher } from "./cipher";
import { CipheringService } from "./ciphering.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  title = "caesar-cipher";
  phrase = "";
  offset: number;
  cipheredPhrase = "";
  errorMessage: string;

  constructor(private cipheringService: CipheringService) {}
  cipherModel = new Cipher(this.phrase, this.offset);
  onSubmit() {
    this.cipheringService.cipher(this.cipherModel).subscribe(
      (data) => {
        [this.cipheredPhrase] = Object.values(data);
      },
      (error) => {
        console.log(`Error: ${error}`);
        this.errorMessage = "Oops, something went wrong!";
      }
    );
  }
}
