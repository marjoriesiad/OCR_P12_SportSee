export default class UserMainData{
    constructor(data) {
        this.id = data.id;
        this.firstName = data.userInfos.firstName;
        this.todayScore = data.todayScore || data.score;
        this.score = this.getFormat(this.todayScore);
        this.keyData = data.keyData
    }

    /* JSDOC*/
    getFormat(){
        return [{value: this.todayScore * 100}];
    }
}