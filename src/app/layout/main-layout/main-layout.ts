import { Component } from '@angular/core';
import { RouterOutlet } from '../../../../node_modules/@angular/router/types/_router_module-chunk';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'main-layout',
  imports: [RouterOutlet, Sidebar, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
