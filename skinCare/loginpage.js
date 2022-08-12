function validation(){
    var username=document.getElementById("mail").value;
    var password=document.getElementById("password").value;
    const btn = document.querySelector('.log-btn');
    
    if(username== "abc" && password== "abc" ){
        btn.addEventListener('click', function(event){
            const btnA= document.querySelector('.log-btn a');
            btnA.href='products.html';
        });
    }
    else{
        btn.addEventListener('click', function(event){
            const uyarı= document.querySelector('.uyarı');
            uyarı.style.display='block';
        });
    }
}
