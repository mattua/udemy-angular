
// service is just a typescript class
export class LoggingService {

    logStatusChange(status:string){
        console.log('A server status changed, new status: '+status)
    }


}