   $(".txtb").on("keyup",function(e){
        //13  means enter button
        if(e.keyCode == 13 && $(".txtb").val() != "")
        {
          var task = $("<div class='task'></div>").text($(".txtb").val());
          var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
              p.remove();
            });
          });

          var check = $("<i class='fas fa-check'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
              $(".comp").append(p);
              p.fadeIn();
            });
            $(this).remove();
          });

          task.append(del,check);
          $(".notcomp").append(task);
            //to clear the input
          $(".txtb").val("");
        }
      });





// DOM Elements
    const time = document.getElementById("time"),
        greeting = document.getElementById("greeting"),
        name = document.getElementById("name"),
        focus = document.getElementById("focus");

      // Options
      const showAmPm = true;

      // Show Time
      function showTime() {
        let today = new Date(),
          hour = today.getHours(),
          min = today.getMinutes(),
          sec = today.getSeconds();

        // Set AM or PM
        const amPm = hour >= 12 ? "PM" : "AM";

        // 12hr Format
        hour = hour % 12 || 12;

        // Output Time
        time.innerHTML = `${hour}<span>:</span>${addZero(
          min
        )}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ""}`;

        setTimeout(showTime, 1000);
      }

      // Add Zeros
      function addZero(n) {
        return (parseInt(n, 10) < 10 ? "0" : "") + n;
      }

      // Set Background and Greeting
      {
        let today = new Date(),
          hour = today.getHours();

        if (hour < 12) {
          // Morning
          greeting.textContent = "Good Morning ";
          
        } else if (hour < 18) {
          // Afternoon
          greeting.textContent = "Good Afternoon ";
          
        } else {
          // Evening
          greeting.textContent = "Good Evening ";
          
        }
      }

      // Run
      showTime();
