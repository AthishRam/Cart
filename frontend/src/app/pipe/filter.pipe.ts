import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filtervalue: string, propName: string): any[] {
const result:any =[]
if(!value || filtervalue==='' || !propName){
return value; 
}
value.forEach((a:any)=>{
  if(a[propName].trim().toLowerCase().includes(filtervalue.toLowerCase())){
    result.push(a);
  }
});
return result;
}}
