import { Controller, Post, Body } from "@nestjs/common";
import { CipherService } from "./cipher.service";

@Controller("cipher")
export class CipherController {
  constructor(private readonly cipherService: CipherService) {}
  @Post()
  addCipher(@Body("phrase") phrase: string, @Body("offset") offset: number) {
    const res = this.cipherService.cipher(phrase, offset);
    return { ciphered: res };
  }
}
