import { Component } from '@angular/core';
import {Startswith} from './friends-list.pipe';


@Component({
    selector : 'pm-products',
    templateUrl : 'app/friends/friends-list.component.html'
})
export class FriendListComponent{
    pageTitle : string= 'Friends List';

   friends:any = [
         {"name": "Avnesh", "hobby": "Coding"},
         {"name": "Kaushik", "hobby": "Coding"},
         {"name": "Archana", "hobby": "Cooking"},
         {"name": "Piyush", "hobby": "Singing"},
         {"name": "Archit", "hobby": "Sports"},
         {"name": "Hema", "hobby": "Gossiping"}
    ];

  


}


