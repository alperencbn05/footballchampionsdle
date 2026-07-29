# Yapılacaklar

## TASARIM KARARLARI (kilitli)

- 6 takım havuzu, kod 36'yı da kaldırmalı
- Takım başına 11 oyuncu
- Oyuncu: isim, mevki, güç (tek sayı)
- Kullanıcı 4 rastgele takımdan 3+3+3+2 = 11 oyuncu seçer
- Takımlar SIRAYLA gelir, geçilen takıma dönülmez
- Ekranda duran takımdan geri alınabilir
- Formasyon: 4-4-2 (gk, lb, cb, cb, rb, lm, cm, cm, rm, st, st)
- Mevki dışı yerleştirme serbest, güç cezalı
- Rakip: kullanıcının seçemediği 2 takımdan biri
- Sadece 2025/26 sezonu, yıl alanı yok


## SIRADAKİ — Mevki Aşama 1'i bitir

### 1. Yedek yerleştirme  [~10 dk]
`addPlayerToSquad` içinde: kendi mevkisine ait boş slot yoksa
HERHANGİ bir boş slota yerleştir.
- İkinci bir `find`, koşulu sadece "slot boş mu"
- Bulamazsa (kadro tamamen dolu) uyar
- Şu an sessizce "bulunamadı" yazıp geçiyor — kullanıcı hiçbir şey görmüyor

BU OLMADAN "kaleci sıkıntısı" mekaniği hiç çalışmıyor.

### 2. Mevki dışı ceza  [~10 dk]
`getMyAveragePower` içinde: slotun mevkisi ile oyuncunun mevkisi
farklıysa gücünü düşür.
- `slot.position !== slot.player.position` → ceza uygula
- Aşama 1'de sabit ceza (örn. -20)


## SONRA

### 3. Maç dramatizasyonu  [~20 dk]
- Butona basınca önce rakibi göster
- `setTimeout` ile 3-5 sn sonra sonucu göster
- Beklerken butonu `disabled` yap (çift tıklama sorunu)

### 4. Seçili oyuncuyu işaretle  [~15 dk]
Kadroya alınan oyuncunun kartı takım listesinde aynı görünüyor.
Farklı bir `className` verilmeli — kullanıcı ne seçtiğini görsün.

### 5. Mesajları düzelt  [~10 dk]
- "Team is full" → "Squad is full" (takım/kadro karışıyor)
- "you can max 3 selected this team" → kota sayısını metne ekle
- "bu takımdan oyuncu veremezsin" → "bu takım kapandı"
- Türkçe/İngilizce karışık, birini seç

### 6. CSS + HTML'i elden geçir  [~3-5 saat]
Kendin yazacaksın. Flexbox öğrenme fırsatı.
- Takım kartı ve kadro paneli yan yana
- 11 slotu formasyon görünümünde diz
- Boş slot / dolu slot / cezalı slot ayrı görünsün

### 7. Mevki Aşama 2 — kullanıcı slot seçsin  [~3-5 saat]
Otomatik yerleştirme yerine: önce slota tıkla, sonra oyuncuya.

### 8. Mevki Aşama 3 — uzaklığa göre ceza  [~1 saat]
Sabit ceza yerine mevkiler arası uzaklık tablosu.
Kaleci forvette oynarsa çok, defans orta sahada oynarsa az ceza.

### 9. Turnuva  [~4-6 saat]
- Tur yapısı, eşleşmeler, ilerleme
- Kaybedince elenme, kazanınca kupa
- "Bir maç oyna" işini döngüye sarmak


## KÜÇÜK TEMİZLİKLER

- [ ] `quatos` → `quotas` (yazım hatası, F2 ile tek seferde)
- [ ] `getMyAveragePower(myTeamList)` — parametre global değişkeni gölgeliyor,
      ya parametreyi kaldır ya adını değiştir
- [ ] Ondalık güç değerleri: `Math.floor` yerine `toFixed(1)` düşün
- [ ] `alert` yerine sayfada bir mesaj alanı (alert sayfayı kilitliyor)
- [ ] `data.js.eski` silinebilir (4-4-2 öncesi yedek)
- [ ] `console.log("bulunamadı")` — kullanıcı konsolu görmüyor


## TEKRAR EDEN HATALAR — kod yazarken kontrol et

1. **İndeks/dizi uyuşmazlığı**
   Köşeli parantez yazarken sor: "bu sayı hangi dizinin sırası?"
   Bu projede 5 kez yapıldı.

2. **`return`'ün yeri**
   Biriktirme (toplam/metin/sayaç) → döngüden SONRA döndür
   Arama → bulunca döngü İÇİNDE döndürebilirsin

3. **Geri çağırma parametresini kullanmamak**
   `some/filter/find` içinde `slot => ...` yazıp sonra `myTeamList.slots`
   demek = yanlış kademe. Ok işaretinin solundaki isim o turdaki elemandır.

4. **Yeniden adlandırmayı yarım bırakmak**
   F2 kullan, elle arama yapma.

5. **`===` / `!==` karıştırmak**
   Koşulu Türkçeye çevirip oku: "boşsa" mı "doluysa" mı?

6. **Kaydetmeyi unutmak**
   Ctrl+S. Kaydetmediğin değişiklik yok sayılır.


## ÖĞRENİLEN KAVRAMLAR

createElement / appendChild (taşır, kopyalamaz) · kapanış (closure) ·
kapsam (scope) · bekçi kalıbı (guard clause) · tek doğru kaynak ·
durum → ekran yansıması (render) · sessiz hatalar · sonsuz döngü ·
some / filter / find · geri çağırma fonksiyonu · null vs undefined ·
referans vs değer (nesnenin içine uzanmak) · veri modeli tasarımı


## YENİ FİKİRLER (29 Temmuz)

### Kanka mevkiler — Aşama 3'ün somut hali
Ceza tek kademeli olmasın, yakınlığa göre değişsin:
- Aynı mevki           → ceza yok
- Komşu (rm↔rw, cm↔cam, cb↔lb, lm↔lw)  → küçük ceza (~5)
- Orta uzak (cm↔st, cb↔cm)             → orta ceza (~15)
- Çok uzak (gk↔st)                     → büyük ceza (~35)

Uygulama: bir yakınlık tablosu + tek fonksiyon.
Sabit ceza çalıştıktan SONRA tak, geri kalan kod değişmez.

### Takımlara farklı formasyonlar
Şu an 6 takım da 4-4-2. Bazıları 4-3-3, 3-5-2 olsun.
- Havuzdaki mevki dağılımı çeşitlenir
- Bazı takımlarda lm hiç olmaz → kadroyu doldurmak gerçekten zorlaşır
- Kullanıcının kadrosu 4-4-2 ZORUNLU kalır (bu sürümde)
- Her formasyonda 1 kaleci var → kaleci mekaniği bozulmaz

EN SONA bırak: veri değişince test etmek zorlaşır, önce mekanik otursun.
