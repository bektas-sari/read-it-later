chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ savedArticles: [] });
});

// Gelen mesajları dinle ve kaydet
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "saveArticle") {
        chrome.storage.sync.get("savedArticles", (data) => {
            let articles = data.savedArticles || [];
            articles.push({ title: message.title, url: message.url });
            chrome.storage.sync.set({ savedArticles: articles }, () => {
                console.log("Makale kaydedildi:", message.title);
            });
        });
        sendResponse({ status: "Article saved" });
    }
});
