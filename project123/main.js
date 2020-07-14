// function loadjson(file,callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.overrideMimeType("application/json");
//     xhr.open("GET",file,true);
//     xhr.onreadystatechange=function(){
//      if(xhr.readyState === 4 && xhr.status == "200"){
//       callback(xhr.responseText);
//      }
//     };
//     xhr.send(null);
//    }
   
//    loadjson("data.json",function(text){
//     var data = JSON.parse(text); // serialised data
//     console.log(data);
//    })
function loadjson(file,callback) {
    debugger
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
     if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
     }
    };
    xhr.send(null);
   }
   
   loadjson("data.json",function(text){
    var data = JSON.parse(text); // serialised data
    console.log(data);
   // document.write(data);
   });