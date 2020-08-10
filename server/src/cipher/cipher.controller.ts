import { Controller, Get } from "@nestjs/common";

@Controller("cipher")
export class CipherController {
  @Get()
  getAll() {
    return { status: "cipher" };
  }
}
