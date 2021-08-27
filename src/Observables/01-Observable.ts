import { Observable, Observer} from 'rxjs'

const observer$ : Observer<string> = {
    next : valor => console.log('Siguente [next] : ', valor),
    error: error => console.warn('Error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
};


//const obs$ = Observable.create();
 const obs$ = new Observable<string>( subs =>{

    subs.next('hola');
    subs.next('hola')
    subs.next('hola')

    subs.complete();

    subs.next('Fred');

 });

 /* Llamar un subscribe de forma simple */
 //obs$.subscribe(console.log)

 /* Llamar un subcribe de forma tradicional */
 /* obs$.subscribe(
     siguiente => console.log('next : ', siguiente ),
     error => console.warn('error: ', error),
     () => console.info('completado!!!')
    
    ) */

/* Llamar un subscribe de forma correcta mediante un interfaz Observer */

obs$.subscribe(observer$)