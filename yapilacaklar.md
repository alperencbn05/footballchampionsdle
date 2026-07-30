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


# ═══════════════════════════════════════════
#  BUGÜN — TEK BAŞINA YAPILACAKLAR
#  Sıra önemli. Her adımdan sonra: kaydet,
#  tarayıcıda test et, çalışıyorsa commit.
# ═══════════════════════════════════════════

## ADIM 0 — Git'i kurtar ve push'la  [5 dk]

Takılı kilit dosyası var. Terminalde:

    cd C:\Users\alper\Desktop\footballchampionsdle
    del .git\index.lock
    del style.css.eski
    del data.js.eski
    git add .
    git commit -m "Modern light theme CSS, page header, responsive layout"
    git push

Kontrol: github.com/alperencbn05/footballchampionsdle sayfasında
yeni commit gözüksün.


## ADIM 1 — Boş slot görünümü: "empty" class  [10 dk]

- Dosya: index.js → `renderMyTeam` fonksiyonu
- style.css'in en altında `.myplayer-card.empty` diye HAZIR bir kural var.
  Kesikli çizgi + soluk yazı. Ama JS o class'ı eklemediği için ölü duruyor.
- Yapılacak: slot BOŞSA karta İKİ class ver: "myplayer-card empty".
  Doluysa sadece "myplayer-card".
- İpucu: className bir metin (string). İki class = araya boşluk.
  Zaten slot boş mu dolu mu diye bakan bir if'in var — ona ekle.
- Test: sayfayı yenile. 11 slot kesikli çizgili başlamalı.
  Oyuncu ekle → o slot normal görünüme dönmeli.

  // ifle farklı bir class oluşturdum boşsa o class özelliği biraz uğraşmadım

## ADIM 2 — Yanlış mevki görünümü: "misplaced" class  [10 dk]

- Aynı yer: `renderMyTeam`
- Hazır kural: `.myplayer-card.misplaced` (turuncu)
- Yapılacak: slot doluysa VE slotun mevkisi oyuncunun mevkisinden
  farklıysa → "myplayer-card misplaced"
- İpucu: bu karşılaştırmayı zaten bir kez yazdın —
  `getMyAveragePower` içinde. Aynı koşul.
- Test: kaleci almadan bir forvet seç → kaleye oturur → turuncu olmalı.

## ADIM 3 — Seçilmiş oyuncu: "picked" class  [15 dk]

- Dosya: index.js → `createTeamCard` fonksiyonu, oyuncu döngüsünün içi
- Hazır kural: `.player-card.picked` (üstü çizili, soluk)
- Yapılacak: oyuncu ZATEN kadrodaysa → "player-card picked"
- İpucu: "kadroda mı?" sorusunu cevaplayan fonksiyonun var zaten.
- DİKKAT: class'ı eklemek yetmez. Oyuncu eklenince/çıkınca takım
  listesi de tazelenmeli, yoksa çizgi tıklayınca gelmez.
  Soru: renderMyTeam'i çağırdığın yerlerde başka ne çağırmalısın?
- Test: oyuncu seç → takım listesinde üstü çizilsin.
  Kadrodan çıkar → çizgi kalksın.

## ADIM 4 — Mesajları düzelt  [10 dk]

- "Team is full" → "Kadro dolu"
- "you can max 3 selected this team" → kota SAYISINI metne ekle
  (ipucu: sabit "3" yazma — quatos[currentTeamIndex] elinde)
- "bu takımdan oyuncu veremezsin" → "bu takım kapandı"
- Dil birliği: hepsi Türkçe olsun (site Türkçe çünkü)

## ADIM 5 — Küçük temizlikler  [15 dk]

- [ ] `quatos` → `quotas` — F2 ile, elle arama YAPMA
- [ ] `renderMyTeam` içindeki `textContent = " "` → `""`
      (boşluk karakteri görünmez bir metin düğümü bırakıyor)
- [ ] `getMyAveragePower(myTeamList)` — parametre globali gölgeliyor.
      Parametreyi tamamen kaldır, fonksiyon globali kullansın
      (countMyTeamPlayers zaten öyle yapıyor). Çağıran yeri de düzelt.
