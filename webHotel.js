$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
      return date;
    }
});
$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#button", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
      // Run the effect
      $( "#1" ).effect( selectedEffect, options, 500, callback );
      $( "#2" ).effect( selectedEffect, options, 500, callback );
      $( "#3" ).effect( selectedEffect, options, 500, callback );
      $( "#4" ).effect( selectedEffect, options, 500, callback );
    };
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#1" ).removeAttr( "style" ).hide().fadeIn();
        $( "#2" ).removeAttr( "style" ).hide().fadeIn();
        $( "#3" ).removeAttr( "style" ).hide().fadeIn();
        $( "#4" ).removeAttr( "style" ).hide().fadeIn();
      }, 100000000000000000 );
    };
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
      return false;
    });
});
/* $( function() {
    $( "#selectable" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable li" ).index( this );
          result.append( " #" + ( index + 1 ) );
        });
      }
    });
}); */