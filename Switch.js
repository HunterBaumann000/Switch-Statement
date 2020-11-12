var formData;


$(document).ready(function() {

    $("#submitButton").click(displaySchedule);

    function displaySchedule() {

        formData = this.id;

        switch(formData) {
            case "monday":
                $("#message").text("Work From 10:00am to 3:00pm");
                break;
            case "tuesday":
                $("#message").text("Work From 6:30am to 1:00pm");
                break;
            case "wednesday":
                $("#message").text("Work From 12:00am to 8:00pm");
                break;
            case "thursday":
                $("#message").text("Work From 8:00am to 4:00pm");
                break;
            case "friday":
                $("#message").text("Work From 1:00pm to 8:00pm");
                break;
            case "saturday":
                $("#message").text("Work From 5:00pm to 10:00pm");
                break;
            case "sunday":
                $("#message").text("Work From 10:30am to 3:00pm");k
                break;
            default:
                $("#message").text("Something Went Wrong Here");
        }
    }});