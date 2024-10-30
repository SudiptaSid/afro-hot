// Template function which adds CSS flag and displays country name
function flagTemplate(country) {
  return $(
    "<span class='flag-icon flag-icon-" +
      country.id +
      " '></span><span class='flag-text'>" +
      country.text +
      "</span>"
  );
}

// Generate correct URL based on entered search term
function generateUrl(params) {
  if (params.term) {
    return "https://restcountries.com/v3.1/name/" + params.term;
  } else {
    return "https://restcountries.com/v3.1/all";
  }
}

// Initialise select2 using flagTemplate function for both result and selection
$(".countrySelect").select2({
  // Set template for results and selection
  templateResult: flagTemplate,
  templateSelection: flagTemplate,

  selectionCssClass: "custom-select2",
  dropdownCssClass: "custom-dropdown2",
  // Set placeholder text
  placeholder: "Select country...",
  // Load country list from https://restcountries.com
  ajax: {
    url: generateUrl,
    cache: 250,
    dataType: "json",
    processResults: function (data) {
      return {
        results: data
          .map((x) => ({ id: x.cca2.toLowerCase(), text: x.name.common }))
          .sort((a, b) => ("" + a.text).localeCompare(b.text)),
      };
    },
  },
});
