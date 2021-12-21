import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estadisticas } from '../models/estadisticas';

@Component({
  selector: 'app-datos-estadisticas',
  templateUrl: './datos-estadisticas.component.html',
  styleUrls: ['./datos-estadisticas.component.css']
})
export class DatosEstadisticasComponent implements OnInit {

  @Input()
  estadisticas: Estadisticas;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
