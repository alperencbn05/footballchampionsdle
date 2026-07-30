# Yapılacaklar

## TASARIM KARARLARI (kilitli)

- 6 takım havuzu, kod 36'yı da kaldırmalı
- 4 rastgele takımdan 3+3+3+2 = 11 oyuncu; takımlar SIRAYLA
- Takım geçişi OYUNCUNUN elinde: "Sıradaki takım" butonu,
  kota dolmadan geçilmez, son takımda "Bitir"
- Formasyon: 4-4-2; mevki dışı serbest, sabit -10 ceza
- Rakip: seçilemeyen 2 takımdan biri
- MAÇ = SKOR SİMÜLASYONU (Yol B): gol = güce bağlı tavanda rastgele,
  kazananı skor belirler, beraberlik var
  · rate = 20 → 0-4 gol bandı
  · Turnuvada: grup maçında beraberlik OK, elemede uzatma+penaltı (B2)
- Kural: veri değişti → iki panel tazelenir · görünüm kararı ÇİZİM anında


## SIRADA

### 1. Saha dizilimi — 4-4-2 sahada görünsün  [~45-60 dk, BİRLİKTE]
renderMyTeam slotları hatlara göre gruplayacak (JS = sen),
saha görünümü CSS'i (ben). Bir sonraki oturumun işi bu.

### 2. Kanka mevkiler — Aşama 3  [~1 saat]
Ceza yakınlığa göre: aynı → 0 · komşu → ~5 · orta → ~15 · gk↔st → ~35
Yakınlık tablosu + tek fonksiyon.
BONUS: "en yakın boş slot" seçimi de bundan çıkar —
forvetin kaleye oturması kendiliğinden düzelir.

### 3. Turnuva  [~4-6 saat]
Tur yapısı, eşleşmeler, elenme, kupa.
Uzatma + penaltı (B2) burada eklenecek, maç kodu hazır.

### 4. Takımlara farklı formasyonlar  [~1 saat, EN SON]
### 5. Mevki Aşama 2 — kullanıcı slot seçsin  [opsiyonel]


## MİKRO KALINTILAR (5 dk, ara bir zamanda)

- [ ] `countMyTeamPlayers(myTeamList)` yazımları — fonksiyon parametre
      almıyor, boş parantez olmalı (2-3 yerde)
- [ ] Guard 1'de `renderMyTeam();` — remove zaten çiziyor, çift. Sil.
- [ ] Kota alert'i: "...seçtiniz." + sayı → sayıyı cümle içine al
- [ ] rate, punishment gibi ayarlar dosyanın en üstünde bir arada dursun


## TEKRAR EDEN HATALAR — kod yazarken kontrol et

1. **İndeks/dizi uyuşmazlığı** — "bu sayı hangi dizinin sırası?"
2. **`return`'ün yeri** — biriktirme → döngüden SONRA
3. **Callback parametresini kullanmamak** — ok'un solu o turdaki eleman
4. **Yarım rename / fazla silme** — F2 kullan; "1 satır sil" = 1 satır
5. **Parametre verip fonksiyonun kullandığını sanmak** — içine bak
6. **Yanlış "an"** — tıklanınca mı, çizilirken mi? Görünüm = çizim anı.
   (picked 4 deneme + Bitir yazısı, aynı ders 2 kez)
7. **YENİ: Süslüsüz if** — süslüsüz if SADECE bir sonraki satırı kapsar;
   return dışarıda kalırsa sonrası ölü kod. Her zaman süslü yaz.
8. **YENİ: Parantezin içine kaçan karşılaştırma** — fonksiyon parantezi
   sadece argümanı sarar. İçten dışa Türkçe okuyamıyorsan yanlıştır.
9. **Kaydetmeyi unutmak** — Ctrl+S, sonra "bakar mısın"


## BUGÜN ÖĞRENİLENLER (30 Tem)

setTimeout (2. geri çağırma türü: "süre dolunca") · disabled ·
if / else if / else (3 dallı karar) · skor simülasyonu tasarımı
(tiyatro vs simülasyon) · süslüsüz if tuzağı · içten dışa okuma ·
buton bekçisi (< ile >= aynı sorunun iki yüzü)


## BİTENLER (30 Tem)

- [x] empty / misplaced / picked state class'ları (çizim anında)
- [x] Maç dramatizasyonu: rakip → 3 sn → sonuç, buton kilidi
- [x] Skor tabanlı maç simülasyonu + beraberlik
- [x] "Sıradaki takım" butonu: kota bekçisi, son takımda "Bitir",
      otomatik geçiş söküldü → yanlış seçim düzeltilebilir
- [x] Modern CSS + HTML (başlık, feragat notu, responsive)
