# 📖 Read It Later - Chrome Eklentisi

**Read It Later**, web üzerinde gezinirken ilginç makaleleri kaydetmenizi ve daha sonra kolayca erişebilmenizi sağlayan bir **Chrome eklentisidir**. Kullanıcılar, web sayfalarındaki yazıları **"Ekle" butonu** ile listeye ekleyebilir ve kaydedilen makaleleri şık bir arayüz üzerinden görüntüleyebilir.

---

## ✨ Özellikler
- **📌 Tek Tıkla Kaydet:** Kullanıcı, **"Ekle" butonuna basarak** o anki sayfayı listeye ekleyebilir.
- **📑 Modern ve Şık Arayüz:** Eklenen makaleler minimalist bir listede görüntülenir.
- **🗑️ Silme Özelliği:** Kaydedilen makaleler tek tek veya toplu olarak silinebilir.
- **💾 Chrome Storage API Desteği:** Tüm kayıtlar tarayıcı kapansa bile saklanır.
- **🔗 Doğrudan Erişim:** Listedeki makalelere tıklayarak anında açabilirsiniz.

---

## 🛠️ Kurulum
### 1️⃣ Manuel Yükleme
Eklentiyi Chrome'a manuel olarak yüklemek için aşağıdaki adımları takip edin:

1. **Bu projeyi ZIP olarak indirin** veya `git clone` ile bilgisayarınıza kopyalayın.
   ```bash
   git clone https://github.com/bektas-sari/read-it-later.git
   ```
2. **ZIP dosyasını çıkarın** ve klasör içine girin.
3. **Chrome'u açın** ve adres çubuğuna şu URL'yi yazın:
   ```
   chrome://extensions/
   ```
4. **Geliştirici Modu'nu etkinleştirin.**
5. **"Paketlenmemiş Uzantıyı Yükle" butonuna tıklayın** ve indirdiğiniz proje klasörünü seçin.
6. **Eklenti başarıyla yüklenecektir!**

---

## 🎯 Kullanım
### ✅ Makale Ekleme
- **Bir web sitesindeyken** eklenti simgesine tıklayın.
- Açılan **popup penceresinde "Ekle" butonuna** basın.
- Sayfanın başlığı ve bağlantısı listeye eklenir.

### ❌ Kaydedilmiş Makaleleri Silme
- **Listedeki her makalenin yanında "Sil" butonu** bulunur. Butona tıklayarak tek tek silebilirsiniz.
- **Tümünü temizle** butonu ile kayıtlı tüm makaleleri silebilirsiniz.

---

## 📂 Proje Yapısı
```
read-it-later/
│── manifest.json
│── background.js
│── content.js
│── popup.html
│── popup.js
│── styles.css
│── icons/
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
```

- **manifest.json** → Eklenti yapılandırma dosyası.
- **background.js** → Arka planda çalışan işlemleri yönetir.
- **content.js** → Web sayfalarından veri almak için kullanılır.
- **popup.html** → Kullanıcı arayüzünü tanımlar.
- **popup.js** → Popup arayüzündeki butonların işlevselliğini sağlar.
- **styles.css** → Popup pencere tasarımını içerir.
- **icons/** → Eklenti ikonlarını içerir.

---

## 🔥 Sık Karşılaşılan Sorunlar & Çözümleri
**1️⃣ "Ekle" butonuna basınca makale listelenmiyor?**
- Chrome'un "Geliştirici Konsolu"nda (`F12 > Console`) hata olup olmadığını kontrol edin.
- Eklentiyi kaldırıp tekrar yükleyin.

**2️⃣ Aynı makale birden fazla ekleniyor?**
- Güncellenmiş `popup.js` kodlarının yüklendiğinden emin olun. Aynı URL’yi tekrar eklememek için gerekli kontroller eklenmiştir.

**3️⃣ Kaydedilen makaleler tarayıcıyı kapatınca kayboluyor?**
- Chrome Storage API üzerinden verilerin kaydedildiğini test etmek için şu komutu çalıştırın:
  ```javascript
  chrome.storage.sync.get("savedArticles", (data) => console.log(data));
  ```

---

## 🤝 Katkıda Bulunma
Projeye katkıda bulunmak istiyorsanız:
1. **Projeyi forklayın.**
2. **Yeni bir branch oluşturun:**
   ```bash
   git checkout -b yeni-ozellik
   ```
3. **Değişikliklerinizi commit edin:**
   ```bash
   git commit -m "Yeni özellik eklendi"
   ```
4. **Branch'i push edin:**
   ```bash
   git push origin yeni-ozellik
   ```
5. **Pull Request gönderin!**

---

## 👤 Developer

**Bektas Sari**  

Email: bektas.sari@gmail.com  <br>
GitHub: https://github.com/bektas-sari <br>
LinkedIn: www.linkedin.com/in/bektas-sari <br>
Researchgate: https://www.researchgate.net/profile/Bektas-Sari-3 <br>
Academia: https://independent.academia.edu/bektassari <br>

---

## 📜 Lisans
Bu proje **MIT Lisansı** altında lisanslanmıştır.

---

## 📧 İletişim
Herhangi bir sorunuz veya öneriniz varsa **GitHub Issues** üzerinden bana ulaşabilirsiniz.



