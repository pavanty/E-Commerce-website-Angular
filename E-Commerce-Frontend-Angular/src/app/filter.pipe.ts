import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any ,filtername:string,propname:string): any {

    if(filtername==="" || !value){
      return value;
    }
    else{
      console.log(value);
      console.log(filtername);
    }
  const filterarray:any[]=[];


value.map((a:any)=>{

  if(a[propname].trim().toLowerCase().includes(filtername.toLowerCase())){
    filterarray.push(a)
  }
})


  return filterarray;

  }

}

//  for(let i=0; i<value.length;i++){
//     let titlename:string=value[i].title;
//     if(titlename.trim().toLowerCase().includes(filtername.toLowerCase())){
//       filterarray.push(value[i])
    

    // }

  // }