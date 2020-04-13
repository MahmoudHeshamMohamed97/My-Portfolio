(function(){
    function calcAge(){
        var d = new Date();
        d = d.getFullYear() - 1997;
        var html = "<b>Age:</b><br/>"+d+" Years";
        document.getElementById("myAge").innerHTML = html;
    }
    function printStars(){
        var arrOfHtml = document.getElementsByClassName("value");
        var arrOfAllStars = [];
        for(let i=0; i<arrOfHtml.length; i++){
            arrOfAllStars[i] = Number(arrOfHtml[i].getElementsByTagName("b")[0].innerHTML);
        }
        for(let i=0; i<arrOfAllStars.length; i++){
            var html = "";
            var x = 5-arrOfAllStars[i];
            for(let j=0; j<arrOfAllStars[i]; j++){
                html += "<i class='fas fa-star myColor hoveredStar'></i>";
            }
            if(x>0){
                for(let k=0; k<x; k++){
                    html += '<i class="far fa-star"></i>';
                }
            }
            arrOfHtml[i].getElementsByTagName("b")[0].innerHTML=html;
        }
    }
    function negativeDirection(){
        var elem = document.getElementById("projectsRow");
        var arr = elem.getElementsByClassName("col-md-6");
        console.log(arr);
        for(let i=0; i<arr.length; i++){
            var html = "";
            if(i%2==1){
                html+= "<div class='projectView1'>" + arr[i].innerHTML + "</div>";
            }
            else{
                html+= "<div class='projectView'>" + arr[i].innerHTML + "</div>";
            }
            arr[i].innerHTML = html;
        }
    }
    negativeDirection();
    calcAge();
    printStars();
})();
