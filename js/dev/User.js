export const USER_URL = `https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture`

export class User { 
    
    constructor(data) {
        Object.assign(this , data);
    }
    
    capitalize() {
        this.name.first = this.name.first.charAt(0).toUpperCase() + this.name.first.slice(1)
        this.name.last = this.name.last.charAt(0).toUpperCase() + this.name.last.slice(1)
    }
}
