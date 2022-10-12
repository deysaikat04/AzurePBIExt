document.getElementById("btn").addEventListener("click", openURL);

function openURL(e) {
    e.preventDefault();
    var baseURL = "https://dev.azure.com/PropertyLoop/PropertyLoop/_workitems/edit/";
    let inputValue = document.getElementById("ticketId").value;

    chrome.tabs.create({ url: baseURL+inputValue });
}