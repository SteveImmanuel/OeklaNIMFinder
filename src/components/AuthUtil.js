export function authenticate(){
    const token = localStorage.getItem('token');
    const expiry = new Date(localStorage.getItem('expire'));
    const now = new Date();
    now.setDate(now.getDate());
    if(token && expiry){
        if(now<=expiry){
            return 1; //valid
        }else{
            return 0; //session timeout
        }
    }else{
        return null;
    }
}

export function updateExpiry(){
    let expiry = new Date(localStorage.getItem('expire'));
    expiry.setDate(expiry.getDate()+1);
    localStorage.setItem('expire',expiry);
}