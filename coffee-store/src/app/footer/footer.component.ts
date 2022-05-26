import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class Footer implements OnInit { 

    classForm: string = 'footer__email-form'
    classButton: string = 'footer__button'
    buttonText: string = 'Подписаться'
    
    CheckEmail(event: any) {
        const inputValue: string = event.path[1][0].value

        const matchInputEmail = inputValue.match(/^\S+@\S+\.\S+$/) || [];
        const checkedEmail = Boolean(matchInputEmail[0])

       if (checkedEmail ==  true)  {            
            setTimeout(() => {
                this.buttonText = 'Спасибо за подписку!'
            }, 500)
            this.classButton = 'footer__button active'
        } else {
            this.classForm += ' wrong'
            setTimeout(() => {
                this.classForm = 'footer__email-form'
            }, 1700)
        }
    }

    ngOnInit(): void {  }
 }