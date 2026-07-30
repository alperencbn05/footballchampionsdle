# Yapılacaklar

## TASARIM KARARLARI (kilitli)

- Havuz: 36 takım (allTeams), 2025/26 CL, PSV yerine Fenerbahce
- YENİ DRAFT: her tur 3 rastgele takım sunulur, kullanıcı BİRİNİ seçer,
  kota kadar oyuncu alır, butonla sonraki tura geçer
- Tur sayısının tek sahibi quotas dizisi: [3,3,3,2] = 4 tur.
  Toplam 11 etmeli. [1,1,...] yazarsak 11'li draft olur — kod değişmez.
- Seçilen takım sonraki turlarda tekrar ÇIKMAZ (!includes)
- Takıma girince geri dönüş yok; ekrandaki takımdan oyuncu geri alınabilir
- Maç: skor simülasyonu, rate=20, beraberlik var; elemede uzatma+penaltı (sonra)
- Kurallar: render üretmez YANSITIR · görünüm kararı çizim anında ·
  veri değişti → iki panel tazelenir


## YARIN — Draft yeniden yapımı  [~1-1.5 saat]

### Parça 1 — Durum  [15 dk]
- `selectedTeams = []` BOŞ başlasın (4'lük while döngüsü kalkıyor)
- Yeni state: `let options = [];` — o turun 3 takımı
- `pickOptions()` fonksiyonu: allTeams'ten 3 FARKLI takım seç,
  selectedTeams'tekileri hariç tut. Eski while+includes kalıbın birebir.
  options'ı doldursun. Oyun başında bir kez çağır.
- `teams = allTeams` · eski possibleOpponents bloğu kalksın,
  rakip şimdilik: allTeams'ten rastgele biri

### Parça 2 — renderTeams'e 3 durum  [30 dk]
```
1) currentTeamIndex >= quotas.length        → maç ekranı (aşağıda)
2) selectedTeams.length === currentTeamIndex → SEÇİM MODU:
   options'taki 3 takımın İSMİNİ kart yap; tıklanınca:
   selectedTeams.push(oTakım) + renderTeams()
3) değilse                                   → TAKIM MODU:
   mevcut createTeamCard yolu (değişmiyor!) + Sıradaki/Bitir butonu
```
- DİKKAT: bitiş kontrolü selectedTeams.length ile DEĞİL,
  quotas.length ile (selectedTeams artık büyüyor)
- DİKKAT: pickOptions'ı renderTeams İÇİNDE ÇAĞIRMA — her çizimde
  3'lü karılır. Render üretmez, yansıtır.

### Parça 3 — Buton listener'ı  [5 dk]
- currentTeamIndex++'tan sonra: pickOptions() + renderTeams()

### Parça 4 — Maç ekranı bağlantısı  [10 dk, HTML/CSS hazır]
- index.html'de hazır: #match-area (gizli, class="hidden")
- renderTeams'in "bitti" dalında (1. durum):
  · team-area'yı GİZLE  → classList.add("hidden")
  · match-area'yı GÖSTER → classList.remove("hidden")
  · "Takımınız Hazır." textContent satırı artık gereksiz
- Butonun adı "Maçı Başlat" oldu, id aynı (start-game) — JS'in çalışır
- BONUS hazır: #start-game:disabled stillendi — butonu kilitlediğinde
  gri + bekleme imleci otomatik

### Parça 5 — Test + commit
- 4 tur × 3 seçenek akışı · seçilen takım tekrar çıkmıyor mu ·
  kota bekçileri · maç paneli solda açılıyor mu · skor 0-4


## SONRA

### Seçim kartları CSS'i (ben) — 3'lü takım seçim ekranı güzelleşecek.
  Sen kartlara `class="option-card"` ver, ben stillerini yazarım.
### Saha dizilimi (birlikte) · Kanka mevkiler · Turnuva · Farklı formasyonlar


## MİKRO KALINTILAR

- [ ] countMyTeamPlayers(myTeamList) → countMyTeamPlayers() (2-3 yer)
- [ ] Guard 1'deki fazla renderMyTeam(); (remove zaten çiziyor)
- [ ] rate, punishment, quotas dosyanın en üstünde bir arada


## TEKRAR EDEN HATALAR

1. İndeks/dizi uyuşmazlığı — "bu sayı hangi dizinin sırası?"
2. return'ün yeri — biriktirme → döngüden SONRA
3. Callback parametresi — ok'un solu o turdaki eleman
4. Yarım rename / fazla silme — F2; "1 satır" = 1 satır
5. Parametre verip kullanıldığını sanmak — fonksiyonun içine bak
6. Yanlış "an" — tıklanınca mı, çizilirken mi?
7. Süslüsüz if — sadece bir sonraki satırı kapsar. Hep süslü yaz.
8. Parantezin içine kaçan karşılaştırma — içten dışa Türkçe oku
9. Ctrl+S
