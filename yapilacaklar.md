# Yapılacaklar

## TASARIM KARARLARI (kilitli)

- 6 takım havuzu, kod 36'yı da kaldırmalı
- Kullanıcı 4 rastgele takımdan 3+3+3+2 = 11 oyuncu seçer
- Takımlar SIRAYLA gelir, geçilen takıma dönülmez
- Ekranda duran takımdan geri alınabilir
- Formasyon: 4-4-2 (gk, lb, cb, cb, rb, lm, cm, cm, rm, st, st)
- Mevki dışı yerleştirme serbest, güç cezalı (şimdilik sabit -10)
- Rakip: kullanıcının seçemediği 2 takımdan biri
- Kural: veri değişti → İKİ panel de tazelenir (add/remove içinden)


## ŞİMDİ — Maç dramatizasyonu  [20 dk]

- Dosya: index.js → start-game listener'ı
- Şu an: tıkla → sonuç anında basılıyor. Heyecan yok.
- Hedef:
  1. Tıklayınca ÖNCE sadece rakip yazsın: "Rakibin: Real Madrid..."
  2. 3 saniye sonra skor/sonuç gelsin
  3. Beklerken buton tıklanamasın
- İpuçları:
  - setTimeout(fonksiyon, 3000) — geri çağırma kalıbı,
    addEventListener'la aynı mantık: fonksiyonu SEN yazarsın,
    tarayıcı 3 sn sonra ÇAĞIRIR
  - Buton elementinin `disabled` özelliği var, true/false yap,
    sonuç gelince geri aç
  - Sonuç hesabı setTimeout'un İÇİNE mi DIŞINA mı? İkisi de çalışır —
    hangisi neden daha mantıklı, düşün, konuşuruz.
- Test: tıkla → rakip görünsün → buton kilitli → 3 sn → sonuç


## MİKRO KALINTILAR (5 dk, ara bir zamanda)

- [ ] Guard 1'deki `renderMyTeam();` (satır ~68) — remove zaten çiziyor,
      çift çizim. Sil.
- [ ] `countMyTeamPlayers(myTeamList)` iki yerde (satır ~147, ~267) —
      fonksiyon parametre almıyor, `countMyTeamPlayers()` yaz
- [ ] Kota mesajı "seçtiniz.3" diye bitiyor — sayıyı cümlenin içine al


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
Tur yapısı, eşleşmeler, elenme, kupa. "Bir maç oyna"yı döngüye sarmak.


## TEKRAR EDEN HATALAR — kod yazarken kontrol et

1. **İndeks/dizi uyuşmazlığı** — köşeli parantezde sor: "bu sayı hangi dizinin?"
2. **`return`'ün yeri** — biriktirme → döngüden SONRA; arama → içinde olabilir
3. **Callback parametresini kullanmamak** — ok'un solundaki isim o turdaki eleman
4. **Yarım rename** — F2 kullan
5. **Parametre verip fonksiyonun onu kullandığını sanmak** — çağırmadan
   önce fonksiyonun İÇİNE bak
6. **YENİ: kod bloğunu yanlış "an"a koymak** — bu satır TIKLANINCA mı
   çalışmalı, ÇİZİLİRKEN mi? Listener içi = tıklama anı, döngü içi = çizim anı.
   (picked macerası, 4 deneme)
7. **Kaydetmeyi unutmak** — Ctrl+S
