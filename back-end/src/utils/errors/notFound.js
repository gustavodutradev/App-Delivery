class NotFound extends Error{
    
    constructor(message){
        this.status = 404;
        super(message)
    }
    
}