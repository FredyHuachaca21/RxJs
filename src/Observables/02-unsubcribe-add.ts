import { interval, Observable, Observer} from 'rxjs'

const observer$ : Observer<number> = {
    next : valor => console.log('Siguente : ', valor),
    error: error => console.warn('Error : ', error),
    complete: () => console.info('Completado!')
};

const intervalo$ = new Observable<number>( subscriber =>{

    /* Crear un contador */

    let count = 0;

    const interval$ = setInterval(()=>{
        //Cada segundo
        count++;
        subscriber.next(count);
        console.log(count);
        
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    /* FINALIZA EL PROCESO CUANDO SE EJECUTA EL UNSUBSCRIBE  */

    return ()=>{
        clearInterval(interval$);
        console.log('Intérvalo destruido');
        
    }

});

const subs = intervalo$.subscribe(observer$);
const subs1 = intervalo$.subscribe(observer$);
const subs2= intervalo$.subscribe(observer$);

//Presenta problemas con el mètodo add
//subs.add(subs1).add(subs2);

setTimeout(()=>{
   // subs.unsubscribe();
    subs.unsubscribe();
    subs1.unsubscribe();
    subs2.unsubscribe();
    console.log('Completado el Timeout');
    
}, 6000)