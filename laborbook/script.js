(function(){
  var app = angular.module("phonebook",[]);
  var appController=function($scope){
    
    $scope.rowLimit=5;
    $scope.currentPage = 0;
  $scope.numPerPage = 9;
 
  
     $scope.info=[
{name:"Ramu",phone:'05-020-2356',  aadhar:'4233-324-2441',email:'ramu@yahoo.com'},
{name:'Shamu', phone:'02-030-4986', aadhar:'7233-324-2441', email:'shamu@yahoo.com'},
{name:'Lalu', phone:'01-111-2357', aadhar:'2233-324-2441', email:'lalua@gmail.com'},
{name:'Kalu', phone:'01-268-1548', aadhar:'5233-324-2441', email:'kalu@gmail.com'},
{name:'Sumesh', phone:'02-030-4986', aadhar:'8233-324-2441', email:'sumesh@yahoo.com'},
{name:'Rajveer', phone:'01-111-2357', aadhar:'2233-324-2441', email:'rajveer@gmail.com'},
{name:'Anmol', phone:'01-268-1548', aadhar:'1233-324-2441', email:'anmol@gmail.com'},
{name:'Kalawati', phone:'02-030-4986', aadhar:'0233-324-2441', email:'kalawati@yahoo.com'},
{name:'Santi', phone:'01-111-2357', aadhar:'7233-324-2441', email:'santi@gmail.com'},
{name:'Mangla', phone:'01-268-1548', aadhar:'3233-324-2441', email:'mangla@gmail.com'},
{name:'Jagu', phone:'02-030-4986', aadhar:'8233-324-2441', email:'jagu@yahoo.com'},
{name:'Kumar', phone:'01-111-2357', aadhar:'2233-324-2441', email:'kumar@gmail.com'},
{name:"Ramu",phone:'05-020-2356',  aadhar:'5233-324-2441',email:'ramu@yahoo.com'},
{name:'Shamu', phone:'02-030-4986', aadhar:'4233-324-2441', email:'shamu@yahoo.com'},
{name:'Lalu', phone:'01-111-2357', aadhar:'7233-324-2441', email:'lalua@gmail.com'},
{name:'Kalu', phone:'01-268-1548', aadhar:'9233-324-2441', email:'kalu@gmail.com'},
{name:'Sumesh', phone:'02-030-4986', aadhar:'2233-324-2441', email:'sumesh@yahoo.com'},
{name:'Rajveer', phone:'01-111-2357', aadhar:'6233-324-2441', email:'rajveer@gmail.com'},
{name:'Anmol', phone:'01-268-1548',aadhar:'5233-324-2441', email:'anmol@gmail.com'},
{name:'Kalawati', phone:'02-030-4986',aadhar:'1233-324-2441', email:'kalawati@yahoo.com'},
{name:'Santi', phone:'01-111-2357',aadhar:'5233-324-2441', email:'santi@gmail.com'},
{name:'Mangla', phone:'01-268-1548',aadhar:'9233-324-2441', email:'mangla@gmail.com'},
{name:'Jagu', phone:'02-030-4986', aadhar:'7233-324-2441',email:'jagu@yahoo.com'},
{name:'Kumar', phone:'01-111-2357',aadhar:'5333-324-2441', email:'kumar@gmail.com'},
{name:'salman', phone:'01-268-1548', aadhar:'1233-324-2441', email:'salman@gmail.com'}]; 
 
    
    $scope.addContact = function(){		
  for(i=0;i<$scope.info.length&&$scope.info.length<10000;i++){
    
    $scope.info.push({ 'name':$scope.info.newName, 'phone': $scope.newPhone, 'aadhar': $scope.newAadhar, 'email':$scope.newEmail });
    $scope.newName='';
    $scope.newPhone='';
    $scope.newAadhar='';
    $scope.newEmail='';
   
    }
};
  $scope.removeContact = function() { 
  $scope.info.splice(this.$index, 1);     
};
    
 $scope.search= function(item){
            
    if($scope.searchContact==undefined){
                return true;
            }
            
            else{
               
       if($scope.searchContact.toLowerCase() && item.name.toLowerCase().indexOf($scope.searchContact.toLowerCase())   != -1||  item.phone && item.phone.indexOf($scope.searchContact)!=-1)
                    {
                        return true;
                    }
                                  }
            
            return false;    
        };
    
   
      
    
    };
app.controller("appController",appController);
}());