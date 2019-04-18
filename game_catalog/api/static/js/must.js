"use strict";

document.addEventListener("DOMContentLoaded", function(){

    var removeLinks = document.querySelectorAll("button[name=create]");

    for (var i = 0; i < removeLinks.length; i++) {
        removeLinks[i].addEventListener("click", function(event){
            event.preventDefault();

            var action = this.dataset.action;
            if (action.localeCompare('/login') === 0){
                window.location.href = action;
            } else {
                createQuery("GET", action, function(response){

                    var link = document.querySelector("button[data-action='" + action + "']");
                    if (action.match("remove-must")){
                        action = action.replace("remove-must", "create-must");
                        link.classList.add("remust-link");
                        link.innerText = "ReMUST";
                        link.dataset.action =  action;
                        showMessage('Must was successfully removed.');
                   } else {
                        action = action.replace("create-must", "remove-must");
                        link.classList.remove("remust-link");
                        link.classList.add("must-link");
                        link.innerText = "UnMUST";
                        link.dataset.action = action;
                        showMessage('Must was successfully added.');
                   }
                });
            }
        });
    }
});