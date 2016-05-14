/**
 * Created by David on 2/11/16.
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {PatientDetailComponent} from './patient-detail.component';
import {Patient} from './patient';
import {PatientService} from './patient.service';

@Component({
    templateUrl: 'src/static/patients.component.html',
    styleUrls: ['src/styles/patients.component.css'],
    directives: [PatientDetailComponent]
})

export class PatientsComponent implements OnInit {
    constructor(private _patientService: PatientService,
                private _router: Router) {};

    public selectedPatient: Patient;
    public patients: Patient[];

    getPatients() {
        this._patientService.getPatients().then(patients => this.patients = patients);
    }

    gotoDetail(patient: Patient) {
        this.selectedPatient = patient;
        let link = ['PatientDetail', { id: this.selectedPatient.id }];
        this._router.navigate(link);
    }

    ngOnInit() {
        this.getPatients();
    }
}