- [ ] `<title>` kontrol et — "Football Champions - Kadronu Kur" olmalı

## ADIM 6 — Maç dramatizasyonu  [20 dk]

- Dosya: index.js → start-game listener'ı
- Şu an: tıkla → sonuç anında basılıyor. Heyecan yok.
- Hedef:
  1. Tıklayınca ÖNCE sadece rakip yazsın: "Rakibin: Real Madrid..."
  2. 3 saniye sonra skor/sonuç gelsin
  3. Beklerken buton tıklanamasın (yoksa çift tıklama karmaşası)
- İpuçları:
  - setTimeout(fonksiyon, 3000) — fonksiyonu SEN yazarsın, tarayıcı
    3 sn sonra ÇAĞIRIR. addEventListener'la aynı kalıp: geri çağırma.
  - Butonu kapatmak: buton elementinin `disabled` özelliği var,
    true/false yap. Sonuç gelince geri aç.
  - Sonuç hesabını setTimeout'un İÇİNE mi DIŞINA mı yazmalı?
    İkisi de çalışır — hangisi neden daha mantıklı, düşün,
    yarın konuşuruz.
- Test: tıkla → rakip görünsün → buton kilitli → 3 sn → sonuç.

## HER ADIMDAN SONRA

    git add .
    git commit -m "kısa açıklama"
    git push

Küçük commit'ler = hata olursa dönebileceğin yakın nokta.

## TAKILIRSAN

1. Konsolu aç (F12) — kırmızı hata var mı?
2. Hata satırına git, satırı Türkçeye çevirerek oku
3. "TEKRAR EDEN HATALAR" listesine bak (aşağıda)
4. 15 dk'dan uzun takıldıysan not al, geç, bana sor

# ═══════════════════════════════════════════


## SONRA (birlikte)

### Saha dizilimi — 4-4-2 sahada görünsün  [~45-60 dk, BİRLİKTE]
renderMyTeam slotları hatlara göre gruplamalı (JS = sen),
saha görünümü CSS'i (ben). Sadece CSS işi değil, o yüzden birlikte.

### Kanka mevkiler — Aşama 3  [~1 saat]
Ceza tek kademeli olmasın, yakınlığa göre değişsin:
- Aynı mevki → 0 · Komşu (cb↔lb, cm↔cam) → ~5
- Orta uzak (cm↔st) → ~15 · Çok uzak (gk↔st) → ~35
Uygulama: yakınlık tablosu + tek fonksiyon.
BONUS: aynı tablo "en yakın boş slot" seçiminde de kullanılır —
şu an ilk boş slot gk olduğu için forvet kaleye oturuyor, bu düzelir.

### Takımlara farklı formasyonlar  [~1 saat]
Bazı takımlar 4-3-3, 3-5-2 olsun. Kullanıcı kadrosu 4-4-2 kalır.
Her formasyonda 1 kaleci → mekanik bozulmaz. EN SONA bırak.

### Mevki Aşama 2 — kullanıcı slot seçsin  [~3-5 saat, opsiyonel]
Önce slota tıkla, sonra oyuncuya.

### Turnuva  [~4-6 saat]
Tur yapısı, eşleşmeler, elenme, kupa.
"Bir maç oyna"yı döngüye sarmak.


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
referans vs değer (nesnenin içine uzanmak) · veri modeli tasarımı ·
flexbox (direkt çocuk kuralı) · CSS cascade · virgüllü seçici


## BİTENLER

- [x] Kadro kurma, slot yapısı, guard zinciri
- [x] Sıralı takım akışı + kotalar
- [x] Maç simülasyonu (ortalama güç + şans)
- [x] Mevki Aşama 1: yedek yerleştirme + sabit ceza (-10)
- [x] Git/GitHub kurulumu
- [x] Tüm takımlar 4-4-2, gerçekçi güçler
- [x] CSS + HTML modern görünüm (Claude, 30 Tem)
