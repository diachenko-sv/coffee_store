import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
    ngOnInit(): void {
        
    }
    header:string = 'header'
    changeBurgerMenu() {
        if (this.header === 'header') {
            this.header += ' active'
        } else {
            this.header = this.header.substring(0, 6)
        }
    }
}