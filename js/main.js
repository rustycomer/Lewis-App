/*//All variables are initally declared here
var squadOnePostOneFirst, squadOnePostOneSecond, squadOnePostOneTotal, squadOnePostTwoFirst, squadOnePostTwoSecond, squadOnePostTwoTotal, squadOnePostThreeFirst, squadOnePostThreeSecond, squadOnePostThreeTotal, squadOnePostFourFirst, squadOnePostFourSecond, squadOnePostFourTotal, squadOnePostFiveFirst, squadOnePostFiveSecond, squadOnePostFiveTotal, squadTwoPostOneFirst, squadTwoPostOneSecond, squadTwoPostOneTotal, squadTwoPostTwoFirst, squadTwoPostTwoSecond, squadTwoPostTwoTotal, squadTwoPostThreeFirst, squadTwoPostThreeSecond, squadTwoPostThreeTotal, squadTwoPostFourFirst, squadTwoPostFourSecond, squadTwoPostFourTotal, squadTwoPostFiveFirst, squadTwoPostFiveSecond, squadTwoPostFiveTotal, squadThreePostOneFirst, squadThreePostOneSecond, squadThreePostOneTotal, squadThreePostTwoFirst, squadThreePostTwoSecond, squadThreePostTwoTotal, squadThreePostThreeFirst, squadThreePostThreeSecond, squadThreePostThreeTotal, squadThreePostFourFirst, squadThreePostFourSecond, squadThreePostFourTotal, squadThreePostFiveFirst, squadThreePostFiveSecond, squadThreePostFiveTotal;
*/
//Squad One Shooter One variables set
var firstNameSquadOnePostOne = $('#firstNameSquadOnePostOne').val();
var lastNameSquadOnePostOne = $('#lastNameSquadOnePostOne').val();
var squadOnePostOneFirst = $('#squadOnePostOneFirst').val();
var squadOnePostOneSecond = $('#squadOnePostOneSecond').val();




// Constructor function for building the shooter object
function shooter(firstName, lastName, f25, s25) {
    this.first25 = f25;
    this.second25 = s25;
    this.total = function(f25, s25){
        var total50 = f25 + s25;
        return total50;
    };
};
//Setting all of Shooter1 properties
var shooter1 = new shooter(firstNameSquadOnePostOne, lastNameSquadOnePostOne, squadOnePostOneFirst, squadOnePostOneSecond);
var squadOnePostOneTotal = shooter1.total;
$("#squadOnePostOneSecond").change(function(){
    $("#squadOnePostOneTotal").html(function(){
        return squadOnePostOneTotal;
    });
});  
