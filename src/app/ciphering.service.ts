import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cipher } from "./cipher";

@Injectable({
  providedIn: "root",
})
export class CipheringService {
  endPoint = "http://localhost:4200/api/cipher";
  constructor(private http: HttpClient) {}
  cipher(cipher: Cipher) {
    console.log("phrase posted");
    return this.http.post(this.endPoint, cipher);
  }
}
