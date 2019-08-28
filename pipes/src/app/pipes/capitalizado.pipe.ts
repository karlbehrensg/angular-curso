import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, args: any[]): string {
        
        let nombres = value.split(" ");
        for (let i in nombres) {
            nombres[i]= nombres[i][0].toUpperCase();  
        }

        return nombres.join("");
    }
}