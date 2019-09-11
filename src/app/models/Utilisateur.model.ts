export class Utilisateur {

    constructor(
        public name = '',
        public role = '',
        public password = '',
        public id?: number
    ) { }
}
