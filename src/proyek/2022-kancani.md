# Kancani

![](/assets/proyek/2022-kancani/index.png)

> Tahun: **2022**
>
> Durasi: **3 bulan - 1 tahun**
>
> Stakeholder: **Lazuardi Al-Falah GCS Klaten**
>
> Teknologi: **PHP (CodeIgniter 4), Bootstrap CSS, jQuery, Push Notifications, Progressive Web Apps (PWA)**
>
> URL: [kancani.id](https://kancani.id/)

Kancani merupakan sebuah web yang dirancang untuk menemani siswa-siswi di Indonesia dalam mengenali emosi yang mereka rasakan di kehidupan sehari-hari. Salah satu misi dari Kancani adalah untuk mengedukasi siswa terkait pentingnya keterampilan pengelolaan emosi sehingga diharapkan para siswa mampu untuk tumbuh menjadi pribadi yang tangguh dan cerdas secara psikologis. Kancani bertujuan untuk membantu sekolah dalam memahami kondisi sosial emosi siswa secara lebih baik, serta membantu sekolah untuk merancang pendekatan pembelajaran yang sesuai dengan kebutuhan setiap peserta didik.

Kancani memberikan ruang bagi peserta didik untuk dapat: Mengekspresikan emosi mereka melalui pertanyaan sehari-hari terkait perasaan yang mereka rasakan; Mencari jawaban mengenai emosi yang mereka rasakan melalui video psikoedukasi; Melakukan penjurnalan dan latihan yang akan membantu mereka dalam memahami keyakinan dan perasaan yang mereka alami; Berkomunikasi secara anonim dengan seorang teman yang dapat membantu mereka menemukan solusi untuk permasalahan yang mereka alami; Memiliki pengalaman belajar untuk saling memberikan dukungan satu sama lain.

Konten psikoedukasi yang disajikan dalam aplikasi web Kancani dikembangkan berbasis prinsip REBT (Rational-Emotive Behavioral Therapy) untuk membantu remaja mengganti pikiran irasional mereka menjadi lebih rasional sebagai bentuk upaya mengatasi permasalahan emosional dan kesehatan mental remaja Indonesia.

## Kesan Penulis

Proyek ini bermula dari 2 mahasiswa jurusan Psikologi dari proyek sebelumnya yang sudah selesai terlebih dahulu ([Sibisa](2022-sibisa.md)) mendatangi saya untuk bekerja sama lagi dalam proyek baru yang dimiliki Lazuardi Al-Falah GCS Klaten. Proyek tersebut merupakan aplikasi web sosio-emosional yang ditujukan kepada siswa (kala itu SMP) sekolah tersebut supaya lebih mampu mengekspresikan emosinya. Yang membuat proyek ini berkesan bagi saya adalah: (1) pertama kali menerapkan metodologi _agile_ dalam mengerjakan proyek (yang mana rilis dilakukan secara iteratif), (2) memiliki set fitur yang banyak, kompleks, dan menarik, dan (3) mendorong saya keluar dari zona nyaman karena bereksperimen dengan teknologi baru seperti JavaScript Canvas, Google Cloud API, Push Notifications, dan Progressive Web Apps (PWA), serta mengasah kemampuan Frontend saya dengan desain yang dibuat menarik dan seramah mungkin terhadap pengguna.

Karena rilis dilakukan secara iteratif, maka proyek ini mendorong saya sejak awal untuk menerapkan _branching model_ pada _version control_ yang saya gunakan. Model _branching_ yang saya terapkan kala itu masih sederhana, hanya terdiri dari _branch_ utama atau `main` (untuk diterapkan pada situs _production_), `develop` (untuk diterapkan pada situs _testing_), serta _branch_ tersendiri untuk modul besar yang sedang aktif dikembangkan (untuk nantinya dilakukan _merging_ ke dalam _branch_ `develop` terlebih dahulu untuk dapat dites oleh tim). Proses migrasi _database_ juga saya lakukan dengan penuh kehati-hatian dengan cara memecah menjadi beberapa versi _file_ SQL yang kemudian nantinya dijalankan bebarengan dengan rilis pembaruan kode.

Fitur-fitur yang ada dalam aplikasi web ini cukup beragam, antara lain: (1) check-in emosi harian dengan intensitas (seperti termometer) beserta alasannya, (2) _diary_ harian pengguna menggunakan mekanisme auto-save, (3) _timeline_ yang memungkinkan pengguna membagikan aktivitasnya kepada pengguna lain dan saling berinteraksi, (4) rekap emosi tahunan yang disajikan dalam bentuk _heatmap_ berwarna dua dimensi, (5) curhat anonim dengan sistem penjadwalan dan _appointment_, (6) _virtual pet_ yang terinspirasi dari _game_ [Pou](https://en.wikipedia.org/wiki/Pou_(video_game)), memungkinkan siswa untuk merawat, memberi makan, dan kustomisasi hewan peliharaan virtual mereka, (7) _daily challenge_, _quests_, dan _achievements_ untuk gamifikasi dan sistem _reward_ kepada pengguna, (8) _exercise_ yang berisi konten edukasi sosio-emosional yang disajikan dalam bentuk latihan interaktif, (9) _quote of the day_ yang mengirimkan _quote_ inspiratif kepada pengguna secara harian, (10) _KancaVids_ yang berisi konten edukasi sosio-emosional yang disajikan dalam bentuk video, (11) _KancaMusik_ yang mana merupakan _music player_ berbasis web dengan memanfaatkan sinkronisasi _playlist_ YouTube. Seluruh fitur tersebut berhasil diselesaikan dalam kurun waktu 3-4 bulan.

Dalam proyek ini saya juga bereksplorasi dengan teknologi yang sebelumnya tidak pernah saya gunakan. JavaScript Canvas berperan dalam pengembangan fitur _virtual pet_ karena membutuhkan pengolahan grafik dalam _browser_ yang cukup intens dan _seamless_. Kemudian Google Cloud API berperan dalam sinkronisasi _playlist_ YouTube yang digunakan oleh fitur _KancaMusik_. Lalu Push Notifications digunakan dalam semua kebutuhan pengiriman notifikasi kepada pengguna, seperti _quote of the day_, pengingat _check-in emosi_ dan mengisi _diary_ harian, notifikasi curhat anonim, serta notifikasi _virtual pet_ dalam keadaan seperti lapar, tidak enak badan, butuh teman, mengantuk, dan kotor. Untuk meningkatkan pengalaman pengguna ketika menggunakan HP, maka aplikasi web ini juga disajikan dalam bentuk Progressive Web App (PWA), serta desain UI yang ramah terhadap pengguna mobile.

## Screenshot

![](/assets/proyek/2022-kancani/student.png)

![](/assets/proyek/2022-kancani/feed.png)

![](/assets/proyek/2022-kancani/moodpixels.png)

![](/assets/proyek/2022-kancani/virtualpet.png)
