(function ($) {
  $(document).ready(function () {
    // Function to get URL parameter by name
    function getUrlParameter(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
      var results = regex.exec(window.location.search);
      return results === null
        ? ""
        : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    // Get the formId from the URL parameter 'form_id'
    var formId = getUrlParameter("form_id");

    // Create the new button element with the specified class and data attribute
    var newButton = $("<a>", {
      class: "wpforms-panel-styler-button sfwf-custom-btn",
      "data-panel": "styler",
    });

    // Create the <i> element with the specified class
    var icon = $("<i>", {
      class: "fa fa-paint-brush",
    });

    // Create the <span> element with the text "Styler"
    var span = $("<span>").text("Styler");

    // Append the <i> and <span> elements to the new button
    newButton.append(icon).append(span);

    // Append the new button after the existing button with the specified class
    $(".wpforms-panel-providers-button").last().after(newButton);

    // Add click event handler to the new button for redirection
    newButton.on("click", function (event) {
      // Prevent default behavior
      event.preventDefault();

      // Get the current website URL
      var baseUrl = window.location.origin;
      // Set the fixed part of the URL and form ID variable
      var fixedPart = "/wp-admin/admin.php?page=sfwf_wpforms_ultimate&formId=";

      // Construct the full URL
      var fullUrl = baseUrl + fixedPart + formId;

      // Redirect to the constructed URL
      window.location.href = fullUrl;
    });
  });
})(jQuery);
