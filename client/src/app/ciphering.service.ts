import { Injectable, isDevMode } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cipher } from "./cipher";

function configureEndPoint() {
  if (isDevMode) {
    return "http://localhost:4200/api/cipher";
  } else {
    return "<use production endpoint>";
  }
}

@Injectable({
  providedIn: "root",
})
export class CipheringService {
  endPoint = configureEndPoint();
  constructor(private http: HttpClient) {}
  cipher(cipher: Cipher) {
    console.log("phrase posted");
    return this.http.post(this.endPoint, cipher);
  }
}
