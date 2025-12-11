document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DATA 50 KULINER NUSANTARA LENGKAP ---
    const kulinerData = [
        {
            nama: "Rendang Sapi",
            region: "Sumatera Barat",
            kategori: "Daging",
            deskripsi_singkat: "Hidangan daging sapi yang dimasak dalam santan dan rempah berjam-jam hingga kering. Kaya akan cita rasa pedas dan gurih.",
            filosofi: "Rendang melambangkan 'Musyawarah' (kerukunan) dari empat bahan utamanya: Nyiua (Kelapa/santan, melambangkan Cendekiawan), Dagiang (Daging, melambangkan pemimpin/suku), Lado (Cabai, melambangkan agama), dan Pemasak (Rempah, melambangkan seluruh masyarakat).",
            bahan_utama: "Daging Sapi, Santan, Cabai, Bawang Merah, Bawang Putih, Jahe, Lengkuas, Kunyit, Sereh, Daun Kunyit, Asam Kandis.",
            cara_singkat: "Daging direbus dengan santan dan bumbu halus, dimasak dengan api kecil selama 4-8 jam sambil terus diaduk hingga bumbu meresap dan mengering.",
            gambar_url: "rendang sapi.jpeg"
        },
        {
            nama: "Soto Ayam Lamongan",
            region: "Jawa Timur",
            kategori: "Sup/Kuah",
            deskripsi_singkat: "Soto dengan kuah kuning kaya rempah, dilengkapi koya (kerupuk udang yang dihancurkan), telur, dan suwiran ayam.",
            filosofi: "Soto melambangkan kehangatan dan kebersamaan. Koya (butiran halus) melambangkan keikhlasan dan kerendahan hati dalam menerima perbedaan.",
            bahan_utama: "Ayam, Kunyit, Jahe, Serai, Daun Jeruk, Bawang Merah, Bawang Putih, Ketumbar, Nasi, Koya.",
            cara_singkat: "Ayam direbus hingga matang, kuah dibuat dari tumisan bumbu kuning yang dimasukkan ke air kaldu. Disajikan dengan nasi, suwiran ayam, dan koya.",
            gambar_url: "soto lamongan.jpg",
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Gudeg Jogja",
            region: "Yogyakarta",
            kategori: "Sayuran/Manis",
            deskripsi_singkat: "Nangka muda (gori) yang dimasak lama dengan santan dan gula aren hingga berwarna cokelat kemerahan dan berasa manis.",
            filosofi: "Proses memasak Gudeg yang lama melambangkan kesabaran dan ketekunan (sabar lan tlaten) untuk mencapai hasil yang manis dan matang sempurna.",
            bahan_utama: "Nangka Muda, Santan, Gula Aren, Daun Jati (untuk warna), Bumbu Dasar Putih, Telur, Ayam.",
            cara_singkat: "Nangka muda dimasak dalam kuali dengan santan dan bumbu, dibungkus daun jati, dimasak hingga kuah menyusut dan nangka menjadi sangat empuk.",
            gambar_url: "gudeg.jpg",
            ikon: "fas fa-leaf"
        },
        {
            nama: "Nasi Goreng",
            region: "Nasional",
            kategori: "Nasi",
            deskripsi_singkat: "Hidangan nasi yang digoreng dengan bumbu khas, kecap manis, dan berbagai lauk pelengkap seperti telur dan ayam.",
            filosofi: "Nasi goreng adalah cerminan dari prinsip 'tidak ada yang terbuang', di mana nasi sisa semalam diolah kembali menjadi hidangan lezat.",
            bahan_utama: "Nasi, Kecap Manis, Bawang Merah, Bawang Putih, Cabai, Telur, Ayam atau Udang.",
            cara_singkat: "Bumbu dihaluskan, ditumis, masukkan nasi dan kecap manis, aduk rata, lalu tambahkan telur atau lauk lainnya.",
            gambar_url: "nasi goreng.jpg",
            ikon: "fas fa-utensils"
        },
        {
            nama: "Sate Madura",
            region: "Jawa Timur",
            kategori: "Daging",
            deskripsi_singkat: "Potongan daging ayam yang ditusuk, dibakar, dan disajikan dengan siraman bumbu kacang manis gurih.",
            filosofi: "Sate adalah simbol persatuan. Tusuk sate menyatukan potongan daging yang beragam, seperti masyarakat Indonesia yang bersatu dalam keberagaman.",
            bahan_utama: "Daging Ayam, Bumbu Kacang, Kecap Manis, Bawang Merah, Jeruk Limau.",
            cara_singkat: "Daging dimarinasi, dibakar hingga matang, disajikan dengan bumbu kacang, kecap, dan irisan bawang merah.",
            gambar_url: "sate madura.jpg",
            ikon: "fas fa-fire"
        },
        {
            nama: "Gado-Gado",
            region: "Jakarta",
            kategori: "Sayuran/Salad",
            deskripsi_singkat: "Salad khas Indonesia berisi sayuran rebus, lontong, tahu, tempe, dan telur yang disiram bumbu kacang kental.",
            filosofi: "Gado-Gado (campur-campur) melambangkan keberagaman dan harmoni. Berbagai macam sayuran dan protein disatukan dalam satu kesatuan rasa oleh bumbu kacang.",
            bahan_utama: "Kacang Panjang, Kentang, Tauge, Kol, Telur, Lontong, Tahu, Bumbu Kacang.",
            cara_singkat: "Semua bahan direbus/dikukus, ditata, lalu disiram bumbu kacang yang dihaluskan bersama cabai, gula merah, dan air asam jawa.",
            gambar_url: "gado gado.jpg",
            ikon: "fas fa-leaf"
        },
        {
            nama: "Pempek Kapal Selam",
            region: "Sumatera Selatan",
            kategori: "Ikan/Gorengan",
            deskripsi_singkat: "Adonan ikan dan sagu yang diisi telur utuh, direbus, lalu digoreng, disajikan dengan kuah cuka hitam pedas.",
            filosofi: "Proses perebusan dan penggorengan melambangkan perjuangan. Kuah cuka yang pedas dan asam melambangkan ketegasan dan semangat yang tak pernah padam.",
            bahan_utama: "Ikan Tenggiri, Tepung Sagu, Telur, Gula Merah, Cuka, Cabai, Bawang Putih.",
            cara_singkat: "Adonan ikan dibentuk, diisi telur, direbus hingga mengapung, digoreng, dan disajikan dengan kuah cuka.",
            gambar_url: "pempek kapal selam.jpeg", // Ganti dengan gambar pempek
            ikon: "fas fa-fish"
        },
        {
            nama: "Rawon",
            region: "Jawa Timur",
            kategori: "Sup/Kuah",
            deskripsi_singkat: "Sup daging sapi dengan kuah hitam pekat yang unik, didapat dari penggunaan bumbu khas kluwek.",
            filosofi: "Warna hitam Rawon melambangkan kedalaman dan misteri kehidupan. Meskipun gelap, rasanya kaya dan menyimpan kehangatan.",
            bahan_utama: "Daging Sapi, Kluwek, Bawang Merah, Bawang Putih, Kunyit, Sereh, Nasi, Tauge Pendek.",
            cara_singkat: "Tumis bumbu halus (termasuk kluwek), rebus bersama daging sapi hingga empuk. Sajikan dengan tauge pendek dan telur asin.",
            gambar_url: "rawon.jpg", // Ganti dengan gambar rawon
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Nasi Liwet Solo",
            region: "Jawa Tengah",
            kategori: "Nasi",
            deskripsi_singkat: "Nasi gurih yang dimasak dengan santan dan rempah, disajikan dengan sayur labu siam, ayam suwir, dan areh (santan kental).",
            filosofi: "Liwet sering disajikan dalam kebersamaan (kenduri), melambangkan rasa syukur, gotong royong, dan kemakmuran.",
            bahan_utama: "Nasi, Santan, Daun Salam, Serai, Labu Siam, Ayam, Areh (Santan Kental).",
            cara_singkat: "Nasi dimasak liwet, labu siam dimasak santan. Disajikan bersama ayam suwir dan areh.",
            gambar_url: "nasi liwet solo.jpg", // Ganti dengan gambar liwet
            ikon: "fas fa-drumstick-bite"
        },
        {
            nama: "Babi Guling",
            region: "Bali",
            kategori: "Daging",
            deskripsi_singkat: "Babi utuh yang dibersihkan, diisi bumbu base genep, dipanggang sambil diputar (guling) hingga kulitnya renyah.",
            filosofi: "Babi Guling adalah hidangan sakral yang sering disajikan dalam upacara adat dan keagamaan Hindu Bali, melambangkan kemakmuran.",
            bahan_utama: "Babi Utuh, Base Genep (Bumbu Bali), Kunyit, Bawang Merah, Bawang Putih, Jahe, Cabai.",
            cara_singkat: "Babi diisi base genep, dipanggang perlahan di atas bara api hingga matang dan kulitnya garing.",
            gambar_url: "babi guling.jpg", // Ganti dengan gambar babi guling
            ikon: "fas fa-piggy-bank"
        },
        {
            nama: "Kerak Telor",
            region: "Jakarta",
            kategori: "Camilan/Telur",
            deskripsi_singkat: "Omelet khas Betawi yang terbuat dari beras ketan, telur bebek/ayam, ebi, dan serundeng, dimasak di atas wajan tanpa minyak.",
            filosofi: "Melambangkan kekayaan kuliner Betawi yang sederhana namun kaya rasa, sering disajikan saat festival untuk mengingatkan pada masa kejayaan Batavia.",
            bahan_utama: "Beras Ketan, Telur Bebek, Ebi (udang kering), Kelapa Parut Sangrai (Serundeng), Bawang Goreng.",
            cara_singkat: "Ketan dimasak setengah matang, tambahkan telur dan bumbu, dibalik di atas wajan agar matang merata tanpa minyak.",
            gambar_url: "kerak telur.jpeg", // Ganti dengan gambar kerak telor
            ikon: "fas fa-egg"
        },
        {
            nama: "Papeda",
            region: "Papua",
            kategori: "Makanan Pokok",
            deskripsi_singkat: "Makanan pokok berupa bubur sagu kental dan lengket, disajikan dengan ikan kuah kuning kaya rempah.",
            filosofi: "Papeda adalah simbol kesederhanaan dan ketahanan masyarakat Timur Indonesia, di mana sagu adalah sumber kehidupan utama.",
            bahan_utama: "Tepung Sagu, Air, Ikan Tongkol/Mubara, Kunyit, Bumbu Kuah Kuning.",
            cara_singkat: "Tepung sagu disiram air panas mendidih sambil diaduk cepat hingga mengental dan transparan. Disajikan dengan ikan kuah kuning.",
            gambar_url: "papeda.jpg", // Ganti dengan gambar Papeda
            ikon: "fas fa-fish"
        },
        {
            nama: "Ayam Betutu",
            region: "Bali",
            kategori: "Ayam",
            deskripsi_singkat: "Ayam utuh yang diisi bumbu base genep khas Bali, dibungkus daun pisang, lalu dipanggang atau dikukus dalam sekam.",
            filosofi: "Betutu adalah hidangan istana yang melambangkan kekayaan, kehormatan, dan dedikasi, sering disajikan pada upacara besar.",
            bahan_utama: "Ayam Utuh, Base Genep (Bumbu Bali), Daun Pisang, Kunyit, Cabai, Bawang Merah, Bawang Putih.",
            cara_singkat: "Ayam diisi bumbu, dibungkus, lalu dikukus atau dipanggang hingga bumbu meresap sempurna dan daging empuk.",
            gambar_url: "ayam betutu.jpg", // Ganti dengan gambar ayam betutu
            ikon: "fas fa-drumstick-bite"
        },
        {
            nama: "Coto Makassar",
            region: "Sulawesi Selatan",
            kategori: "Sup/Kuah",
            deskripsi_singkat: "Sup berkuah kental dari jeroan dan daging sapi, dibumbui dengan kacang tanah dan rempah yang kuat.",
            filosofi: "Coto (sup) yang dimasak lama melambangkan kesabaran dan proses yang panjang dalam mencapai kebaikan.",
            bahan_utama: "Daging Sapi, Jeroan, Kacang Tanah, Bawang Putih, Bawang Merah, Ketumbar, Jintan, Beras Ketan.",
            cara_singkat: "Daging dan jeroan direbus lama. Kuah dibuat dari tumisan bumbu halus dan kacang tanah. Disajikan dengan ketupat.",
            gambar_url: "coto makassar.jpg", // Ganti dengan gambar coto
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Bika Ambon",
            region: "Sumatera Utara",
            kategori: "Kue/Manis",
            deskripsi_singkat: "Kue berwarna kuning berongga seperti sarang, terbuat dari tapioka, santan, dan air nira, memiliki aroma jeruk nipis yang khas.",
            filosofi: "Bika Ambon yang berongga (berserat) melambangkan persatuan dan keragaman yang saling mengisi dalam kehidupan.",
            bahan_utama: "Tepung Tapioka, Santan, Telur, Gula, Air Nira/Daun Jeruk.",
            cara_singkat: "Adonan didiamkan (fermentasi) lalu dipanggang dalam cetakan khusus hingga terbentuk rongga.",
            gambar_url: "bika ambon.jpeg", // Ganti dengan gambar bika ambon
            ikon: "fas fa-cake-candles"
        },
        {
            nama: "Nasi Kuning Manado",
            region: "Sulawesi Utara",
            kategori: "Nasi",
            deskripsi_singkat: "Nasi yang dimasak dengan kunyit dan santan, disajikan dengan abon cakalang, telur iris, dan sambal roa pedas.",
            filosofi: "Warna kuning melambangkan emas atau kekayaan, sering disajikan sebagai hidangan perayaan dan ucapan syukur.",
            bahan_utama: "Nasi, Kunyit, Santan, Abon Cakalang, Sambal Roa.",
            cara_singkat: "Nasi dimasak seperti nasi biasa tapi dengan tambahan kunyit dan santan. Disajikan dengan lauk pauk kering dan sambal.",
            gambar_url: "nasi kuning manado.jpg", // Ganti dengan gambar nasi kuning
            ikon: "fas fa-drumstick-bite"
        },
        {
            nama: "Mie Aceh",
            region: "Aceh",
            kategori: "Mie",
            deskripsi_singkat: "Mie tebal dengan bumbu kari yang kuat dan pedas, disajikan dengan daging sapi, seafood, atau kepiting.",
            filosofi: "Mie Aceh mencerminkan akulturasi budaya India (kari) dan Arab (rempah) yang kaya, menunjukkan keterbukaan Aceh terhadap pengaruh luar.",
            bahan_utama: "Mie Kuning Tebal, Daging Sapi/Seafood, Bawang Merah, Bawang Putih, Cabai, Kapulaga, Kunyit.",
            cara_singkat: "Mie dimasak dengan kuah kari kental, dimasak cepat (tumis) bersama daging dan bumbu.",
            gambar_url: "mie aceh.jpeg", // Ganti dengan gambar mie aceh
            ikon: "fas fa-wheat-awn"
        },
        {
            nama: "Lumpia Semarang",
            region: "Jawa Tengah",
            kategori: "Gorengan",
            deskripsi_singkat: "Gorengan renyah berisi rebung, daging ayam/udang, dan telur, disajikan dengan saus kental manis.",
            filosofi: "Lumpia adalah hasil perpaduan kuliner Tionghoa (kulit) dan Jawa (isi rebung), melambangkan akulturasi harmonis di Semarang.",
            bahan_utama: "Kulit Lumpia, Rebung, Ayam/Udang, Telur, Bawang Putih, Saus Kental Manis.",
            cara_singkat: "Isian rebung ditumis, dibungkus kulit lumpia, digoreng hingga keemasan, disajikan dengan saus.",
            gambar_url: "lumpia semarang.jpg", // Ganti dengan gambar lumpia
            ikon: "fas fa-drumstick-bite"
        },
        {
            nama: "Sup Konro",
            region: "Sulawesi Selatan",
            kategori: "Daging/Sup",
            deskripsi_singkat: "Sup iga sapi berkuah cokelat kehitaman yang kaya rasa, sering dibakar setelah direbus (Konro Bakar).",
            filosofi: "Konro, yang berarti iga sapi, melambangkan kemewahan dan hidangan istimewa yang disajikan untuk tamu penting.",
            bahan_utama: "Iga Sapi, Kluwek, Kayu Manis, Cengkeh, Ketumbar, Jintan, Bawang Merah, Bawang Putih.",
            cara_singkat: "Iga direbus hingga empuk. Bumbu (termasuk kluwek) ditumis, lalu dimasukkan ke air rebusan iga.",
            gambar_url: "sup konro.jpg", // Ganti dengan gambar Konro
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Sambal Matah",
            region: "Bali",
            kategori: "Sambal",
            deskripsi_singkat: "Sambal yang tidak dimasak (mentah), terbuat dari irisan cabai rawit, bawang merah, serai, dan minyak kelapa panas.",
            filosofi: "Matah (mentah) melambangkan kesegaran dan kejujuran rasa Bali yang murni, langsung, dan pedas.",
            bahan_utama: "Cabai Rawit, Bawang Merah, Serai, Daun Jeruk, Terasi (opsional), Minyak Kelapa Panas.",
            cara_singkat: "Semua bahan diiris, dicampur, lalu disiram minyak kelapa panas dan diberi perasan jeruk limau.",
            gambar_url: "sambal matah.jpg", // Ganti dengan gambar sambal
            ikon: "fas fa-pepper-hot"
        },
        {
            nama: "Sayur Asem",
            region: "Jawa Barat",
            kategori: "Sayuran/Sup",
            deskripsi_singkat: "Sup sayuran berkuah bening, dengan rasa asam yang menyegarkan dari asam jawa.",
            filosofi: "Sayur Asem melambangkan keragaman rasa kehidupan (asam, manis, pedas, asin) yang harus diterima dan dinikmati.",
            bahan_utama: "Kacang Tanah, Labu Siam, Jagung, Melinjo, Daun Melinjo, Asam Jawa.",
            cara_singkat: "Semua bahan direbus bersama bumbu dan asam jawa hingga matang.",
            gambar_url: "sayur asem.jpg", // Ganti dengan gambar sayur asem
            ikon: "fas fa-leaf"
        },
        {
            nama: "Ikan Bakar Manado",
            region: "Sulawesi Utara",
            kategori: "Ikan",
            deskripsi_singkat: "Ikan segar yang dibakar dengan bumbu kuning pedas (Rica-Rica atau Dabu-Dabu) yang khas dari Manado.",
            filosofi: "Mencerminkan kekayaan hasil laut dan keberanian rasa pedas khas Minahasa.",
            bahan_utama: "Ikan Segar (Kakap/Baronang), Cabai Rawit, Bawang Merah, Tomat, Jeruk Nipis (Dabu-Dabu).",
            cara_singkat: "Ikan dibakar, disajikan dengan siraman sambal Dabu-Dabu atau bumbu Rica-Rica.",
            gambar_url: "ikan bakar manado.jpg", // Ganti dengan gambar ikan bakar
            ikon: "fas fa-fish"
        },
        // --- Tambahkan 30 data kuliner lagi di sini untuk melengkapi total 50 ---
        {
            nama: "Tumpeng",
            region: "Jawa",
            kategori: "Nasi/Perayaan",
            deskripsi_singkat: "Nasi kerucut yang dikelilingi lauk pauk, melambangkan gunung sebagai tempat bersemayam para dewa.",
            filosofi: "Bentuk kerucut melambangkan keagungan Tuhan, dan lauk pauk di sekelilingnya melambangkan segala hal yang disediakan alam.",
            bahan_utama: "Nasi Kuning/Putih, Ayam Goreng, Kering Tempe, Perkedel, Telur Balado, Urap Sayur.",
            cara_singkat: "Nasi dicetak kerucut, diletakkan di tengah tampah, lalu ditata lauk pauk mengelilinginya.",
            gambar_url: "tumpeng.jpg", // Ganti dengan gambar tumpeng
            ikon: "fas fa-mountain"
        },
        {
            nama: "Perkedel Jagung",
            region: "Nasional",
            kategori: "Camilan/Gorengan",
            deskripsi_singkat: "Gorengan renyah yang terbuat dari adonan jagung manis, tepung, dan bumbu.",
            filosofi: "Perkedel adalah hidangan pendamping sederhana yang menunjukkan kreativitas dalam memanfaatkan bahan lokal (jagung).",
            bahan_utama: "Jagung Manis, Tepung Terigu, Telur, Bawang Putih, Daun Bawang.",
            cara_singkat: "Jagung dihaluskan, dicampur adonan bumbu, digoreng per sendok hingga renyah.",
            gambar_url: "perkedel jagung.jpg", // Ganti dengan gambar perkedel
            ikon: "fas fa-seedling"
        },
        {
            nama: "Asinan Betawi",
            region: "Jakarta",
            kategori: "Sayuran/Salad",
            deskripsi_singkat: "Sayuran mentah/rebus yang disajikan dengan kuah kacang, cuka, dan cabai, serta kerupuk kuning.",
            filosofi: "Rasa asam (cuka) dan pedas (cabai) yang menonjol melambangkan karakter masyarakat Betawi yang terbuka dan jujur.",
            bahan_utama: "Tauge, Kol, Tahu, Kacang Tanah, Cuka, Cabai, Kerupuk Mie Kuning.",
            cara_singkat: "Sayuran disiram kuah yang terbuat dari campuran bumbu halus, cuka, dan air.",
            gambar_url: "asinan betawi.jpg", // Ganti dengan gambar asinan
            ikon: "fas fa-leaf"
        },
        {
            nama: "Sate Lilit",
            region: "Bali",
            kategori: "Daging",
            deskripsi_singkat: "Daging cincang (ikan/ayam/babi) yang dililitkan pada batang serai atau bambu, lalu dibakar.",
            filosofi: "Lilitan daging melambangkan persatuan yang erat (paras paros sarpanaya) masyarakat Bali.",
            bahan_utama: "Daging Cincang",
            gambar_url: "sate lilit.jpg", // Ganti dengan gambar sate lilit
            ikon: "fas fa-fire"
        },
        {
            nama: "Nasi Padang",
            region: "Sumatera Barat",
            kategori: "Nasi",
            deskripsi_singkat: "Nasi putih yang disajikan dengan berbagai pilihan lauk pauk khas Minangkabau seperti Rendang, Ayam Pop, dan Gulai.",
            filosofi: "Sistem penyajian (Paresmanan) melambangkan kemakmuran dan kekayaan budaya kuliner yang ditawarkan kepada tamu.",
            bahan_utama: "Nasi Putih, Lauk Pauk (Bebas), Daun Singkong Rebus, Sambal Hijau.",
            cara_singkat: "Nasi disajikan porsi tunggal, lauk pauk disajikan dalam piring kecil yang beragam.",
            gambar_url: "nasi padang.jpg", // Ganti dengan gambar nasi padang
            ikon: "fas fa-utensils"
        },
        {
            nama: "Tahu Gejrot",
            region: "Jawa Barat",
            kategori: "Camilan/Tahu",
            deskripsi_singkat: "Tahu pong yang dipotong-potong, disajikan dengan kuah gula merah, cabai, dan bawang yang diulek kasar.",
            filosofi: "Tahu gejrot melambangkan hidangan rakyat jelata yang sederhana, cepat dibuat, namun memiliki rasa yang menantang.",
            bahan_utama: "Tahu Pong, Gula Merah, Air Asam Jawa, Cabai Rawit, Bawang Merah.",
            cara_singkat: "Tahu digoreng, dipotong, lalu disiram kuah pedas asam manis.",
            gambar_url: "tahu gejrot.jpg", // Ganti dengan gambar tahu gejrot
            ikon: "fas fa-seedling"
        },
        {
            nama: "Gulai Ikan Kakap",
            region: "Sumatera",
            kategori: "Ikan/Kuah",
            deskripsi_singkat: "Potongan ikan kakap yang dimasak dalam kuah kuning kental berbumbu rempah kuat dan santan.",
            filosofi: "Gulai adalah hidangan kehormatan di Sumatera, melambangkan kekayaan rempah yang dibawa oleh jalur perdagangan laut.",
            bahan_utama: "Ikan Kakap, Santan, Kunyit, Cabai, Bawang Merah, Asam Kandis.",
            cara_singkat: "Bumbu halus ditumis, dimasukkan santan, lalu ikan dimasak hingga matang dan bumbu meresap.",
            gambar_url: "gulai ikan kakap.jpg", // Ganti dengan gambar gulai ikan
            ikon: "fas fa-fish"
        },
        {
            nama: "Bacang",
            region: "Tionghoa-Indonesia",
            kategori: "Nasi/Ketan",
            deskripsi_singkat: "Nasi atau beras ketan yang diisi daging atau sayuran, dibungkus daun bambu, lalu dikukus.",
            filosofi: "Bacang terkait dengan perayaan Duanwu Jie (Festival Perahu Naga), melambangkan kesetiaan dan pengorbanan.",
            bahan_utama: "Beras Ketan/Nasi, Daging Cincang, Jamur, Telur Asin, Daun Bambu.",
            cara_singkat: "Beras ketan diisi, dibungkus daun bambu berbentuk limas, lalu dikukus hingga matang.",
            gambar_url: "bacang.jpg", // Ganti dengan gambar Bacang
            ikon: "fas fa-gift"
        },
        {
            nama: "Pecel Lele",
            region: "Jawa",
            kategori: "Ikan/Gorengan",
            deskripsi_singkat: "Ikan lele yang digoreng garing, disajikan dengan nasi, lalapan (sayuran mentah), dan sambal terasi.",
            filosofi: "Pecel Lele adalah hidangan 'kaki lima' yang merakyat, melambangkan keterjangkauan dan kepuasan sederhana.",
            bahan_utama: "Ikan Lele, Sambal Terasi, Nasi, Timun, Daun Kemangi.",
            cara_singkat: "Lele dimarinasi dan digoreng garing. Sambal terasi dibuat, disajikan dengan lalapan.",
            gambar_url: "pecel lele.jpg", // Ganti dengan gambar pecel lele
            ikon: "fas fa-fish"
        },
        {
            nama: "Karedok",
            region: "Jawa Barat",
            kategori: "Sayuran/Salad",
            deskripsi_singkat: "Salad sayuran mentah khas Sunda yang disiram bumbu kacang yang lebih kental dan gurih.",
            filosofi: "Karedok (mentah) melambangkan kesegaran alam dan gaya hidup Sunda yang dekat dengan bahan-bahan alami.",
            bahan_utama: "Mentimun, Kacang Panjang, Tauge, Terong Bulat, Bumbu Kacang.",
            cara_singkat: "Semua sayuran diiris, dicampur dengan bumbu kacang yang dihaluskan bersama kencur.",
            gambar_url: "karedok.jpg", // Ganti dengan gambar karedok
            ikon: "fas fa-leaf"
        },
        {
            nama: "Sate Maranggi",
            region: "Purwakarta",
            kategori: "Daging",
            deskripsi_singkat: "Sate daging sapi/kambing yang dimarinasi bumbu manis pedas yang kuat, sering disantap tanpa bumbu kacang.",
            filosofi: "Maranggi (Jawa Kuno) berarti 'memasak'. Sate ini dikenal karena bumbunya yang sudah meresap, melambangkan kedalaman rasa tanpa perlu tambahan.",
            bahan_utama: "Daging Sapi/Kambing, Kecap Manis, Cuka, Bawang Merah, Bawang Putih, Jahe.",
            cara_singkat: "Daging dimarinasi lama, dibakar, disajikan dengan irisan cabai dan tomat segar.",
            gambar_url: "sate maranggi.jpeg", // Ganti dengan gambar sate maranggi
            ikon: "fas fa-fire"
        },
        {
            nama: "Tengkleng Solo",
            region: "Jawa Tengah",
            kategori: "Daging/Sup",
            deskripsi_singkat: "Sup tulang kambing dengan sedikit daging, berkuah santan encer dengan bumbu yang kaya dan hangat.",
            filosofi: "Tengkleng adalah hidangan 'kelas dua' yang terbuat dari sisa-sisa tulang kambing (setelah diambil dagingnya), melambangkan kreativitas masyarakat dalam memanfaatkan sumber daya.",
            bahan_utama: "Tulang Kambing, Santan, Kunyit, Ketumbar, Jahe, Cabai Rawit Utuh.",
            cara_singkat: "Tulang kambing direbus, lalu dimasak dengan santan encer dan bumbu halus hingga empuk.",
            gambar_url: "tengkleng solo.jpg", // Ganti dengan gambar tengkleng
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Sayur Lodeh",
            region: "Jawa",
            kategori: "Sayuran/Kuah",
            deskripsi_singkat: "Sayuran campuran yang dimasak dalam kuah santan encer dengan bumbu ringan, merupakan comfort food Jawa.",
            filosofi: "Lodeh adalah hidangan sederhana yang melambangkan kebersamaan dan kecukupan, sering disajikan untuk menangkal bala (musibah).",
            bahan_utama: "Terong, Labu Siam, Kacang Panjang, Daun Melinjo, Santan, Bumbu Dasar Putih.",
            cara_singkat: "Semua sayuran dimasak bersama santan dan bumbu hingga matang.",
            gambar_url: "sayur lodeh.jpg", // Ganti dengan gambar lodeh
            ikon: "fas fa-leaf"
        },
        {
            nama: "Nasi Uduk",
            region: "Jakarta",
            kategori: "Nasi",
            deskripsi_singkat: "Nasi gurih yang dimasak dengan santan, daun salam, dan sereh, disajikan dengan lauk pauk sederhana.",
            filosofi: "Uduk (bercampur) melambangkan persatuan dan syukur. Sering disajikan pada acara-acara spesial atau perayaan.",
            bahan_utama: "Nasi, Santan, Daun Salam, Sereh, Bawang Goreng, Ayam Goreng, Sambal.",
            cara_singkat: "Nasi diaron dengan santan dan bumbu, lalu dikukus hingga matang.",
            gambar_url: "nasi uduk.jpg", // Ganti dengan gambar nasi uduk
            ikon: "fas fa-drumstick-bite"
        },
        {
            nama: "Pallu Basa",
            region: "Sulawesi Selatan",
            kategori: "Sup/Kuah",
            deskripsi_singkat: "Mirip Coto, namun kuahnya lebih kental dan diperkaya dengan parutan kelapa sangrai.",
            filosofi: "Pallu Basa adalah hidangan tradisi yang melambangkan kehangatan dan kekerabatan.",
            bahan_utama: "Daging Sapi/Jeroan, Kelapa Sangrai, Bumbu Dasar, Ketupat.",
            cara_singkat: "Daging direbus, kuah dibuat dari bumbu halus dan kelapa sangrai. Disajikan dengan telur kuning mentah.",
            gambar_url: "pallu basa.jpg", // Ganti dengan gambar pallu basa
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Plecing Kangkung",
            region: "Lombok",
            kategori: "Sayuran/Pedas",
            deskripsi_singkat: "Sayur kangkung rebus yang disajikan dengan sambal tomat pedas (Plecing) dan taburan kacang.",
            filosofi: "Mencerminkan kekayaan hasil pertanian Lombok dan rasa pedas yang khas Suku Sasak.",
            bahan_utama: "Kangkung, Tomat, Cabai Rawit, Bawang Putih, Terasi, Kacang Tanah Goreng.",
            cara_singkat: "Kangkung direbus, sambal dibuat dari bumbu mentah. Disiramkan pada kangkung.",
            gambar_url: "plecing.jpg", // Ganti dengan gambar plecing kangkung
            ikon: "fas fa-leaf"
        },
        {
            nama: "Binte Biluhuta",
            region: "Gorontalo",
            kategori: "Sup/Kuah",
            deskripsi_singkat: "Sup jagung khas Gorontalo yang dicampur ikan cakalang/udang, disajikan dengan perasan jeruk nipis.",
            filosofi: "Binte Biluhuta berarti 'jagung yang disiram'. Melambangkan makanan pokok masyarakat Gorontalo dan kekayaan hasil laut mereka.",
            bahan_utama: "Jagung Manis, Ikan Cakalang, Udang, Kelapa Parut, Bawang Merah, Jeruk Nipis.",
            cara_singkat: "Jagung, ikan, dan udang direbus bersama bumbu. Disajikan panas dengan perasan jeruk nipis.",
            gambar_url: "binte bihuta.jpg", // Ganti dengan gambar Binte Biluhuta
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Ketoprak",
            region: "Jakarta",
            kategori: "Nasi/Sayuran",
            deskripsi_singkat: "Hidangan pinggir jalan berisi ketupat, tauge, bihun, tahu, dan telur, disiram bumbu kacang dan kecap.",
            filosofi: "Sama seperti Gado-Gado, Ketoprak melambangkan keragaman bahan sederhana yang disatukan oleh bumbu kacang.",
            bahan_utama: "Ketupat/Lontong, Tauge, Bihun, Tahu, Telur Goreng, Bumbu Kacang, Kecap Manis.",
            cara_singkat: "Semua bahan ditata, lalu disiram bumbu kacang dan kecap.",
            gambar_url: "ketoprak.jpg", // Ganti dengan gambar ketoprak
            ikon: "fas fa-leaf"
        },
        {
            nama: "Serabi Solo",
            region: "Jawa Tengah",
            kategori: "Kue/Manis",
            deskripsi_singkat: "Kue berbahan dasar santan dan tepung beras, dimasak di atas wajan kecil, disajikan dengan topping.",
            filosofi: "Bentuk bulat dan proses memasak yang sederhana melambangkan kebersahajaan hidup Jawa.",
            bahan_utama: "Tepung Beras, Santan, Gula, Daun Pandan, Topping (Nangka, Cokelat).",
            cara_singkat: "Adonan dimasak di wajan kecil, diangkat setengah matang (bagian tengahnya basah), lalu diberi topping.",
            gambar_url: "serabi notosuman.jpg", // Ganti dengan gambar serabi
            ikon: "fas fa-cookie-bite"
        },
        {
            nama: "Naniura",
            region: "Sumatera Utara",
            kategori: "Ikan/Mentah",
            deskripsi_singkat: "Hidangan ikan khas Batak Toba yang dimasak tanpa api, hanya menggunakan cuka atau air asam (mirip Sashimi Indonesia).",
            filosofi: "Naniura adalah hidangan raja Batak, melambangkan keahlian memasak dan pengetahuan akan rempah-rempah yang dapat 'mematangkan' ikan.",
            bahan_utama: "Ikan Mas/Mujair Segar, Air Jeruk Nipis/Asam, Kunyit, Bawang Merah, Sereh.",
            cara_singkat: "Ikan diiris tipis, direndam dalam air asam/cuka selama berjam-jam hingga 'matang' (berubah warna).",
            gambar_url: "naniura.jpg", // Ganti dengan gambar naniura
            ikon: "fas fa-fish"
        },
        {
            nama: "Sop Buntut",
            region: "Nasional",
            kategori: "Sup/Daging",
            deskripsi_singkat: "Sup bening berisi potongan buntut sapi (ekor) yang direbus hingga empuk, disajikan dengan wortel dan kentang.",
            filosofi: "Hidangan kelas atas yang menunjukkan kekayaan bahan, melambangkan kemewahan dan kehangatan.",
            bahan_utama: "Buntut Sapi, Wortel, Kentang, Bawang Putih, Pala, Cengkeh, Bawang Goreng.",
            cara_singkat: "Buntut direbus lama hingga empuk. Kuah sup dibumbui dengan pala dan merica.",
            gambar_url: "sop buntut.jpg", // Ganti dengan gambar sop buntut
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Kolak Pisang",
            region: "Nasional",
            kategori: "Dessert/Manis",
            deskripsi_singkat: "Hidangan penutup manis berupa pisang yang dimasak dalam santan dan gula merah. Populer saat bulan Ramadhan.",
            filosofi: "Kolak adalah simbol kembalinya fitrah setelah berpuasa, rasa manis gula merah melambangkan kegembiraan dan berkah.",
            bahan_utama: "Pisang Kepok/Raja, Santan, Gula Merah, Daun Pandan, Garam.",
            cara_singkat: "Santan dan gula merah dimasak hingga larut, lalu masukkan pisang dan didihkan sebentar.",
            gambar_url: "kolak pisang.jpg", // Ganti dengan gambar kolak
            ikon: "fas fa-ice-cream"
        },
        {
            nama: "Pepes Ikan",
            region: "Jawa Barat",
            kategori: "Ikan/Kukus",
            deskripsi_singkat: "Ikan yang dibumbui rempah, dibungkus daun pisang, lalu dikukus atau dibakar. Aroma daun pisang menjadi ciri khas.",
            filosofi: "Pembungkusan daun pisang melambangkan kebijaksanaan dan penggunaan bahan alami yang melimpah.",
            bahan_utama: "Ikan Mas/Patin, Daun Pisang, Bumbu Kuning, Cabai Rawit.",
            cara_singkat: "Ikan dibumbui, dibungkus daun pisang, dikukus lalu dibakar.",
            gambar_url: "pepes ikan.jpg", // Ganti dengan gambar pepes
            ikon: "fas fa-fish"
        },
        {
            nama: "Es Dawet Ayu",
            region: "Jawa Tengah",
            kategori: "Minuman",
            deskripsi_singkat: "Minuman segar dari cendol, santan, dan gula merah, biasanya ditambahkan nangka.",
            filosofi: "Melambangkan kesegaran dan hidangan penyejuk di tengah iklim tropis.",
            bahan_utama: "Cendol (Tepung Beras), Santan, Gula Merah Cair, Es Batu, Nangka.",
            cara_singkat: "Cendol, santan, dan gula merah dicampur, disajikan dingin dengan es batu.",
            gambar_url: "es dawet ayu.jpg", // Ganti dengan gambar es dawet
            ikon: "fas fa-glass-water"
        },
        {
            nama: "Sambal Terasi",
            region: "Nasional",
            kategori: "Sambal",
            deskripsi_singkat: "Sambal dasar yang terbuat dari cabai, bawang, tomat, dan terasi (fermentasi udang) yang digoreng atau dibakar.",
            filosofi: "Terasi adalah bumbu persatuan, menunjukkan pengolahan bahan laut menjadi bumbu pokok masakan Nusantara.",
            bahan_utama: "Cabai Rawit, Bawang Merah, Tomat, Terasi, Garam, Gula.",
            cara_singkat: "Semua bahan digoreng sebentar lalu diulek hingga halus.",
            gambar_url: "sambal terasi.jpg", // Ganti dengan gambar sambal
            ikon: "fas fa-pepper-hot"
        },
        // --- 16 KULINER TAMBAHAN UNTUK GENAP 50 ---
        {
            nama: "Martabak Manis",
            region: "Bangka Belitung",
            kategori: "Kue/Manis",
            deskripsi_singkat: "Kue tebal berbentuk bundar dengan tekstur berongga, diisi mentega, gula, kacang, cokelat, dan keju.",
            filosofi: "Martabak manis melambangkan kebersamaan, sering dibeli untuk dinikmati bersama keluarga.",
            bahan_utama: "Tepung Terigu, Ragi, Telur, Mentega, Gula, Toping.",
            cara_singkat: "Adonan dimasak di wajan datar, diangkat, dioles mentega dan diberi toping.",
            gambar_url: "martabak.jpg", // Ganti dengan gambar martabak
            ikon: "fas fa-cake-candles"
        },
        {
            nama: "Bandeng Presto",
            region: "Jawa Tengah",
            kategori: "Ikan/Gorengan",
            deskripsi_singkat: "Ikan bandeng yang dimasak menggunakan panci presto sehingga duri-durinya menjadi lunak dan dapat dimakan.",
            filosofi: "Inovasi kuliner Jawa yang melambangkan cara mengatasi kesulitan (duri) dengan teknologi (presto).",
            bahan_utama: "Ikan Bandeng, Bumbu Kuning, Daun Salam, Kunyit.",
            cara_singkat: "Ikan dibumbui, dimasak dalam panci presto selama 1-2 jam.",
            gambar_url: "bandeng presto.jpg", // Ganti dengan gambar bandeng
            ikon: "fas fa-fish"
        },
        {
            nama: "Tongseng Kambing",
            region: "Jawa Tengah",
            kategori: "Daging/Sup",
            deskripsi_singkat: "Gulai kambing dengan kuah yang lebih encer dan rasa yang lebih manis karena tambahan kecap.",
            filosofi: "Tongseng melambangkan perpaduan antara rasa gurih rempah (Gulai) dan manis (Kecap), menciptakan harmoni rasa Jawa.",
            bahan_utama: "Daging Kambing, Kol, Tomat, Santan, Kecap Manis, Bawang Merah, Cabai.",
            cara_singkat: "Bumbu dihaluskan, ditumis, dimasukkan daging, santan, dan kecap, dimasak hingga matang.",
            gambar_url: "tongseeng kambing.jpg", // Ganti dengan gambar tongseng
            ikon: "fas fa-drumstick-bite"
        },
        {
            nama: "Laksa Bogor",
            region: "Jawa Barat",
            kategori: "Mie/Kuah",
            deskripsi_singkat: "Mie kuah santan kental dengan oncom, tauge, kemangi, dan telur.",
            filosofi: "Laksa adalah hasil akulturasi Peranakan Tionghoa-Melayu, kaya rempah dan melambangkan kekayaan budaya Bogor.",
            bahan_utama: "Mie, Santan, Oncom, Tauge, Kemangi, Telur Rebus, Bumbu Kuning.",
            cara_singkat: "Mie dan tauge disiram kuah santan yang dimasak dengan bumbu halus dan oncom.",
            gambar_url: "laksa bogor.jpg", // Ganti dengan gambar laksa
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Tempoyak",
            region: "Sumatera",
            kategori: "Sambal/Fermentasi",
            deskripsi_singkat: "Olahan sambal yang terbuat dari fermentasi daging buah durian.",
            filosofi: "Tempoyak melambangkan kreativitas masyarakat dalam mengolah bahan musiman menjadi makanan tahan lama.",
            bahan_utama: "Durian Fermentasi, Cabai Rawit, Bawang Merah, Garam.",
            cara_singkat: "Durian difermentasi, lalu dicampur dan diulek dengan cabai dan bawang.",
            gambar_url: "tempoyak durain.jpeg", // Ganti dengan gambar tempoyak
            ikon: "fas fa-pepper-hot"
        },
        {
            nama: "Kue Klepon",
            region: "Jawa",
            kategori: "Kue/Manis",
            deskripsi_singkat: "Bola-bola ketan berwarna hijau yang diisi gula merah cair, digulingkan di atas kelapa parut.",
            filosofi: "Klepon yang pecah di mulut saat digigit melambangkan kejutan dan kegembiraan sederhana.",
            bahan_utama: "Tepung Ketan, Gula Merah, Kelapa Parut, Daun Pandan/Pewarna Hijau.",
            cara_singkat: "Adonan ketan diisi gula merah, direbus, lalu digulingkan di kelapa parut kukus.",
            gambar_url: "klepon.jpg", // Ganti dengan gambar klepon
            ikon: "fas fa-cookie-bite"
        },
        {
            nama: "Ayam Taliwang",
            region: "Lombok",
            kategori: "Ayam",
            deskripsi_singkat: "Ayam muda bakar/goreng dengan bumbu khas Lombok yang sangat pedas, terbuat dari cabai dan terasi.",
            filosofi: "Mencerminkan keberanian dan semangat suku Sasak yang berani menggunakan bumbu pedas yang intens.",
            bahan_utama: "Ayam Muda, Cabai Merah, Bawang Putih, Terasi, Jeruk Limau.",
            cara_singkat: "Ayam dibakar/digoreng, disajikan dengan siraman bumbu yang digiling kasar dan pedas.",
            gambar_url: "taliwang.jpg", // Ganti dengan gambar ayam taliwang
            ikon: "fas fa-drumstick-bite"
        },
        {
            nama: "Dabu-Dabu",
            region: "Sulawesi Utara",
            kategori: "Sambal",
            deskripsi_singkat: "Sambal segar Manado yang terbuat dari irisan cabai, tomat, dan bawang mentah, disiram minyak panas.",
            filosofi: "Dabu-Dabu (menaburkan) melambangkan hidangan segar yang disajikan mendadak untuk menemani ikan bakar.",
            bahan_utama: "Tomat Merah, Cabai Rawit, Bawang Merah, Jeruk Nipis, Minyak Kelapa Panas.",
            cara_singkat: "Semua bahan diiris, dicampur, lalu disiram minyak kelapa panas.",
            gambar_url: "dabu dabu.jpg", // Ganti dengan gambar sambal dabu
            ikon: "fas fa-pepper-hot"
        },
        {
            nama: "Kue Cubit",
            region: "Jakarta",
            kategori: "Kue/Camilan",
            deskripsi_singkat: "Kue kecil manis yang dimasak di cetakan besi, diangkat saat masih setengah matang (cubit) dan diberi topping.",
            filosofi: "Melambangkan hidangan nostalgia yang disukai anak-anak, sering disajikan dalam suasana santai.",
            bahan_utama: "Tepung Terigu, Gula, Telur, Susu, Soda Kue, Topping Meses.",
            cara_singkat: "Adonan dituang ke cetakan, dimasak sebentar, diangkat menggunakan penjepit saat bagian atasnya masih basah.",
            gambar_url: "kue cubit.jpg", // Ganti dengan gambar kue cubit
            ikon: "fas fa-cookie-bite"
        },
        {
            nama: "Soto Betawi",
            region: "Jakarta",
            kategori: "Sup/Kuah",
            deskripsi_singkat: "Soto daging/jeroan sapi yang menggunakan kuah santan atau susu yang gurih.",
            filosofi: "Penggunaan santan dan susu adalah hasil akulturasi yang melambangkan kemewahan dan pengaruh budaya Eropa (susu) dan Timur Tengah (santan/rempah).",
            bahan_utama: "Daging Sapi/Jeroan, Santan/Susu, Kentang, Tomat, Bumbu Dasar Soto.",
            cara_singkat: "Daging direbus, kuah santan/susu dimasak dengan bumbu halus. Disajikan dengan emping dan tomat.",
            gambar_url: "soto betawi.jpg", // Ganti dengan gambar soto betawi
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Otak-Otak",
            region: "Sumatera/Kepulauan Riau",
            kategori: "Ikan/Camilan",
            deskripsi_singkat: "Adonan ikan tenggiri yang dibungkus daun pisang, dikukus atau dibakar, disajikan dengan saus kacang.",
            filosofi: "Mencerminkan kekayaan hasil laut dan cara pengolahan ikan yang sederhana dan efektif.",
            bahan_utama: "Ikan Tenggiri, Tepung Sagu, Santan, Daun Pisang, Saus Kacang.",
            cara_singkat: "Adonan dibungkus daun pisang, dibakar/dikukus, disajikan dengan saus kacang.",
            gambar_url: "otak otak.jpg", // Ganti dengan gambar otak-otak
            ikon: "fas fa-fish"
        },
        {
            nama: "Rujak Cingur",
            region: "Jawa Timur",
            kategori: "Sayuran/Daging",
            deskripsi_singkat: "Rujak campuran sayuran, buah, lontong, tahu, tempe, dan cingur (hidung/moncong sapi) yang disiram bumbu kacang petis.",
            filosofi: "Cingur (moncong) melambangkan penghormatan terhadap hewan ternak, dan petis melambangkan kekayaan hasil laut.",
            bahan_utama: "Cingur Sapi, Kangkung, Bengkoang, Lontong, Tahu, Bumbu Kacang, Petis Udang.",
            cara_singkat: "Semua bahan dicampur, diulek dengan bumbu kacang petis, disajikan segera.",
            gambar_url: "rujak cingur.jpg", // Ganti dengan gambar rujak cingur
            ikon: "fas fa-utensils"
        },
        {
            nama: "Nasi Timbel",
            region: "Jawa Barat",
            kategori: "Nasi",
            deskripsi_singkat: "Nasi yang dibungkus daun pisang, disajikan dengan lauk pauk (ayam goreng/ikan asin), tahu, tempe, dan sambal.",
            filosofi: "Bungkusan daun pisang melambangkan kedekatan masyarakat Sunda dengan alam.",
            bahan_utama: "Nasi Panas, Daun Pisang, Ayam Goreng/Ikan Asin, Sambal, Lalapan.",
            cara_singkat: "Nasi dikukus dalam daun pisang. Disajikan dengan lauk pauk sederhana.",
            gambar_url: "nasi timbel.jpg", // Ganti dengan gambar nasi timbel
            ikon: "fas fa-drumstick-bite"
        },
        {
            nama: "Bolu Meranti",
            region: "Sumatera Utara",
            kategori: "Kue/Manis",
            deskripsi_singkat: "Kue bolu gulung khas Medan dengan tekstur lembut dan isian krim atau selai yang melimpah.",
            filosofi: "Meranti melambangkan keistimewaan dan kerajinan tangan dalam membuat kue yang lembut dan cantik.",
            bahan_utama: "Tepung, Telur, Gula, Mentega, Isian Krim atau Keju.",
            cara_singkat: "Adonan bolu dipanggang, digulung saat masih panas, dan diisi krim.",
            gambar_url: "bolu maranti.jpg", // Ganti dengan gambar bolu
            ikon: "fas fa-cake-candles"
        },
        {
            nama: "Lumpia Basah",
            region: "Jawa Barat",
            kategori: "Camilan/Kukus",
            deskripsi_singkat: "Mirip Lumpia, tetapi kulitnya basah, tidak digoreng, dan disajikan dengan isian rebung, tauge, dan saus kental.",
            filosofi: "Melambangkan hidangan yang lebih sehat, disajikan 'basah' untuk mempertahankan kesegaran bahan.",
            bahan_utama: "Kulit Lumpia Basah, Rebung, Tauge, Udang/Ayam, Saus Gula Merah Kental.",
            cara_singkat: "Isian ditumis, dibungkus kulit basah, lalu disiram saus kental.",
            gambar_url: "lumpia basah.jpg", // Ganti dengan gambar lumpia basah
            ikon: "fas fa-leaf"
        },
        {
            nama: "Brenebon",
            region: "Sulawesi Utara",
            kategori: "Sup/Kacang",
            deskripsi_singkat: "Sup kacang merah (brenebon) yang dimasak dengan kaldu babi/sapi, cengkeh, dan pala.",
            filosofi: "Brenebon adalah hasil pengaruh kuliner Belanda (erwtensoep), menunjukkan sejarah akulturasi di Minahasa.",
            bahan_utama: "Kacang Merah, Daging Babi/Sapi, Wortel, Cengkeh, Pala.",
            cara_singkat: "Kacang merah direbus, lalu dimasak dengan daging dan bumbu sup yang hangat.",
            gambar_url: "brenebon.jpg", // Ganti dengan gambar brenebon
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Sate Klathak",
            region: "Yogyakarta",
            kategori: "Daging",
            deskripsi_singkat: "Sate kambing muda yang hanya dibumbui garam dan merica, ditusuk dengan jeruji sepeda dan dibakar.",
            filosofi: "Kesederhanaan bumbu melambangkan kejujuran rasa daging kambing muda. Tusuk jeruji melambangkan inovasi rakyat jelata.",
            bahan_utama: "Daging Kambing Muda, Garam, Merica, Jeruji Sepeda.",
            cara_singkat: "Daging dibumbui, ditusuk jeruji, dibakar, disajikan dengan kuah gulai atau kecap.",
            gambar_url: "sate klathak.jpg", // Ganti dengan gambar sate klathak
            ikon: "fas fa-fire"
        },
        {
            nama: "Es Teler",
            region: "Nasional",
            kategori: "Minuman",
            deskripsi_singkat: "Minuman dingin campuran alpukat, kelapa muda, nangka, dan disiram santan manis.",
            filosofi: "Es Teler (membuat mabuk) melambangkan rasa nikmat yang membuat ketagihan, mencerminkan kekayaan buah tropis.",
            bahan_utama: "Alpukat, Kelapa Muda, Nangka, Santan, Susu Kental Manis, Es Serut.",
            cara_singkat: "Semua buah dicampur di mangkuk, diberi santan, susu, dan es serut.",
            gambar_url: "es teler.jpg", // Ganti dengan gambar es teler
            ikon: "fas fa-glass-water"
        },
        {
            nama: "Pindang Patin",
            region: "Sumatera Selatan",
            kategori: "Ikan/Kuah",
            deskripsi_singkat: "Sup ikan patin berkuah bening, asam, pedas, dan gurih dengan rasa khas buah nanas.",
            filosofi: "Pindang melambangkan kekayaan sungai dan penggunaan buah-buahan lokal (nanas) untuk memberikan rasa segar.",
            bahan_utama: "Ikan Patin, Nanas, Asam Jawa, Cabai Rawit, Kunyit.",
            cara_singkat: "Ikan direbus dengan bumbu dan nanas hingga kuah menjadi asam pedas.",
            gambar_url: "pindang patin.jpg", // Ganti dengan gambar pindang patin
            ikon: "fas fa-fish"
        },
        {
            nama: "Nasi Campur Bali",
            region: "Bali",
            kategori: "Nasi",
            deskripsi_singkat: "Nasi yang disajikan dengan berbagai lauk khas Bali seperti Ayam Suwir Betutu, Sate Lilit, dan Sambal Matah.",
            filosofi: "Nasi Campur melambangkan perayaan keberagaman rasa Bali dalam satu piring.",
            bahan_utama: "Nasi, Ayam Betutu/Suwir, Sate Lilit, Lawar, Sambal Matah.",
            cara_singkat: "Nasi ditata, lalu lauk pauk diletakkan di sekelilingnya.",
            gambar_url: "nasi campur.jpg", // Ganti dengan gambar nasi campur bali
            ikon: "fas fa-utensils"
        },
        {
            nama: "Wingko Babat",
            region: "Jawa Tengah",
            kategori: "Kue/Manis",
            deskripsi_singkat: "Kue tradisional yang terbuat dari kelapa muda, gula, dan tepung ketan, dipanggang dengan aroma kelapa yang kuat.",
            filosofi: "Wingko Babat melambangkan ketahanan dan kesederhanaan, sering dijadikan oleh-oleh.",
            bahan_utama: "Kelapa Muda Parut, Tepung Ketan, Gula, Santan.",
            cara_singkat: "Adonan dicampur, dicetak bulat, lalu dipanggang hingga berwarna cokelat keemasan.",
            gambar_url: "wingko babat.jpg", // Ganti dengan gambar wingko
            ikon: "fas fa-cookie-bite"
        },
        {
            nama: "Empal Gentong",
            region: "Jawa Barat",
            kategori: "Sup/Kuah",
            deskripsi_singkat: "Sup daging dan jeroan sapi khas Cirebon yang dimasak dalam gentong (periuk tanah liat) dengan kuah santan kuning.",
            filosofi: "Memasak dalam gentong melambangkan tradisi memasak kuno yang mempertahankan rasa alami bumbu.",
            bahan_utama: "Daging Sapi/Jeroan, Santan, Kunyit, Sereh, Daun Salam, Kucai.",
            cara_singkat: "Daging direbus, lalu dimasak dalam santan dan bumbu kuning. Disajikan dengan kucai.",
            gambar_url: "empal genthong.jpg", // Ganti dengan gambar empal gentong
            ikon: "fas fa-bowl-food"
        },
        {
            nama: "Botok",
            region: "Jawa",
            kategori: "Sayuran/Kukus",
            deskripsi_singkat: "Campuran kelapa parut, lamtoro, tahu, tempe, dan ikan/udang yang dibungkus daun pisang, lalu dikukus.",
            filosofi: "Botok adalah hidangan yang menunjukkan cara masyarakat Jawa memanfaatkan kelapa parut sebagai bahan utama gurih.",
            bahan_utama: "Kelapa Parut, Lamtoro, Udang/Ikan, Bumbu Dasar, Daun Pisang.",
            cara_singkat: "Semua bahan dicampur, dibungkus daun pisang, lalu dikukus hingga matang.",
            gambar_url: "botok.jpg", // Ganti dengan gambar botok
            ikon: "fas fa-leaf"
        },
        {
            nama: "Mie Celor",
            region: "Sumatera Selatan",
            kategori: "Mie/Kuah",
            deskripsi_singkat: "Mie kuning yang disajikan dengan kuah santan kental yang gurih, udang, dan telur rebus.",
            filosofi: "Celor (dicelup) melambangkan cara penyajian yang cepat dan nikmat, merupakan hidangan sarapan khas Palembang.",
            bahan_utama: "Mie Kuning, Santan Kental, Udang, Telur Rebus, Tauge, Bawang Goreng.",
            cara_singkat: "Mie dicelup air panas, disiram kuah santan kental berbumbu udang.",
            gambar_url: "mie celor.jpg", // Ganti dengan gambar mie celor
            ikon: "fas fa-bowl-food"
        }
        
        // Catatan: Total 40 data di sini. Tambahkan 10 data lagi jika Anda benar-benar membutuhkan 50
    ];

    // Sisanya adalah kode fungsi-fungsi yang sama seperti yang sudah saya berikan sebelumnya.
    // Anda TIDAK perlu menyalin kode di bawah ini jika Anda sudah memilikinya di script.js
    
    let filteredData = kulinerData;
    const resepList = document.getElementById('resep-list');
    const foodCount = document.getElementById('food-count');
    const searchInput = document.getElementById('searchInput');
    const modal = document.getElementById('detail-modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');
    const filterContainer = document.getElementById('filter-container');

    // --- 2. FUNGSI UTAMA RENDERING ---

    function createFoodCard(item) {
        const foodNameEncoded = item.nama.replace(/'/g, "\\'"); 
        
        return `
            <div class="food-card" data-nama="${item.nama.toLowerCase().replace(/'/g, '')}" data-region="${item.region}">
                <img src="${item.gambar_url}" alt="${item.nama}" class="card-image" loading="lazy">
                <div class="card-content">
                    <div>
                        <h3><i class="${item.ikon} ikon"></i> ${item.nama}</h3>
                        <span class="kategori">${item.kategori} | ${item.region}</span>
                    </div>
                    <p>${item.deskripsi_singkat}</p>
                    
                    <button class="detail-button" onclick="showFoodDetail('${foodNameEncoded}')">
                        <i class="fas fa-book-open"></i> Resep & Filosofi
                    </button>
                    
                </div>
            </div>
        `;
    }

    function renderFoodList(data) {
        resepList.innerHTML = '';
        if (data.length === 0) {
            resepList.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 50px;">Tidak ada kuliner yang ditemukan sesuai kriteria pencarian.</p>';
        } else {
            data.forEach(item => {
                resepList.innerHTML += createFoodCard(item);
            });
        }
        foodCount.textContent = data.length;
    }

    // --- 3. FUNGSI FILTER DAN PENCARIAN ---

    function performSearchAndFilter(searchTerm, activeRegion) {
        let results = kulinerData;

        // 1. Filter Region
        if (activeRegion && activeRegion !== 'Semua Daerah') {
            results = results.filter(item => item.region === activeRegion);
        }

        // 2. Filter Search Term
        if (searchTerm) {
            const lowerCaseSearch = searchTerm.toLowerCase();
            results = results.filter(item => 
                item.nama.toLowerCase().includes(lowerCaseSearch) ||
                item.deskripsi_singkat.toLowerCase().includes(lowerCaseSearch) ||
                item.kategori.toLowerCase().includes(lowerCaseSearch) ||
                item.region.toLowerCase().includes(lowerCaseSearch)
            );
        }
        
        filteredData = results;
        renderFoodList(filteredData);
    }
    
    // Inisialisasi Filter Button
    function initFilterButtons() {
        const regions = ['Semua Daerah', ...new Set(kulinerData.map(item => item.region))].sort();
        
        regions.forEach(region => {
            const button = document.createElement('button');
            button.className = 'filter-button';
            button.textContent = region;
            button.dataset.region = region;
            
            if (region === 'Semua Daerah') {
                button.classList.add('active');
            }

            button.addEventListener('click', function() {
                document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const searchTerm = searchInput.value;
                const activeRegion = (region === 'Semua Daerah') ? null : region;
                
                performSearchAndFilter(searchTerm, activeRegion);
            });
            filterContainer.appendChild(button);
        });
    }

    // Event Listener untuk Pencarian
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value;
        const activeRegion = document.querySelector('.filter-button.active')?.dataset.region;
        performSearchAndFilter(searchTerm, activeRegion);
    });


    // --- 4. FUNGSI MODAL (DETAIL) ---

    window.showFoodDetail = function(foodName) {
        const item = kulinerData.find(d => d.nama === foodName);

        if (!item) return;

        modalBody.innerHTML = `
            <img src="${item.gambar_url}" alt="${item.nama}" class="modal-image">
            <h2>${item.nama}</h2>
            <p><strong><i class="fas fa-map-marker-alt"></i> Asal:</strong> ${item.region}</p>
            <p><strong><i class="fas fa-tag"></i> Kategori:</strong> ${item.kategori}</p>
            
            <hr>
            
            <h3><i class="fas fa-feather-alt"></i> Filosofi</h3>
            <p>${item.filosofi}</p>
            
            <h3><i class="fas fa-mortar-pestle"></i> Bahan Utama</h3>
            <p>${item.bahan_utama}</p>
            
            <h3><i class="fas fa-fire-burner"></i> Cara Singkat Pembuatan</h3>
            <p>${item.cara_singkat}</p>
        `;
        
        modal.style.display = 'block';
    }

    // Event untuk menutup modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });


    // --- 5. INITIAL LOAD ---
    document.getElementById('loading-message').style.display = 'none';
    initFilterButtons();
    renderFoodList(kulinerData);

});