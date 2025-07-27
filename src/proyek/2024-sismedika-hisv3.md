# Hospital Information System (HISv3)

> Tahun: **2024**
>
> Stakeholder: **PT Sistem Integrasi Medika**
>
> Teknologi: **Golang, ReactJS, HL7 FHIR**

Proyek ini merupakan proyek pertama saya sejak bergabung dengan PT Sistem Integrasi Medika. Peran saya secara spesifik di proyek ini adalah sebagai _backend developer_. Saya banyak terlibat mengerjakan berbagai modul utama, seperti EMR, pelayanan rawat jalan dan rawat inap, penunjang medis (laboratorium dan radiologi), operasi, dan masih banyak lagi.

## Kesan Penulis

Saya sangat bersyukur karena masuk pada saat awal-awal masa proyek HISv3. Karena itu, saya memiliki banyak kesempatan untuk mengambil bagian menulis kode yang menyusun komponen _core_ dari aplikasi web tersebut. Kontribusi saya terhadap proyek ini bisa dibilang cukup besar karena juga ikut membantu senior saya dalam mematangkan _boilerplate_ dari _code_ yang digunakan. Selain itu saya juga cukup sering diberi amanah untuk memimpin pengembangan fitur atau modul tertentu dalam aplikasi ini.

Saya dapat merasakan dampak yang saya kerjakan dalam proyek ini, antara lain:

1. Implementasi konversi _bidirectional_ format kuesioner HIS dengan FHIR, berbasis JSON
2. Penerapan CRUD _code generator_ buatan sendiri yang kemudian menjadi standar dalam pengembangan kode _backend_ karena mempersingkat waktu secara signifikan dan meminimalisir terjadinya _human error_
3. Penerapan _nesting_ pada transaksi database, yang juga menjadi standar dalam pengembangan kode _backend_, karena dengan adanya fitur ini maka transaksi _database_ yang sama dapat dipanggil dari _function_ manapun
4. Bekerja sama dengan anggota Frontend dalam mengembangkan modul EMR khususnya pengisian form kuesioner
5. Mengembangkan modul pelayanan rawat jalan dan rawat inap, khususnya dari segi data transaksi
6. Mengembangkan modul penunjang radiologi, dengan integrasi sistem [PACS](https://en.wikipedia.org/wiki/Picture_archiving_and_communication_system) dan [DCM4CHEE](https://web.dcm4che.org/)
7. Mengembangkan modul penunjang laboratorium, mulai dari pengolahan sampel, input hasil, nilai normal, formula, dan _bridging_ dengan alat lab seperti SYSMEX XN 330, SD Biosensor F200, COBAS C311, dan lain sebagainya
8. Mengembangkan modul lain seperti operasi, _dashboard_ rekam medis, rehab medik, hemodialisa, dan lain sebagainya

Aktivitas saya selain _coding_ di sini antara lain: (1) menjadi _code reviewer_ utama pada aplikasi _backend_, (2) memimpin _daily standup_ dan melakukan koordinasi saat diperlukan, (3) analisis modul atau fitur tertentu yang menghasilkan sekumpulan _task_ yang dapat dikerjakan oleh tim, (4) turut serta melakukan _onboarding_ terhadap karyawan baru dengan memberikan bimbingan dan _task_ yang sederhana, dan (5) membimbing rekan setim saya yang mengalami kendala teknis.

Proyek ini menandai lompatan besar dalam karir saya, yang mana sebelumnya saya dominan bekerja secara individu kemudian akhirnya bekerja secara tim. Di sini saya belajar banyak hal, mulai dari menurunkan ego saya untuk menyesuaikan dengan lingkungan kerja tim, sampai dengan belajar _best practice_ dan teknologi baru khususnya yang berkaitan dengan _backend engineering_.
