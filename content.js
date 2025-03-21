chrome.runtime.sendMessage(
    {
        action: "saveArticle",
        title: document.title,
        url: window.location.href
    }, 
    (response) => {
        console.log("Yanıt:", response);
    }
);
