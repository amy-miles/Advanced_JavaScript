class Registration{
    
    constructor(inName, inEmail, inPhone){
        this.setName(inName);
        this.setEmail(inEmail);
        this.setPhone(inPhone);
        this.registrationDate = this.getDate();
    }

    setName(inName){
        this.name = inName;
    }
    getName(){
        return this.name;
    }

    setEmail(inEmail){
        this.email = inEmail;
    }
    getEmail(){
        return this.email;
    }

    setPhone(inPhone){
        this.phone = inPhone;
    }
    getPhone(){
        return this.phone;
    }

    getRegistrationDate(){
        return this.registrationDate;
    }

    getDate(){
        const months = ["January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"];
        const d = new Date();
        let month = months[d.getMonth()];
        let day = d.getDate();
        let year = d.getFullYear();
        return `${month} ${day}, ${year}`;
    }



}