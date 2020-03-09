import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {WorkerService} from "../../service/worker.service";

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  public workers = [];

  constructor(private router: Router, private workerService: WorkerService) {
  }

  ngOnInit(): void {
    this.workerService.getAllWorkers().subscribe(data => this.workers = data);
  }

}
