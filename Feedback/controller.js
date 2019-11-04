var app = angular.module('myApp', []);
app.controller('control', function ($scope){
    $scope.name='';
    $scope.email='';
    $scope.feedDoctor='';
    $scope.feedFood='';
    $scope.rating='';
    
    $scope.Feedbacks = [
        ['Ram','Ram@gmail.com','Doctors were very firendly','Food was nice',5],
        ['Sam','Sam@gmail.com','Doctors were very Rude','Food was not at all good',1],
        
    ];
    $scope.patientNames = ['Ram','Sam','Raju','Ravi Kumar'];
    $scope.patientEmails = ['Ram@gmail.com','Sam@gmail.com','Raju@gmail.com','Ravikumar@gmail.com'];

    $scope.checkNull=function()
    {
        if($scope.name=='' || $scope.email=='' ||$scope.feedDoctor=='' ||$scope.feedFood=='' ||$scope.rating=='')
            return true;
        return false;

    }
    $scope.checkMail=function(){
        
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($scope.email))
    {
     return (true);
    }
    alert("You have entered an invalid email address!");
    return (false);

    }
    $scope.addFeedback=function(formValid) {
        if($scope.checkNull())
        {
            alert('Fill the blank fields');
            return;
        }

        if(formValid){
            if(!$scope.checkMail())
                return;
        }


        alert("added");
        var feedback = [$scope.name,$scope.email,$scope.feedDoctor,$scope.feedFood,parseFloat($scope.rating)];
        $scope.Feedbacks.push(feedback);
        $scope.name='';
        $scope.email='';
        $scope.feedDoctor='';
        $scope.feedFood='';
        $scope.rating='';
    };


    $scope.minPossibleName=function(array)
    {
            var A= array.concat().sort(), 
            a1= A[0], a2= A[A.length-1], L= a1.length, i= 0;
            while(i<L && a1.charAt(i)=== a2.charAt(i)) i++;
            return a1.substring(0, i);
    }
    $scope.autoComplete = function(target,keyCode){
        var simillarNames=[];
        if(keyCode == 17) {
            
            if(target=="name" && $scope.name!=''){
            for (let i = 0; i < $scope.patientNames.length; i++) {
                if($scope.patientNames[i].includes($scope.name))
                    simillarNames.push($scope.patientNames[i]);
                
                
                }
             
            if(simillarNames.length==1){
                $scope.name = simillarNames[0]
            }
            else if (simillarNames.length>1){
                $scope.name = $scope.minPossibleName(simillarNames);
            }
            
            }

            else if($scope.email!=''){
                var simillarEmails=[];


                for (let i = 0; i < $scope.patientEmails.length; i++) {
                    if($scope.patientEmails[i].includes($scope.email))
                    simillarEmails.push($scope.patientEmails[i]);

                    }
                    if(simillarEmails.length==1){

                        $scope.email = simillarEmails[0];

                    }
                    else if (simillarEmails.length>1){
                        $scope.email = $scope.minPossibleName(simillarEmails);
                    }

                }

        } 
     }





});
