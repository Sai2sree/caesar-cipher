import { Module } from "@nestjs/common";
import { AngularUniversalModule } from "@nestjs/ng-universal";
import { join } from "path";
import { CipherController } from "./src/cipher/cipher.controller";
import { CipherService } from "./src/cipher/cipher.service";

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), "dist/browser"),
      bundle: require("../server/main"),
      liveReload: true,
    }),
  ],
  controllers: [CipherController],
  providers: [CipherService],
})
export class ApplicationModule {}
