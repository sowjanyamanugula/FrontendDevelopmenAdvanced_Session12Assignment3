import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'StartswithPipe',
    
})

export class Startswith implements PipeTransform{
    transform(items: any[]): any {
        return items.filter(item => item.name.charAt(0)=='A');
    }
   
}