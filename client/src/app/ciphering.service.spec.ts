import { TestBed } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { CipheringService } from "./ciphering.service";

describe("CipheringService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule.withServerTransition({ appId: "serverApp" }),
        FormsModule,
        HttpClientModule,
      ],
    })
  );

  it("should be created", () => {
    const service: CipheringService = TestBed.get(CipheringService);
    expect(service).toBeTruthy();
  });
});
