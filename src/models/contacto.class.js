export class Contacto{
    name='';
    phone='';
    email='';
    state=false;
    constructor(name, phone, email, state) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.state = state;
    }
}