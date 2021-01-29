class Predictor {

    constructor(plate, date, time) {
        this.plate = plate;
        this.date = new Date(date);
        this.time = time;
        this.picoPlacaPlates = [
            ['1', '2'],
            ['3', '4'],
            ['5', '6'],
            ['7', '8'],
            ['9', '0'],
        ];
        this.weekday = [
            'monday', 
            'tuesday', 
            'wednesday', 
            'thursday', 
            'friday', 
            'saturday', 
            'sunday',
        ];
        this.restrictHours = [
            [7,0],//starts morning
            [9,30],//ends morning
            [16,0],//starts afternoon
            [19,30],//ends afternoon
        ];
        this.inputDay = '';
        this.lastDigit = '';
        this.dontDriveDay = '';     
    }

    validate() {
        let valid = true;

        if (!this.plate || !this.date || !this.time) { valid = false }

        if (!typeof time === 'string') { valid = false}

        return valid;
    }
        
    predict () {
        let result;
        let hour;
        let minutes;
        if(this.validate()){
            this.inputDay = this.weekday[this.date.getDay()];
            this.lastDigit = this.plate.split("").pop();
            this.time = this.time.split(':');
            hour = Number(this.time[0]);
            minutes = Number(this.time[1]);

            switch (true) {
                case this.picoPlacaPlates[0].includes(this.lastDigit):
                    this.dontDriveDay = this.weekday[0];
                    break;
                case this.picoPlacaPlates[1].includes(this.lastDigit):
                    this.dontDriveDay = this.weekday[1];
                    break;
                case this.picoPlacaPlates[2].includes(this.lastDigit):
                    this.dontDriveDay = this.weekday[2];
                    break;
                case this.picoPlacaPlates[3].includes(this.lastDigit):
                    this.dontDriveDay = this.weekday[3];
                    break;
                case this.picoPlacaPlates[4].includes(this.lastDigit):
                    this.dontDriveDay = this.weekday[4];
                    break;
                default:
                    return `Sorry ${this.plate} is not a valid plate, please try again`;
            }

            if (this.dontDriveDay) {
                if (this.inputDay === this.dontDriveDay) {
                    if (
                        (hour < this.restrictHours[0][0] || (hour > this.restrictHours[1][0] && minutes > this.restrictHours[1][1])) && 
                        (hour < this.restrictHours[2][0] || (hour > this.restrictHours[3][0] && minutes > this.restrictHours[3][1]))
                        ) {
                        return result = 'Great, lets drive';
                    } else {
                        return result = 'Sorry, pico & placa is currently running';
                    }
                } else {
                    return result = `Sorry, you can't drive on ${inputDay}s :(`;
                }
            }
        } else {
            return result = 'Sorry, there are missing/invalid arguments, please check and try again';
        }
    }
}

const canIDrive = new Predictor('PCF-1728', 'November 11,2020', '4:00');
console.log(canIDrive.predict());

module.exports =  {Predictor};




//hola

//otro comment
