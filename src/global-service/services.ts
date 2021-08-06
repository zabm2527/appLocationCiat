import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ServicesApiRest {
  private url = "http://localhost:9000/api";

  constructor(private httpclient: HttpClient) {}

  public getAllZonesDangerous() {
    let urlcomplete = this.url + "/getAllZonesDangerous";

    return this.httpclient.get(urlcomplete);
  }

  public getAllCattles() {
    let urlcomplete = this.url + "/getAllCattles";

    return this.httpclient.get(urlcomplete);
  }
}
