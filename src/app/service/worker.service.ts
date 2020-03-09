import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class WorkerService {

  public url: string = 'http://localhost:8080/worker/all';

  constructor(private http: HttpClient) {
  }

  getAllWorkers() {
    return this.http.get<Worker[]>(this.url);
  }
}
