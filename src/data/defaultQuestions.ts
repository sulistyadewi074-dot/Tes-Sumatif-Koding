import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // PILIHAN GANDA (20 BUTIR SOAL: NO. 1 - 20)
  // Seluruh soal dirancang dengan tingkat kesulitan MUDAH untuk siswa kelas V SD
  // Setiap soal memiliki 4 opsi jawaban (A, B, C, D) dengan 1 jawaban benar.
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian Algoritma',
    difficulty: 'Mudah',
    text: 'Dalam dunia koding dan komputer, apa yang dimaksud dengan algoritma?',
    options: [
      { id: 'A', text: 'Kumpulan perangkat keras komputer seperti mouse dan keyboard' },
      { id: 'B', text: 'Urutan langkah-langkah logis dan teratur untuk menyelesaikan masalah' },
      { id: 'C', text: 'Bahasa rahasia yang hanya dimengerti oleh robot alien' },
      { id: 'D', text: 'Gambar animasi bergerak di layar monitor komputer' },
    ],
    correctAnswer: 'B',
    explanation:
      'Algoritma adalah serangkaian instruksi atau langkah-langkah teratur dan logis yang disusun untuk menyelesaikan suatu tugas atau permasalahan secara tepat.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Berpikir Komputasional - Dekomposisi',
    difficulty: 'Mudah',
    text: 'Siti ingin membuat proyek animasi cerita di komputer. Ia membagi pekerjaannya menjadi bagian kecil: menyiapkan gambar tokoh, menulis dialog suara, dan mengatur latar panggung. Cara memecah masalah besar menjadi bagian-bagian kecil ini disebut...',
    options: [
      { id: 'A', text: 'Abstraksi' },
      { id: 'B', text: 'Pengenalan Pola' },
      { id: 'C', text: 'Dekomposisi' },
      { id: 'D', text: 'Browsing' },
    ],
    correctAnswer: 'C',
    explanation:
      'Dekomposisi adalah cara berpikir dengan memecah tugas atau masalah besar menjadi bagian-bagian yang lebih kecil dan sederhana agar lebih mudah dikerjakan.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Diagram Alir (Flowchart) - Terminator',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar simbol diagram alir (flowchart) di bawah ini!\n\nFungsi utama dari simbol berbentuk oval (kapsul) tersebut dalam diagram alir adalah...',
    imageSvg: `<svg viewBox="0 0 240 100" class="w-56 h-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="25" width="180" height="50" rx="25" fill="#3b82f6" stroke="#1d4ed8" stroke-width="3"/>
  <text x="120" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff" font-family="sans-serif">MULAI / SELESAI</text>
</svg>`,
    options: [
      { id: 'A', text: 'Melakukan penjumlahan angka matematika' },
      { id: 'B', text: 'Menandai titik awal (Mulai) atau akhir (Selesai) dari alur program' },
      { id: 'C', text: 'Mengambil keputusan bernilai Ya atau Tidak' },
      { id: 'D', text: 'Menghapus data di dalam komputer' },
    ],
    correctAnswer: 'B',
    explanation:
      'Simbol berbentuk oval dengan ujung melengkung disebut Terminator. Simbol ini selalu digunakan untuk menandai permulaan (Mulai/Start) dan pengakhiran (Selesai/End) alur program.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Diagram Alir (Flowchart) - Decision',
    difficulty: 'Mudah',
    text: 'Perhatikan simbol diagram alir berbentuk belah ketupat (diamond) berikut!\n\nDalam diagram alir, simbol ini digunakan untuk...',
    imageSvg: `<svg viewBox="0 0 240 120" class="w-56 h-auto" xmlns="http://www.w3.org/2000/svg">
  <polygon points="120,15 210,60 120,105 30,60" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>
  <text x="120" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff" font-family="sans-serif">KONDISI</text>
  <text x="120" y="72" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff" font-family="sans-serif">(Ya / Tidak?)</text>
</svg>`,
    options: [
      { id: 'A', text: 'Pengambilan keputusan berdasarkan pilihan kondisi (Ya atau Tidak)' },
      { id: 'B', text: 'Menghubungkan kabel komputer ke stopkontak listrik' },
      { id: 'C', text: 'Mencetak tulisan ke kertas printer' },
      { id: 'D', text: 'Menyimpan video game ke memori' },
    ],
    correctAnswer: 'A',
    explanation:
      'Simbol belah ketupat (Decision) melambangkan percabangan atau pengambilan keputusan, di mana terdapat cabang pilihan seperti "Ya" dan "Tidak".',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Diagram Alir (Flowchart) - Proses',
    difficulty: 'Mudah',
    text: 'Simbol diagram alir yang berbentuk persegi panjang (kotak) digunakan untuk melambangkan...',
    options: [
      { id: 'A', text: 'Titik Mulai atau Selesai' },
      { id: 'B', text: 'Proses kegiatan, tindakan, atau perhitungan data' },
      { id: 'C', text: 'Pilihan keputusan Ya atau Tidak' },
      { id: 'D', text: 'Arah aliran arus listrik' },
    ],
    correctAnswer: 'B',
    explanation:
      'Simbol persegi panjang (Process) menunjukkan kegiatan tindakan operasional, instruksi, atau proses perhitungan.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Urutan Logis (Sekuensial)',
    difficulty: 'Mudah',
    text: 'Perhatikan langkah-langkah membuat teh manis hangat berikut:\n(1) Masukkan teh celup ke dalam cangkir\n(2) Tuangkan air panas ke dalam cangkir\n(3) Masukkan gula pasir lalu aduk hingga larut dan siap diminum\n\nApakah langkah-langkah di atas sudah tersusun secara logis dan runtut?',
    options: [
      { id: 'A', text: 'Sudah, urutannya logis dan tepat dari awal hingga siap diminum' },
      { id: 'B', text: 'Belum, seharusnya diminum dulu sebelum diseduh air panas' },
      { id: 'C', text: 'Belum, teh tidak perlu diseduh air panas' },
      { id: 'D', text: 'Urutan di atas salah total' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan (1) siapkan teh celup, (2) tuangkan air panas, dan (3) tambahkan gula lalu aduk hingga larut adalah urutan logis (sekuensial) yang sudah tepat dan runtut.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Logika Gerak Robot Sederhana',
    difficulty: 'Mudah',
    text: 'Sebuah robot mainan berdiri di petak awal menghadap lurus ke depan. Di depannya ada target bintang berjarak 3 petak lurus. Perintah gerak yang paling tepat untuk robot adalah...',
    imageSvg: `<svg viewBox="0 0 280 100" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="240" height="60" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="20" x2="80" y2="80" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="140" y1="20" x2="140" y2="80" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="200" y1="20" x2="200" y2="80" stroke="#cbd5e1" stroke-width="2"/>
  <!-- Robot -->
  <circle cx="50" cy="50" r="16" fill="#3b82f6"/>
  <text x="50" y="54" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Robot</text>
  <!-- Arrow -->
  <polygon points="100,50 120,50 120,45 130,50 120,55 120,50" fill="#64748b"/>
  <!-- Target Star -->
  <polygon points="230,35 235,46 247,46 238,53 241,65 230,58 219,65 222,53 213,46 225,46" fill="#eab308"/>
</svg>`,
    options: [
      { id: 'A', text: 'Maju 3 petak ke depan' },
      { id: 'B', text: 'Mundur 3 petak ke belakang' },
      { id: 'C', text: 'Belok kiri 3 kali' },
      { id: 'D', text: 'Diam di tempat tanpa bergerak' },
    ],
    correctAnswer: 'A',
    explanation:
      'Karena target bintang berada tepat di depan robot berjarak 3 petak lurus, maka robot cukup diperintahkan untuk "Maju 3 petak ke depan".',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Perulangan (Looping) Sederhana',
    difficulty: 'Mudah',
    text: 'Dalam koding Scratch, ada balok perintah bertuliskan:\n"Ulangi 4 kali [ Tepuk Tangan ]"\nBerapa kali aksi tepuk tangan akan dilakukan oleh komputer?',
    options: [
      { id: 'A', text: '1 kali' },
      { id: 'B', text: '2 kali' },
      { id: 'C', text: '4 kali' },
      { id: 'D', text: '10 kali' },
    ],
    correctAnswer: 'C',
    explanation:
      'Perintah "Ulangi 4 kali" berarti komputer akan menjalankan aksi tepuk tangan tersebut sebanyak 4 kali putaran secara otomatis.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Konsep Debugging',
    difficulty: 'Mudah',
    text: 'Ketika Doni menjalankan game koding buatannya, karakter mobil tidak mau berjalan karena ada kesalahan perintah. Proses mencari dan memperbaiki kesalahan dalam program dinamakan...',
    options: [
      { id: 'A', text: 'Debugging' },
      { id: 'B', text: 'Menelepon' },
      { id: 'C', text: 'Mengecat' },
      { id: 'D', text: 'Membeli kaset' },
    ],
    correctAnswer: 'A',
    explanation:
      'Debugging adalah istilah untuk mencari, memeriksa, dan memperbaiki kesalahan (bug) pada baris perintah program agar dapat berjalan normal.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Percabangan (Kondisi IF-ELSE)',
    difficulty: 'Mudah',
    text: 'Perhatikan aturan sederhana payung pintar berikut:\nJIKA hari ini hujan MAKA bawa payung.\nSELAIN ITU MAKA tidak perlu bawa payung.\n\nJika cuaca hari ini cerah (tidak hujan), maka tindakan yang sesuai aturan adalah...',
    options: [
      { id: 'A', text: 'Tetap membawa payung' },
      { id: 'B', text: 'Tidak perlu membawa payung' },
      { id: 'C', text: 'Membawa jas hujan tebal' },
      { id: 'D', text: 'Menutup seluruh jendela sekolah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Karena hari ini tidak hujan, maka kondisi "JIKA hujan" bernilai salah. Sehingga yang dijalankan adalah aturan SELAIN ITU, yaitu "tidak perlu bawa payung".',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Berpikir Komputasional - Pengenalan Pola',
    difficulty: 'Mudah',
    text: 'Perhatikan deret pola panah arah berikut:\n[ Kanan, Kiri, Kanan, Kiri, Kanan, ... ]\n\nPanah arah berikutnya yang paling tepat untuk melanjutkan pola tersebut adalah...',
    options: [
      { id: 'A', text: 'Kiri' },
      { id: 'B', text: 'Kanan' },
      { id: 'C', text: 'Atas' },
      { id: 'D', text: 'Bawah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola berselang-seling secara teratur antara Kanan dan Kiri. Setelah Kanan, arah selanjutnya pasti Kiri.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Manfaat Perulangan (Looping)',
    difficulty: 'Mudah',
    text: 'Apa keuntungan menggunakan balok "Ulangi (Loop)" saat menulis program koding?',
    options: [
      { id: 'A', text: 'Komputer menjadi lebih berat saat diangkat' },
      { id: 'B', text: 'Mempermudah penulisan perintah yang sama sehingga kode menjadi lebih rapi dan ringkas' },
      { id: 'C', text: 'Membuat suara lagu menjadi lebih kencang' },
      { id: 'D', text: 'Mematikan layar komputer secara tiba-tiba' },
    ],
    correctAnswer: 'B',
    explanation:
      'Perulangan (Loop) membantu kita agar tidak perlu menuliskan perintah yang sama berulang-ulang, sehingga program lebih efisien, ringkas, dan rapi.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Berpikir Komputasional - Abstraksi',
    difficulty: 'Mudah',
    text: 'Saat menggambar peta petunjuk arah dari rumah ke SD Negeri 3 Loloan Timur, Budi hanya menggambar jalan utama dan belokan penting, tanpa menggambar warna pagar rumah orang lain. Cara Budi memilih informasi penting dan membuang detail yang tidak perlu disebut...',
    options: [
      { id: 'A', text: 'Abstraksi' },
      { id: 'B', text: 'Fotokopi' },
      { id: 'C', text: 'Mencontek' },
      { id: 'D', text: 'Mewarnai' },
    ],
    correctAnswer: 'A',
    explanation:
      'Abstraksi adalah pilar berpikir komputasional dengan memusatkan perhatian pada hal-hal penting saja dan mengabaikan rincian yang tidak diperlukan.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Pelacakan Nilai Variabel Sederhana',
    difficulty: 'Mudah',
    text: 'Di dalam sebuah game koding:\nSkor awal = 5\nPemain mendapat koin emas sehingga Skor bertambah 3 (Skor = 5 + 3).\nBerapakah skor pemain sekarang?',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctAnswer: 'C',
    explanation:
      'Nilai awal adalah 5. Setelah ditambah 3 koin emas, skor pemain menjadi 5 + 3 = 8.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Kriteria Kelulusan (KKTP) dalam Algoritma',
    difficulty: 'Mudah',
    text: 'Sebuah aplikasi ujian sekolah memiliki aturan logika:\nJIKA nilai >= 70 MAKA status = "Lulus"\nSELAIN ITU status = "Belum Lulus"\n\nJika Wayan memperoleh nilai 85, maka status yang ditampilkan aplikasi adalah...',
    options: [
      { id: 'A', text: 'Belum Lulus' },
      { id: 'B', text: 'Lulus' },
      { id: 'C', text: 'Mengulang Tahun Depan' },
      { id: 'D', text: 'Nilai Hilang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Nilai Wayan adalah 85. Karena 85 lebih besar atau sama dengan batas KKTP (70), maka kondisi bernilai Benar dan statusnya adalah "Lulus".',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Contoh Kecerdasan Artifisial (AI)',
    difficulty: 'Mudah',
    text: 'Salah satu contoh penerapan teknologi Kecerdasan Artifisial (AI) yang ada pada ponsel pintar saat ini adalah...',
    options: [
      { id: 'A', text: 'Pendeteksi wajah (Face Unlock) untuk membuka layar ponsel' },
      { id: 'B', text: 'Casing plastik pelindung bagian belakang HP' },
      { id: 'C', text: 'Kabel charger yang dicolokkan ke listrik' },
      { id: 'D', text: 'Kaca anti gores yang menempel di layar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pendeteksi wajah (Face Unlock) menggunakan kecerdasan buatan (Computer Vision) untuk mengenali wajah pemilik ponsel secara pintar.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Diagram Alir - Garis Alir (Flowline)',
    difficulty: 'Mudah',
    text: 'Perhatikan simbol panah pada diagram alir (flowchart)!\n\nApa fungsi tanda panah pada diagram alir?',
    options: [
      { id: 'A', text: 'Sebagai penghapus huruf yang salah ketik' },
      { id: 'B', text: 'Menunjukkan arah jalannya urutan langkah program' },
      { id: 'C', text: 'Mengganti warna latar belakang layar monitor' },
      { id: 'D', text: 'Membuat suara musik berbunyi kencang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tanda panah (flowline) berfungsi menghubungkan simbol satu dengan simbol lainnya dan menunjukkan arah aliran proses algoritma.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Konsep Variabel',
    difficulty: 'Mudah',
    text: 'Dalam permainan koding, angka skor pemain disimpan di dalam tempat bernama "Variabel". Mengapa disebut variabel?',
    options: [
      { id: 'A', text: 'Karena nilainya tetap dan tidak boleh diganti sama sekali' },
      { id: 'B', text: 'Karena nilainya dapat berubah-ubah selama permainan berlangsung' },
      { id: 'C', text: 'Karena hanya bisa dibuka menggunakan gunting' },
      { id: 'D', text: 'Karena ukurannya selalu berupa gambar kucing' },
    ],
    correctAnswer: 'B',
    explanation:
      'Variabel diibaratkan wadah yang menyimpan data di memori komputer, dan nilai isinya dapat berubah-ubah (seperti skor yang terus bertambah).',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Algoritma Urutan Harian',
    difficulty: 'Mudah',
    text: 'Perhatikan urutan saat hendak berangkat ke sekolah:\n(1) Bangun pagi dan merapikan tempat tidur\n(2) Mandi dan memakai seragam sekolah\n(3) Sarapan pagi bersama keluarga\n(4) Berpamitan kepada orang tua lalu berangkat ke sekolah\n\nApakah urutan di atas sudah teratur dan logis?',
    options: [
      { id: 'A', text: 'Ya, urutannya sudah sangat baik dan logis' },
      { id: 'B', text: 'Tidak, seharusnya memakai seragam sebelum mandi' },
      { id: 'C', text: 'Tidak, berpamitan harus dilakukan saat masih tidur' },
      { id: 'D', text: 'Salah semua urutannya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan (1) bangun pagi, (2) mandi & seragam, (3) sarapan, dan (4) pamitan adalah urutan algoritma kegiatan harian yang paling logis dan tertib.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Input dan Output Komputer',
    difficulty: 'Mudah',
    text: 'Ketika kamu mengetik nama menggunakan keyboard, nama tersebut langsung muncul di layar monitor. Keyboard bertindak sebagai perangkat...',
    options: [
      { id: 'A', text: 'Masukan (Input)' },
      { id: 'B', text: 'Keluaran (Output)' },
      { id: 'C', text: 'Penyimpanan Kaset' },
      { id: 'D', text: 'Pendingin Udara' },
    ],
    correctAnswer: 'A',
    explanation:
      'Keyboard adalah perangkat input (masukan) yang digunakan untuk memasukkan data atau perintah ke dalam komputer.',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 21 - 25)
  // Seluruh soal dirancang dengan instruksi mudah dipahami siswa kelas V SD
  // Kemungkinan lebih dari 1 pilihan jawaban benar.
  // =========================================================================
  {
    id: 21,
    type: 'pgk',
    topic: 'Pilar Berpikir Komputasional',
    difficulty: 'Mudah',
    text: 'Manakah di antara pilihan berikut yang termasuk ke dalam pilar Berpikir Komputasional? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Dekomposisi (memecah masalah jadi bagian kecil)' },
      { id: 'B', text: 'Pengenalan Pola (mencari kesamaan pola)' },
      { id: 'C', text: 'Membeli jajan di kantin sekolah' },
      { id: 'D', text: 'Algoritma (menyusun langkah-langkah teratur)' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Dekomposisi, Pengenalan Pola, dan Algoritma (beserta Abstraksi) adalah pilar-pilar berpikir komputasional. Membeli jajan adalah kegiatan sehari-hari, bukan pilar berpikir komputasional.',
  },
  {
    id: 22,
    type: 'pgk',
    topic: 'Ciri-Ciri Algoritma yang Baik',
    difficulty: 'Mudah',
    text: 'Sebuah algoritma langkah kerja yang baik harus memiliki sifat apa saja? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Setiap langkah instruksi jelas dan mudah dimengerti' },
      { id: 'B', text: 'Langkah-langkahnya tersusun secara berurutan dan teratur' },
      { id: 'C', text: 'Harus membingungkan dan tidak jelas tujuannya' },
      { id: 'D', text: 'Memiliki titik mulai dan titik selesai' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Algoritma yang baik memiliki langkah yang jelas, teratur berurutan, serta memiliki awal (Mulai) dan akhir (Selesai). Algoritma tidak boleh membingungkan.',
  },
  {
    id: 23,
    type: 'pgk',
    topic: 'Contoh Perulangan (Looping) di Sekitar Kita',
    difficulty: 'Mudah',
    text: 'Kegiatan apa saja di bawah ini yang melakukan gerakan secara berulang-ulang (looping)? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Mengayuh pedal sepeda berkali-kali sampai tiba di sekolah' },
      { id: 'B', text: 'Jarum detik jam dinding yang terus berputar berulang kali' },
      { id: 'C', text: 'Menyalakan lampu sakelar ruang kelas satu kali di pagi hari' },
      { id: 'D', text: 'Memompa ban sepeda naik-turun sampai terisi angin penuh' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Mengayuh sepeda berkali-kali, putaran jarum jam, dan memompa ban berulang kali adalah contoh nyata perulangan. Menyalakan sakelar satu kali adalah aksi tunggal.',
  },
  {
    id: 24,
    type: 'pgk',
    topic: 'Manfaat Belajar Koding dan Algoritma',
    difficulty: 'Mudah',
    text: 'Apa saja manfaat baik yang kita dapatkan dari belajar koding dan algoritma sejak sekolah dasar? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Melatih kemampuan berpikir kreatif dan menyelesaikan masalah' },
      { id: 'B', text: 'Membuat kita terbiasa berpikir runut dan tertib' },
      { id: 'C', text: 'Membuat kita malas belajar pelajaran lain' },
      { id: 'D', text: 'Membantu kita dapat membuat karya game atau animasi sendiri' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Belajar koding melatih daya pikir kreatif, problem solving, melatih ketertiban berpikir, serta memampukan siswa membuat karya animasi dan game.',
  },
  {
    id: 25,
    type: 'pgk',
    topic: 'Kecerdasan Artifisial (AI) dalam Kehidupan Sehari-hari',
    difficulty: 'Mudah',
    text: 'Manakah teknologi di bawah ini yang menggunakan kemampuan Kecerdasan Artifisial (AI)? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Asisten pintar di HP yang bisa menjawab pertanyaan suara kita' },
      { id: 'B', text: 'Papan tulis kayu yang menggunakan kapur tulis' },
      { id: 'C', text: 'Aplikasi kamera pintar yang otomatis mendeteksi senyuman' },
      { id: 'D', text: 'Penerjemah bahasa otomatis yang mengubah teks Indonesia ke Inggris' },
    ],
    correctAnswer: ['A', 'C', 'D'],
    explanation:
      'Asisten suara, deteksi senyum otomatis di kamera, dan penerjemah bahasa cerdas adalah contoh teknologi yang memanfaatkan AI. Papan tulis kayu adalah peralatan tradisional.',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS KATEGORI (5 BUTIR SOAL: NO. 26 - 30)
  // Soal mudah dengan kategori Benar/Salah, Setuju/Tidak Setuju, Sesuai/Tidak Sesuai.
  // =========================================================================
  {
    id: 26,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Kategori: Aturan Langkah Algoritma',
    difficulty: 'Mudah',
    text: 'Tentukan pilihan "BENAR" atau "SALAH" untuk setiap pernyataan dasar koding berikut!',
    statements: [
      {
        id: 's1',
        text: 'Komputer akan menjalankan perintah persis sesuai urutan langkah yang diberikan oleh pembuat kode.',
        correctAnswer: true, // BENAR
      },
      {
        id: 's2',
        text: 'Debugging adalah proses memperbaiki kesalahan perintah agar program kembali berjalan lancar.',
        correctAnswer: true, // BENAR
      },
      {
        id: 's3',
        text: 'Langkah algoritma boleh ditukar-tukar sembarangan karena komputer pasti selalu tahu sendiri apa yang kita inginkan.',
        correctAnswer: false, // SALAH
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (komputer bekerja menurut instruksi). Pernyataan 2 BENAR (debugging memperbaiki error). Pernyataan 3 SALAH karena komputer membutuhkan instruksi urut yang tepat dan tidak bisa menebak pikiran manusia.',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Kategori: Simbol Sederhana Diagram Alir',
    difficulty: 'Mudah',
    text: 'Tentukan pilihan "BENAR" atau "SALAH" mengenai fungsi simbol diagram alir berikut!',
    statements: [
      {
        id: 's1',
        text: 'Simbol oval digunakan untuk menandai bagian MULAI atau SELESAI dari suatu alur program.',
        correctAnswer: true, // BENAR
      },
      {
        id: 's2',
        text: 'Simbol panah digunakan untuk menunjukkan ke mana arah langkah selanjutnya mengalir.',
        correctAnswer: true, // BENAR
      },
      {
        id: 's3',
        text: 'Simbol belah ketupat digunakan hanya untuk mewarnai gambar pemandangan di komputer.',
        correctAnswer: false, // SALAH
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (Terminator oval). Pernyataan 2 BENAR (Flowline panah penunjuk arah). Pernyataan 3 SALAH karena belah ketupat adalah simbol keputusan (decision), bukan untuk mewarnai.',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    categoryType: 'sesuai_tidak_sesuai',
    topic: 'Kategori: Kesesuaian Logika Langkah',
    difficulty: 'Mudah',
    text: 'Tentukan apakah pernyataan berikut "SESUAI" atau "TIDAK SESUAI" dengan logika urutan yang benar!',
    statements: [
      {
        id: 's1',
        text: 'Perintah: "Maju 2 langkah lalu Maju 2 langkah lagi" menghasilkan jarak yang sama dengan "Maju 4 langkah".',
        correctAnswer: true, // SESUAI
      },
      {
        id: 's2',
        text: 'Memakai sepatu terlebih dahulu sebelum memakai kaus kaki adalah urutan yang tepat.',
        correctAnswer: false, // TIDAK SESUAI
      },
      {
        id: 's3',
        text: 'Perintah pengulangan membantu kita agar tidak lelah mengetik instruksi yang sama berkali-kali.',
        correctAnswer: true, // SESUAI
      },
    ],
    explanation:
      'Pernyataan 1 SESUAI (2 + 2 = 4 langkah). Pernyataan 2 TIDAK SESUAI karena kaus kaki harus dipakai sebelum sepatu. Pernyataan 3 SESUAI karena looping menghemat penulisan perintah.',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    categoryType: 'setuju_tidak_setuju',
    topic: 'Kategori: Semangat Belajar Koding',
    difficulty: 'Mudah',
    text: 'Tentukan apakah kamu "SETUJU" atau "TIDAK SETUJU" dengan sikap belajar koding di bawah ini!',
    statements: [
      {
        id: 's1',
        text: 'Saat program koding buatan kita mengalami eror (bug), kita harus sabar mencari letak salahnya dan memperbaikinya.',
        correctAnswer: true, // SETUJU
      },
      {
        id: 's2',
        text: 'Belajar koding dan logika hanya boleh dipelajari oleh orang dewasa dan tidak cocok untuk anak sekolah dasar.',
        correctAnswer: false, // TIDAK SETUJU
      },
      {
        id: 's3',
        text: 'Bekerja sama dan saling berdiskusi dengan teman saat membuat proyek koding adalah kegiatan yang menyenangkan.',
        correctAnswer: true, // SETUJU
      },
    ],
    explanation:
      'Pernyataan 1 SETUJU (sikap pantang menyerah dalam debugging). Pernyataan 2 TIDAK SETUJU (koding sangat baik dipelajari sejak anak-anak). Pernyataan 3 SETUJU (kolaborasi mempercepat pemecahan masalah).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Kategori: Logika Percabangan Jika-Maka',
    difficulty: 'Mudah',
    text: 'Tentukan pilihan "BENAR" atau "SALAH" untuk aturan logika percabangan (JIKA - MAKA) berikut!',
    statements: [
      {
        id: 's1',
        text: 'Aturan "JIKA bel sekolah berbunyi MAKA siswa masuk ke dalam kelas" adalah contoh percabangan logika.',
        correctAnswer: true, // BENAR
      },
      {
        id: 's2',
        text: 'Perintah di dalam kata MAKA hanya akan dijalankan jika kondisi JIKA bernilai BENAR.',
        correctAnswer: true, // BENAR
      },
      {
        id: 's3',
        text: 'Komputer selalu menjalankan seluruh pilihan sekaligus tanpa memeriksa syarat yang diminta.',
        correctAnswer: false, // SALAH
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (kondisi bel -> aksi masuk kelas). Pernyataan 2 BENAR (blok then/maka dieksekusi jika kondisi benar). Pernyataan 3 SALAH karena komputer memeriksa syarat terlebih dahulu sebelum memilih cabang.',
  },

  // =========================================================================
  // ISIAN SINGKAT (5 BUTIR SOAL: NO. 31 - 35)
  // Soal mudah dengan kata kunci istilah dasar yang ramah siswa kelas V SD
  // Siswa mengetik teks jawaban singkat (case-insensitive).
  // =========================================================================
  {
    id: 31,
    type: 'isian',
    topic: 'Istilah Dasar Algoritma',
    difficulty: 'Mudah',
    text: 'Urutan langkah-langkah teratur dan logis untuk menyelesaikan suatu masalah pada komputer disebut...',
    correctAnswer: 'algoritma',
    acceptableAnswers: ['algoritma', 'algoritme', 'algorithm'],
    explanation:
      'Jawabannya adalah "algoritma". Algoritma adalah urutan instruksi teratur dan terencana untuk memecahkan suatu masalah.',
  },
  {
    id: 32,
    type: 'isian',
    topic: 'Istilah Pemrograman',
    difficulty: 'Mudah',
    text: 'Proses mencari dan memperbaiki kesalahan atau kutu (bug) pada program komputer dinamakan...',
    correctAnswer: 'debugging',
    acceptableAnswers: ['debugging', 'debug', 'debuuging'],
    explanation:
      'Jawabannya adalah "debugging". Berasal dari kata bug (kutu kesalahan), dan proses memperbaikinya disebut debugging.',
  },
  {
    id: 33,
    type: 'isian',
    topic: 'Bentuk Simbol Diagram Alir',
    difficulty: 'Mudah',
    text: 'Simbol diagram alir (flowchart) untuk memeriksa pilihan kondisi (Ya atau Tidak) memiliki bentuk bangun datar...',
    correctAnswer: 'belah ketupat',
    acceptableAnswers: ['belah ketupat', 'diamond', 'ketupat', 'belahketupat'],
    explanation:
      'Jawabannya adalah "belah ketupat" (atau diamond). Simbol ini digunakan untuk percabangan keputusan.',
  },
  {
    id: 34,
    type: 'isian',
    topic: 'Struktur Kontrol',
    difficulty: 'Mudah',
    text: 'Perintah dalam koding yang digunakan untuk mengulang suatu tindakan berkali-kali disebut...',
    correctAnswer: 'looping',
    acceptableAnswers: ['looping', 'loop', 'perulangan', 'pengulangan'],
    explanation:
      'Jawabannya adalah "looping" (atau perulangan), yang berguna menjalankan perintah berulang tanpa harus mengetiknya kembali.',
  },
  {
    id: 35,
    type: 'isian',
    topic: 'Penyimpanan Nilai Game',
    difficulty: 'Mudah',
    text: 'Tempat di memori komputer yang diberi nama untuk menyimpan data yang nilainya dapat berubah (seperti skor game) dinamakan...',
    correctAnswer: 'variabel',
    acceptableAnswers: ['variabel', 'variable'],
    explanation:
      'Jawabannya adalah "variabel". Variabel berfungsi seperti kotak penyimpanan nilai data (misalnya skor atau nama pemain) yang isinya bisa berubah.',
  },
];
