import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _candidateService: CandidateService) { }
  Candidate_ID;
  current_candidate = [];
  ngOnInit() {
    this.Candidate_ID = parseInt(this.route.snapshot.paramMap.get('id'));
    this._candidateService.getcandidatesdetail(this.Candidate_ID)
      .subscribe(data => this.current_candidate = data);
  }

}
