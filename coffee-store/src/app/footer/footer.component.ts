import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class Footer implements OnInit { 

    classButton: string = 'footer__button'
    buttonText:string = 'Подписаться'
    ChangeView() {
        setTimeout(() => this.buttonText = 'Спасибо за подписку!'
        , 500)
        this.classButton = 'footer__button active'
        
    }

    ngOnInit(): void {
        
    }
 }