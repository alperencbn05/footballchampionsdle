# Yapılacaklar

## TASARIM KARARLARI (kilitli)

- 6 takım havuzu, kod 36'yı da kaldırmalı
- Kullanıcı 4 rastgele takımdan 3+3+3+2 = 11 oyuncu seçer
- Takımlar SIRAYLA gelir, geçilen takıma dönülmez
- Ekranda duran takımdan geri alınabilir
- Formasyon: 4-4-2 (gk, lb, cb, cb, rb, lm, cm, cm, rm, st, st)
- Mevki dışı yerleştirme serbest, güç cezalı (şimdilik sabit -10)
- Rakip: kullanıcının seçemediği 2 takımdan biri


## DÜZELTMELER — 30 Tem kod incelemesinden

### 1. Boş slot class'ı yanlış  [5 dk]
`"myemptyplayer-card"` diye bir CSS kuralı YOK.
style.css bölüm 7'deki seçiciye bak. `misplaced`'i nasıl
yazdıysan (iki class, arada boşluk) aynı kalıp.

### 2. picked yanlış anda atanıyor  [15 dk]
Şu an 2. bekçinin içinde — o bekçi artık hiç tetiklenmiyor
(ekranda hep sıradaki takım var). O satırı ve bekçiyi düşün:
- Kural: kartın görünümü TIKLANINCA değil ÇİZİLİRKEN belirlenir
- Yer: createTeamCard, oyuncu döngüsü, kart oluşturulduğu an
- Koşul: "bu oyuncu kadroda mı?" — fonksiyonun hazır
- DİKKAT: ekleme/çıkarma sonrası takım listesi yeniden çizilmezse
  çizgi gelmez/gitmez. renderMyTeam() çağırdığın yerlere bak.

### 3. getAveragePower bug'ı  [2 dk]
`total / countMyTeamPlayers(team)` → countMyTeamPlayers parametreyi
kullanmıyor, SENİN kadronu sayıyor. Rakip gücü yanlış hesaplanıyor
(şimdilik 11=11 olduğu için görünmüyor, turnuvada patlar).
Rakibin toplamı rakibin oyuncu sayısına bölünmeli — eski haline dön.

### 4. Kalan küçükler  [10 dk]
- [ ] `getMyAveragePower(myTeamList)` parametresi globali gölgeliyor —
      parametreyi kaldır, çağıran yeri de düzelt
- [ ] Kota mesajına sayıyı ekle: quotas[currentTeamIndex]
- [ ] "Your team should have 11 players" → Türkçe
- [ ] renderMyTeam: else içindeki `if (slot.player !== null)` her
      zaman true — sadeleştir
- [ ] `del style.css.eski`


## ADIM 6 — Maç dramatizasyonu  [20 dk]

- Dosya: index.js → start-game listener'ı
- Hedef:
  1. Tıklayınca ÖNCE sadece rakip yazsın: "Rakibin: Real Madrid..."
  2. 3 saniye sonra skor/sonuç gelsin
  3. Beklerken buton tıklanamasın
- İpuçları:
  - setTimeout(fonksiyon, 3000) — geri çağırma kalıbı,
    addEventListener'la aynı mantık
  - Buton elementinin `disabled` özelliği var, true/false
  - Sonuç hesabı setTimeout'un İÇİNE mi DIŞINA mı? İkisi de çalışır —
    hangisi neden daha mantıklı, düşün, konuşuruz.
- Test: tıkla → rakip görünsün → buton kilitli → 3 sn → sonuç


## SONRA (birlikte)

### Saha dizilimi — 4-4-2 sahada görünsün  [~45-60 dk, BİRLİKTE]
renderMyTeam slotları hatlara göre gruplamalı (JS = sen), saha CSS'i (ben).

### Kanka mevkiler — Aşama 3  [~1 saat]
Cezayı yakınlığa göre kademelendir: aynı → 0 · komşu → ~5 ·
orta → ~15 · gk↔st → ~35. Yakınlık tablosu + tek fonksiyon.
BONUS: aynı tablo "en yakın boş slot" seçiminde kullanılır —
forvetin kaleye oturması kendiliğinden düzelir.

### Takımlara farklı formasyonlar  [~1 saat, EN SON]
### Mevki Aşama 2 — kullanıcı slot seçsin  [~3-5 saat, opsiyonel]
### Turnuva  [~4-6 saat]


## TEKRAR EDEN HATALAR — kod yazarken kontrol et

1. **İndeks/dizi uyuşmazlığı** — köşeli parantezde sor: "bu sayı hangi dizinin?"
2. **`return`'ün yeri** — biriktirme → döngüden SONRA; arama → içinde olabilir
3. **Callback parametresini kullanmamak** — ok'un solundaki isim o turdaki eleman
4. **Yarım rename** — F2 kullan
5. **YENİ: fonksiyona parametre verip fonksiyonun onu kullandığını sanmak** —
   çağırmadan önce fonksiyonun İÇİNE bak: parametre gerçekten kullanılıyor mu?
   (getAveragePower / countMyTeamPlayers olayı)
6. **Kaydetmeyi unutmak** — Ctrl+S
