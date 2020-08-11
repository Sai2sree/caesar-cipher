import { TestBed } from "@angular/core/testing";

import { CipheringService } from "./ciphering.service";

describe("CipheringService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CipheringService = TestBed.get(CipheringService);
    expect(service).toBeTruthy();
  });
});
