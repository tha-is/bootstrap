    //jeito curto para $( document ).ready()
    $(function() {

        $("#1-link").click(function(event) {
              event.preventDefault();
        $("#1").hide("slow");
        $( "h5" ).html( "hello world" );
          });
          $("#2-link").click(function(event) {
              event.preventDefault();
        $("#2").hide("slow");
          });
          $("#3-link").click(function(event) {
              event.preventDefault();
        $("#3").remove();
          })
          });