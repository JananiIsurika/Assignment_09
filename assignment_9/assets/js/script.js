var curenrt_Light=0;
var current_direction="RIGHT";
var light_count=6;

const updateLightPanel = () => {
    var current_light = 0;
    var current_direction = "RIGHT"; // RIGHT of LEFT
    var light_count = 6;
    var intervalID = 0;


    const updateLightPanel = () => {
        $(".light").css("background", "white");
        $(".light").eq(current_light++).css("background", "red");

        if (current_direction === "RIGHT") {
            $(".light").eq((current_light++)).css("background", "#D80032");
            if (current_light - 1>=0) {
                $(".light").eq(current_light - 1).css("background", "#FF6969");
            }
            if(current_light === light_count - 1){
                current_direction="LEFT";
            }
        } else {
            current_light--;
            $(".light").eq(current_light).css("background", "#F6635C");
            $(".light").eq(current_light + 1).css("background", "red");

            if (current_light === 0) {
                current_direction = " RIGHT";
            }
        }
    }

$("button:first-child").on("click", () => {
    if (intervalID ==null){
        intervalID=setInterval(updateLightPanel,100)
    }
});

$("button:nth-child(2)").on("click",() => {
    clearInterval(intervalID);
    intervalID=null;
    $("#audio")[0].pause();
});
}