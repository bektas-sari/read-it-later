document.addEventListener("DOMContentLoaded", () => {
    const articleList = document.getElementById("articleList");
    const clearAllButton = document.getElementById("clearAll");
    const addArticleButton = document.getElementById("addArticle");

    // Kullanıcı 'Ekle' butonuna bastığında aktif sekmedeki makaleyi kaydet
    addArticleButton.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                const currentTab = tabs[0];
                chrome.storage.sync.get("savedArticles", (data) => {
                    let articles = data.savedArticles || [];

                    // Eğer makale zaten kayıtlıysa tekrar ekleme
                    if (!articles.some(article => article.url === currentTab.url)) {
                        articles.push({ title: currentTab.title, url: currentTab.url });
                        chrome.storage.sync.set({ savedArticles: articles }, () => {
                            renderArticles();
                        });
                    }
                });
            }
        });
    });

    // Kayıtlı makaleleri getir ve listele
    function renderArticles() {
        chrome.storage.sync.get("savedArticles", (data) => {
            let articles = data.savedArticles || [];
            articleList.innerHTML = "";

            if (articles.length === 0) {
                articleList.innerHTML = "<p>Henüz kaydedilmiş makale yok.</p>";
            } else {
                articles.forEach((article, index) => {
                    let li = document.createElement("li");
                    li.classList.add("article-item");

                    let a = document.createElement("a");
                    a.href = article.url;
                    a.textContent = article.title;
                    a.target = "_blank";

                    let deleteButton = document.createElement("button");
                    deleteButton.textContent = "Sil";
                    deleteButton.classList.add("delete-btn");
                    deleteButton.addEventListener("click", () => {
                        articles.splice(index, 1);
                        chrome.storage.sync.set({ savedArticles: articles }, () => {
                            renderArticles();
                        });
                    });

                    li.appendChild(a);
                    li.appendChild(deleteButton);
                    articleList.appendChild(li);
                });
            }
        });
    }

    // Listeyi temizle butonu
    clearAllButton.addEventListener("click", () => {
        chrome.storage.sync.set({ savedArticles: [] }, () => {
            articleList.innerHTML = "<p>Henüz kaydedilmiş makale yok.</p>";
        });
    });

    // Sayfa açıldığında listeyi yükle
    renderArticles();
});
