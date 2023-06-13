const mongoose = require('mongoose');
module.exports = class account_admin{
    
    //fields----------------
    // id=-1
    fullname=''
    username=''
    password=''
    roles=''

    //getor setor-------------- 
    // get_id=()=>{return this.id;}
    // set_id =(val)=>{this.id=val};
    get_name=()=>{return this.name}
    set_name=(val)=>{this.name=val}
    get_user=()=>{return this.user}
    set_user=(val)=>{this.user=val}
    get_pass=()=>{return this.pass}
    set_pass=(val)=>{this.pass=val}
    get_roles=()=>{return this.roles}
    set_roles=(val)=>{this.roles=val}

    //constructor--------------
    constructor( name, user, pass, roles) {
        // this.id= id;
        this.fullname=name;
        this.username=user;
        this.password=pass;
        this.roles=roles;
    }

    

}