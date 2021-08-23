export class Qoute {
    showDescription: boolean;

    constructor(
        public id : number,
        public title : string ,
        public author : string ,
        public upvote : number ,
        public downvote : number ,
        public description : string ,
        public date : Date
    ){
        this.showDescription = false ;
    }
}




