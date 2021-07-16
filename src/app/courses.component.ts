import { CoursesService } from './courses.service';
import {Component} from '@angular/core'

@Component({
    selector: 'courses' //<Coureses> "courses"

    ,template: `
    <h2>{{ "Title från variabel:" + title +  " Detta är från funktionen: " + getTitle() }}</h2>
    <ul>
            <li *ngFor="let course of courses">
            
            {{course}}
            
            </li>
    </ul>
    `
})
export class CoursesComponent{

    title = "List of courses";
    functionTitle = "Function List of courses"

    courses;

    constructor(service: CoursesService){
        
        this.courses = service.getCourses();
    }

    //logic for calling http sevice



    getTitle(){
        return this.functionTitle
    }

} 