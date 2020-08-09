import { Component } from "@angular/core";
import { Cipher } from "./cipher";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  title = "caesar-cipher";
  phrase: string;
  offset: number;

  cipherModel = new Cipher(this.phrase, this.offset);
  onSubmit() {
    console.log("form submitted");
  }
}
