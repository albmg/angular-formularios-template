import { FormControl } from '@angular/forms';

export const nombreApellidoPattern: string = '([a-zA-z]+) ([a-zA-z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerPaco = ( control: FormControl) => {
  //console.log(control.value)
  const valor:string = control.value?.trim().toLowerCase()
  console.log(valor)

  if ( valor === "paco") {
    return {
      noPaco: true
    }
  }

  return null
}


/* noPuedeSerPaco( control: FormControl) {
  //console.log(control.value)
  const valor:string = control.value?.trim().toLowerCase()
  console.log(valor)

  if ( valor === "paco") {
    return {
      noPaco: true
    }
  }

  return null
} */
