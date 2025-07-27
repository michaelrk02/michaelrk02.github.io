# Pemilihan Raya

![](/assets/proyek/2021-pemira.jpg)

> Tahun: **2021**
>
> Durasi: **1-2 bulan**
>
> Stakeholder: **Komisi Pemilihan Raya Fakultas MIPA UNS**
>
> Teknologi: **PHP (CodeIgniter 4), Materialize CSS, jQuery, Message Authentication Code (MAC)**

Proyek ini diselenggarakan oleh KPR FMIPA UNS atas titah Dewan Mahasiswa fakultas dalam melaksanakan pemilihan umum presiden BEM periode selanjutnya kala itu. Proyek ini terbilang sukses dan telah digunakan untuk menyelenggarakan acara yang sejenis dari beberapa fakultas dan bahkan universitas. Pengguna jasa yang terlibat selain KPR FMIPA antara lain HMJM FEB UNS, KPU FEB UNS, KPU FKIP UNS, KPUR FH UMS, serta KPU FT UNS. Proyek ini kemudian dilanjutkan oleh suksesornya, yaitu [PresmaVote](https://presmavote.web.id/).

## Kesan Penulis

Setelah banyak pengalaman di SMA mengawal proyek _e-voting_ untuk pemilihan ketua OSIS, kali ini saatnya saya mengaplikasikannya di universitas saya sendiri. Jujur sebelumnya saya tidak pernah berpikir bahwa saya akan ikut andil juga dalam pengembangan web _e-voting_ pemilihan raya mahasiswa. Semuanya berubah ketika salah satu teman saya, yang merupakan anggota Dewan Mahasiswa (DEMA) Fakultas MIPA (kala itu saat jurusan Informatika masih tergabung dengan Fakultas MIPA), membagikan leaflet _open recruitment_ untuk panitia pemilihan raya. Tanpa pikir panjang saya langsung daftar dan mengikuti prosedurnya, dengan harapan saya bisa memberikan kontribusi yang serupa saat saya masih berada di bangku SMA. Puji Tuhan saya lolos interview dan resmi menjadi anggota Komisi Pemilihan Raya (KPR) Fakultas MIPA sebagai Koordinator Operasional dan Publikasi.

Kala itu saya harus mencari ide untuk pemilihan raya mahasiswa fakultas yang efektif diselenggarakan secara _online_, tanpa mekanisme _kode akses_ seperti yang dulu ada di SMA, namun masih menjunjung tinggi prinsip luber-jurdil. Dan hasilnya adalah: (1) mekanisme autentikasi mahasiswa cukup menggunakan e-mail SSO UNS (dengan premis bahwa tidak bisa membuat akun ganda untuk satu mahasiswa), (2) input mahasiswa daftar pemilih tetap (DPT) menggunakan _Excel_ yang didapat dari admin jurusan terkait, dan (3) mekanisme tanda-tangan digital surat suara berbasis _Message Authentication Code_ (MAC). Kala itu saya pertama kali menggunakan _framework_ CodeIgniter 4 (yang mana sebelumnya selalu menggunakan versi 3) jadi bisa dibilang sambil belajar _framework_ baru juga, cukup menarik karena merupakan perpaduan antara kesederhanaan CodeIgniter versi 3 dan modernisasi _framework_ PHP sesuai standar PSR PHP-FIG seperti halnya Laravel.

Singkat cerita acara berjalan lancar sesuai harapan, dan berhasil menampung kurang lebih 1000 suara masuk (sekitar 50% dari total keseluruhan DPT). Namun perjalanan tidak berhenti di situ. Ketua Dewan Mahasiswa kala itu menginformasikan kepada saya bahwa terdapat KPR dari fakultas lain yang ingin mencoba menggunakan sistem _e-voting_ yang saya kembangkan untuk dapat diterapkan di acara mereka. Dengan demikian, saya juga berhasil mengawal kesuksesan acara pemilihan umum Himpunan Mahasiswa Jurusan Manajemen (HMJM) Fakultas Ekonomi dan Bisnis (FEB) UNS, Himpunan Mahasiswa Ilmu Lingkungan (HIMAPSILI) FMIPA UNS, KPU FEB UNS, KPU Fakultas Keguruan dan Ilmu Pendidikan (FKIP) UNS, KPUR Fakultas Hukum (FH) Universitas Muhammadiyah Surakarta (UMS), serta KPU Fakultas Teknik (FT) UNS. Keberhasilan proyek ini menuntun saya untuk mengembangkan produk sendiri yang lebih baru dan ramah pengguna, yakni [PresmaVote](https://presmavote.web.id/), menggunakan PHP _framework_ Yii.
