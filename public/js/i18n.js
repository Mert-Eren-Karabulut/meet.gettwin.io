'use strict';

/**
 * Lightweight i18n engine for MiroTalk P2P.
 * Replaces Google Translate with a proper JSON-based translation system.
 * Supports 'en' (default, no-op) and 'tr' (Turkish).
 *
 * Usage in JS:  t('My audio is on')
 * Usage in HTML: <p data-i18n="Language">Language</p>
 *               <input data-i18n-placeholder="Filter participants" placeholder="Filter participants">
 * Language switch: setLanguage('tr')
 */
(function () {
    // ─────────────────────────────────────────────────────────────────────────
    // Turkish translations
    // Key = English source string, Value = Turkish translation
    // ─────────────────────────────────────────────────────────────────────────
    var _tr = {
        // === Main toolbar tooltips ===
        'Stop the audio': 'Sesi durdur',
        'Start the audio': 'Sesi başlat',
        'My audio is disabled': 'Sesim devre dışı',
        'My audio is on': 'Sesim açık',
        'My audio is off': 'Sesim kapalı',
        'Stop the video': 'Videoyu durdur',
        'Start the video': 'Videoyu başlat',
        'My video is disabled': 'Videom devre dışı',
        'My video is on': 'Videom açık',
        'My video is off': 'Videom kapalı',
        'My hand is raised': 'Elim kalkık',
        'Raise your hand': 'Elini kaldır',
        'Lower your hand': 'Elini indir',
        'Open the chat': 'Sohbeti aç',
        'Close the chat': 'Sohbeti kapat',
        'Show participants': 'Katılımcıları göster',
        'Open the settings': 'Ayarları aç',
        'Close the settings': 'Ayarları kapat',
        'Leave this room': 'Odadan ayrıl',
        'Leave meeting': 'Toplantıyı terk et',
        'Start screen sharing': 'Ekran paylaşımını başlat',
        'Stop screen sharing': 'Ekran paylaşımını durdur',
        'Toggle screen sharing': 'Ekran paylaşımını aç/kapat',
        'Toggle video mirror': 'Video aynasını aç/kapat',
        'Toggle username emoji': 'Kullanıcı adı emojisini aç/kapat',

        // === Chat panel ===
        'Close': 'Kapat',
        'Toggle chat pin': 'Sohbet sabitlemesini aç/kapat',
        'Ghost theme': 'Saydam tema',
        'Maximize': 'Büyüt',
        'Minimize': 'Küçült',
        'Emoji': 'Emoji',
        'Markdown': 'Markdown',
        'Share file': 'Dosya paylaş',
        'Participants': 'Katılımcılar',
        'Clean': 'Temizle',
        'Paste': 'Yapıştır',
        'Send': 'Gönder',
        'Delete': 'Sil',
        'Copy': 'Kopyala',
        'Speech': 'Sesli oku',
        'Message copied!': 'Mesaj kopyalandı!',
        'Room chat': 'Oda sohbeti',
        'Message everyone': 'Herkese mesaj',
        'All messages': 'Tüm mesajlar',
        'Save All messages': 'Tüm mesajları kaydet',
        'Clean All messages': 'Tüm mesajları temizle',
        'Save messages': 'Mesajları kaydet',
        'Clean messages': 'Mesajları temizle',
        'People here': 'Buradaki kişiler',
        'There are no participants here yet.': 'Henüz burada katılımcı yok.',
        'Participants will appear here when other people join the room.': 'Diğer kişiler odaya katıldığında burada görünecekler.',
        'Public messages and direct replies appear here.': 'Genel mesajlar ve doğrudan yanıtlar burada görünür.',
        'Public messages appear here.': 'Genel mesajlar burada görünür.',
        'Start Conversation': 'Sohbet Başlat',
        'Current view': 'Mevcut görünüm',
        'Private chat': 'Özel sohbet',
        'AI assistant': 'Yapay zeka asistanı',
        'Direct messages with': 'Doğrudan mesajlar:',
        'Ask': 'Sor',
        'Message': 'Mesaj',
        'There are no messages here yet. Start a conversation by sending a message.': 'Henüz mesaj yok. Mesaj göndererek sohbet başlatın.',
        'Send to all': 'Herkese gönder',

        // === Video tile dropdown ===
        'Mirror': 'Yansıt',
        'Full Screen': 'Tam Ekran',
        'Zoom In': 'Yakınlaştır',
        'Zoom Out': 'Uzaklaştır',
        'Kick Out': 'Çıkar',
        'Private Message': 'Özel Mesaj',
        'Geo Location': 'Konum',
        'Send File': 'Dosya Gönder',
        'Send Video/Audio': 'Video/Ses Gönder',

        // === Room actions dropdown ===
        'Start captions': 'Altyazı başlat',
        'Stop captions': 'Altyazı durdur',
        'Mute everyone': 'Herkesi sustur',
        'Hide everyone': 'Herkesi gizle',
        'Eject everyone': 'Herkesi çıkar',

        // === Placeholders ===
        'Write a message...': 'Mesaj yaz...',
        'Change name...': 'İsim değiştir...',
        'Filter participants': 'Katılımcıları filtrele',

        // === Settings panel labels ===
        'Language': 'Dil',
        'Audio': 'Ses',
        'Video': 'Video',
        'Network': 'Ağ',
        'Recording': 'Kayıt',
        'Profile': 'Profil',
        'Media': 'Medya',
        'Shortcuts': 'Kısayollar',
        'Room': 'Oda',
        'Microphone': 'Mikrofon',
        'Speaker': 'Hoparlör',
        'Camera FPS': 'Kamera FPS',
        'Screen FPS': 'Ekran FPS',
        'Video Quality': 'Video Kalitesi',
        'Video fit': 'Video uyumu',
        'Video Source': 'Video Kaynağı',
        'Noise Suppression': 'Gürültü Bastırma',
        'Sent': 'Gönderilen',
        'Received': 'Alınan',
        'Packet Lost': 'Paket Kaybı',
        'Jitter': 'Titreşim',
        'RTT': 'RTT',
        'Push to talk': 'Konuşmak için bas',
        'Test speaker': 'Hoparlörü test et',
        'Test Speaker': 'Hoparlörü Test Et',
        'Open Audio Settings': 'Ses Ayarlarını Aç',
        'Open Video Settings': 'Video Ayarlarını Aç',
        'Microphones': 'Mikrofonlar',
        'Speakers': 'Hoparlörler',
        'Cameras': 'Kameralar',
        'No microphones found': 'Mikrofon bulunamadı',
        'No speakers found': 'Hoparlör bulunamadı',
        'No cameras found': 'Kamera bulunamadı',
        'Speaker selection not supported': 'Hoparlör seçimi desteklenmiyor',

        // === Invite dialog ===
        'Invite to meeting': 'Toplantıya Davet Et',
        'Share this link to invite someone to join:': 'Birini katılmaya davet etmek için bu bağlantıyı paylaşın:',
        'Copy link': 'Bağlantıyı kopyala',
        'Invite link copied!': 'Davet bağlantısı kopyalandı!',

        // === Join dialog ===
        'Enter your email or name': 'E-posta veya adınızı girin',
        'Please enter your email or name': 'Lütfen e-posta veya adınızı girin',
        'Join meeting': 'Toplantıya katıl',
        'Email must be max 254 char': 'E-posta en fazla 254 karakter olabilir',
        'Name must be max 32 char': 'İsim en fazla 32 karakter olabilir',
        'Invalid name!': 'Geçersiz isim!',
        'Username is already in use!': 'Bu kullanıcı adı zaten kullanımda!',
        'Invite': 'Davet Et',
        'Name': 'Ad',
        'Host': 'Sunucu',
        'Stun': 'Stun',
        'Turn': 'Turn',
        'WebRTC': 'WebRTC',
        'Theme': 'Tema',
        'Custom theme': 'Özel tema',
        'Keep custom': 'Özel temayı koru',
        'Buttons bar': 'Düğmeler çubuğu',
        'Pin video position': 'Video konumunu sabitle',
        'Horizontal': 'Yatay',
        'Vertical': 'Dikey',
        'Top': 'Üst',
        'Save': 'Kaydet',

        // === Settings tooltips ===
        'Change name': 'İsim değiştir',
        'Room name (click to copy/share)': 'Oda adı (kopyalamak/paylaşmak için tıkla)',
        'Session time': 'Oturum süresi',
        'Toggle room notify sounds': 'Oda bildirim seslerini aç/kapat',
        "Show 'Share Room' popup on join.": "Katılımda 'Odayı Paylaş' penceresini göster.",
        'Keep buttons always visible': 'Düğmeleri her zaman görünür tut',
        'Open chat pinned by default': 'Sohbeti varsayılan olarak sabitlenmiş aç',
        'Prevent the device from sleeping (if supported)': 'Cihazın uyku moduna geçmesini engelle (destekleniyorsa)',
        'Toggle recording': 'Kaydı aç/kapat',
        'Toggle session timer': 'Oturum zamanlayıcısını aç/kapat',
        'IP address associated with the ICE candidate': 'ICE adayıyla ilişkili IP adresi',
        'If Active, the audio will be processed to reduce background noise, making the voice clearer': 'Etkin olduğunda, ses arka plan gürültüsünü azaltmak için işlenir ve daha net duyulur.',
        'If Active, When SpaceBar keydown the microphone will be activated, on keyup will be deactivated, like a walkie-talkie': 'Etkin olduğunda, Boşluk tuşuna basıldığında mikrofon açılır, bırakıldığında kapanır (telsiz gibi).',
        'This type of ICE candidate represents a candidate that corresponds to an interface on the local device. Host candidates are typically generated based on the local IP addresses of the device and can be used for direct peer-to-peer communication within the same network': 'Bu ICE adayı türü, yerel cihazın ağ arayüzüne karşılık gelir. Aynı ağdaki cihazlar arasında doğrudan bağlantı için kullanılır.',
        'Server reflexive candidates are obtained by the ICE agent when it sends a request to a STUN (Session Traversal Utilities for NAT) server. These candidates reflect the public IP address and port of the client as observed by the STUN server. They are useful for traversing NATs (Network Address Translators) and establishing connectivity between peers across different networks': 'STUN sunucusundan alınan ICE adayları, cihazın genel IP adresini yansıtır. Farklı ağlar arasında bağlantı kurmak için kullanılır.',
        'Relay candidates are obtained when communication between peers cannot be established directly due to symmetric NATs or firewall restrictions. In such cases, communication is relayed through a TURN (Traversal Using Relays around NAT) server. TURN servers act as intermediaries, relaying data between peers, allowing them to communicate even when direct connections are not possible. This is typically the fallback mechanism for establishing connectivity when direct peer-to-peer communication fails': 'Doğrudan bağlantı kurulamadığında TURN sunucusu üzerinden iletişim sağlanır. Simetrik NAT veya güvenlik duvarı kısıtlamaları durumunda devreye girer.',

        // === Video tiles ===
        'Take a snapshot': 'Anlık görüntü al',
        'Full screen mode': 'Tam ekran modu',
        'Toggle Focus mode': 'Odak modunu aç/kapat',
        'Toggle picture in picture': 'Pencere içinde pencere',
        'Toggle Pin video': 'Videoyu sabitle/kaldır',
        'Toggle Pin screen': 'Ekranı sabitle/kaldır',
        'Toggle video privacy': 'Video gizliliğini aç/kapat',
        'Zoom in video': 'Videoya yaklaş',
        'Zoom out video': 'Videodan uzaklaş',
        'Zoom in screen': 'Ekrana yaklaş',
        'Zoom out screen': 'Ekrandan uzaklaş',

        // === Participant status ===
        'Participant name': 'Katılımcı adı',
        'Participant hand is raised': 'Katılımcı elini kaldırdı',
        'Participant video is on': 'Katılımcı videosu açık',
        'Participant video is off': 'Katılımcı videosu kapalı',
        'Participant audio is on': 'Katılımcı sesi açık',
        'Participant audio is off': 'Katılımcı sesi kapalı',
        'Participant screen': 'Katılımcı ekranı',
        'Participant screen share is on': 'Katılımcı ekran paylaşımı açık',
        'Participant screen share is off': 'Katılımcı ekran paylaşımı kapalı',
        '🔊 Volume': '🔊 Ses seviyesi',
        'Open private conversation': 'Özel sohbet aç',
        'Send file': 'Dosya gönder',
        'Send Video or Audio': 'Video veya Ses Gönder',

        // === Captions ===
        'Toggle caption pin': 'Altyazı sabitlemesini aç/kapat',
        'When enabled, your transcription will be sent to all participants': 'Etkinleştirildiğinde transkripsiyonunuz tüm katılımcılara gönderilir',
        'Status': 'Durum',
        'Start caption': 'Altyazıyı başlat',
        'Stop caption': 'Altyazıyı durdur',
        'No captions yet. Click "Start" to begin live captions.': 'Henüz altyazı yok. Canlı altyazı başlatmak için "Başlat\'a" tıklayın.',

        // === Whiteboard ===
        'Toggle Lock whiteboard': 'Beyaz tahtayı kilitle/aç',
        'Drawing color': 'Çizim rengi',
        'Toggle transparent background': 'Şeffaf arka planı aç/kapat',
        'Toggle whiteboard grid': 'Beyaz tahta ızgarasını aç/kapat',
        'Background color': 'Arka plan rengi',
        'Drawing mode': 'Çizim modu',
        'Vanishing pen (disappears in 5s)': 'Kaybolan kalem (5 saniyede kaybolur)',
        'Object mode': 'Nesne modu',
        'Eraser mode': 'Silgi modu',
        'Undo': 'Geri Al',
        'Redo': 'İleri Al',
        'Add circle': 'Daire ekle',
        'Add image URL': 'Görsel URL ekle',
        'Add image file': 'Görsel dosyası ekle',
        'Add line': 'Çizgi ekle',
        'Add pdf file': 'PDF dosyası ekle',
        'Add rectangle': 'Dikdörtgen ekle',
        'Add sticky note': 'Yapışkanlı not ekle',
        'Add text': 'Metin ekle',
        'Add triangle': 'Üçgen ekle',
        'Create Objects': 'Nesne Oluştur',
        'Erase:': 'Sil:',
        'Clone:': 'Klonla:',
        'Redo:': 'İleri Al:',
        'Undo:': 'Geri Al:',
        'Delete/Remove:': 'Sil/Kaldır:',
        'Current view': 'Mevcut görünüm',
        'Fill': 'Tam',
        'Icon': 'Simge',
        'None': 'Hiçbiri',
        'Default': 'Varsayılan',
        'Cover': 'Kaplama',
        'Contain': 'Sığdır',
        'Scale-down': 'Küçült',

        // === File transfer ===
        'Abort file transfer': 'Dosya aktarımını iptal et',
        'Hide file transfer': 'Dosya aktarımını gizle',

        // === Video player ===
        'Close the video player': 'Video oynatıcıyı kapat',
        'Share a video or audio to all participants': 'Tüm katılımcılara video veya ses paylaş',
        'Video Url Player': 'Video URL Oynatıcısı',

        // === Notifications / alerts ===
        'Only the presenter can ask geolocation to the participants': 'Sadece sunucu katılımcılardan konum talep edebilir',
        'Only the presenter can eject participants': 'Sadece sunucu katılımcıları çıkarabilir',
        'Only the presenter can hide participants': 'Sadece sunucu katılımcıları gizleyebilir',
        'Only the presenter can mute participants': 'Sadece sunucu katılımcıları sessize alabilir',

        // === Static HTML strings ===
        'Loading': 'Yükleniyor',
        'Chat': 'Sohbet',
        'Full Screen': 'Tam Ekran',
        'Hide Me': 'Beni Gizle',
        'Share Room': 'Odayı Paylaş',
        'About': 'Hakkında',
        'Start Recording': 'Kaydı Başlat',
        'Pause recording': 'Kaydı duraklat',
        'Resume recording': 'Kaydı devam ettir',
        'Whiteboard': 'Beyaz Tahta',
        'Start Caption': 'Altyazıyı Başlat',
        'Transcription': 'Transkripsiyon',
        'Snapshot': 'Anlık Görüntü',
        'File sharing': 'Dosya Paylaşımı',
        'Scan to join the room': 'Odaya katılmak için tara',
        'Share a Video or Audio': 'Video veya Ses Paylaş',
        'Active rooms': 'Aktif odalar',
        'Please allow the camera & microphone access to use this app.': 'Bu uygulamayı kullanmak için kamera ve mikrofon erişimine izin verin.',
        'Keyboard shortcuts': 'Klavye Kısayolları',
        'General Shortcuts': 'Genel Kısayollar',
        'Pin chat': 'Sohbeti sabitle',
        'Keep awake': 'Uyanık tut',
        'Sounds': 'Sesler',
        'Volume bar': 'Ses çubuğu',
        'Presenter:': 'Sunucu:',
        'Messages': 'Mesajlar',
        'Speech msg': 'Sesli mesaj',
        'Show on msg': 'Mesajda göster',
        'Document PiP': 'Belge PiP',
        'Extra info:': 'Ek bilgi:',
        'TOOLS': 'ARAÇLAR',
        'SHARING': 'PAYLAŞIM',
        'VIEW & SETTINGS': 'GÖRÜNÜM & AYARLAR',
        'RECORDING & CAPTURE': 'KAYIT & YAKALAMA',
        'Toggle': 'Aç/Kapat',
        'Hold:': 'Basılı tut:',
        'Then press': 'Sonra bas',
        'Action': 'Eylem',
        'Shortcut': 'Kısayol',
        'and': 've',
        'camera': 'kamera',
        'microphone': 'mikrofon',
        'captions': 'altyazı',
        'chat': 'sohbet',
        'document PIP': 'belge PIP',
        'emoji': 'emoji',
        'hide myself': 'kendimi gizle',
        'raise hand': 'el kaldır',
        'recording': 'kayıt',
        'screen': 'ekran',
        'screen/window/tab': 'ekran/pencere/sekme',
        'settings': 'ayarlar',
        'the file': 'dosyayı',
        'whiteboard': 'beyaz tahta',
        'Blue': 'Mavi',
        'Green': 'Yeşil',
        'Grey': 'Gri',
        'Red': 'Kırmızı',
        'Orange': 'Turuncu',
        'Yellow': 'Sarı',
        'Purple': 'Mor',
        'Dark': 'Koyu',

        // === Swal dialog common buttons ===
        'Yes': 'Evet',
        'No': 'Hayır',
        'OK': 'Tamam',
        'Ok': 'Tamam',
        'Cancel': 'İptal',
        'Share': 'Paylaş',
        'Create': 'Oluştur',
        'Stop': 'Durdur',
        'Mute': 'Sustur',
        'Hide': 'Gizle',
        'Login': 'Giriş Yap',
        'Camera': 'Kamera',
        'Screen/Window': 'Ekran/Pencere',
        'Got it!': 'Anladım!',

        // === Swal dialog titles & texts ===
        'Time Limit Reached': 'Zaman Sınırına Ulaşıldı',
        'The room has reached its time limit and will close shortly': 'Oda zaman sınırına ulaştı ve kısa süre içinde kapanacak',
        'Ops, Unauthorized': 'Ops, Yetkisiz',
        'The host has user authentication enabled': 'Sunucu kullanıcı doğrulamasını etkinleştirdi',
        'Room is busy': 'Oda dolu',
        'Username': 'Kullanıcı Adı',
        'Do you want to share your screen?': 'Ekranınızı paylaşmak istiyor musunuz?',
        'Select a Date and Time': 'Tarih ve Saat Seçin',
        'Recording options': 'Kayıt seçenekleri',
        'Select the recording type you want to start. Audio will be recorded from all participants.': 'Başlatmak istediğiniz kayıt türünü seçin. Ses tüm katılımcılardan kaydedilecek.',
        'Clean up chat messages?': 'Sohbet mesajları temizlensin mi?',
        'Clean up all caption transcripts?': 'Tüm altyazı dökümleri temizlensin mi?',
        'Delete this messages?': 'Bu mesajı silmek istiyor musunuz?',
        'Mute everyone except yourself?': 'Kendiniz hariç herkesi susturmak istiyor musunuz?',
        "Once muted, you won't be able to unmute them, but they can unmute themselves at any time.": 'Sessize alındıktan sonra sizi açamazlar, ancak katılımcılar istediklerinde kendilerini açabilirler.',
        'Hide everyone except yourself?': 'Kendiniz hariç herkesi gizlemek istiyor musunuz?',
        "Once hided, you won't be able to unhide them, but they can unhide themselves at any time.": 'Gizlendikten sonra görünür yapamazsınız, ancak katılımcılar istediklerinde kendilerini gösterebilirler.',
        'Eject everyone except yourself?': 'Kendiniz hariç herkesi çıkarmak istiyor musunuz?',
        'Are you sure to want eject all participants from the room?': 'Odadaki tüm katılımcıları çıkarmak istediğinizden emin misiniz?',
        'Mute this participant?': 'Bu katılımcıyı sessize almak istiyor musunuz?',
        'Hide this participant?': 'Bu katılımcıyı gizlemek istiyor musunuz?',
        'Stop screen sharing?': 'Ekran paylaşımını durdurmak istiyor musunuz?',
        "Once stopped, you wan't be able to start then, but they can start screen themselves at any time.": 'Durdurulduktan sonra tekrar başlatamazsınız, ancak katılımcılar istediklerinde ekranlarını başlatabilirler.',
        'Set Room password': 'Oda şifresi belirleyin',
        'Please enter the Room password': 'Lütfen oda şifresini girin',
        'Oops, Wrong Room Password': 'Hata, Yanlış Oda Şifresi',
        'The room is locked, try with another one.': 'Oda kilitli, başka bir şifre deneyin.',
        'Oops, Room is Locked': 'Hata, Oda Kilitli',
        'Enter the Room password': 'Oda şifresini girin',
        'Image URL': 'Görsel URL',
        'Create Sticky Note': 'Yapışkan Not Oluştur',
        'Clean the board': 'Tahtayı Temizle',
        'Are you sure you want to clean the board?': 'Tahtayı temizlemek istediğinizden emin misiniz?',
        'Whiteboard Shortcuts': 'Beyaz Tahta Kısayolları',
        'Received file': 'Dosya alındı',
        'Paste a Video or audio URL': 'Video veya ses URL yapıştırın',
        'Kick out': 'Çıkar',
        'Are you sure you want to kick out': 'Çıkarmak istediğinizden emin misiniz:',
        'Start Captions': 'Altyazıları Başlat',
        'wants to start the captions for this session. Would you like to enable them?': 'bu oturum için altyazıları başlatmak istiyor. Etkinleştirmek ister misiniz?',
        'Kicked out!': 'Çıkarıldınız!',
        'Leave a feedback': 'Geri bildirim bırakın',
        'Do you want to rate your MiroTalk experience?': 'MiroTalk deneyiminizi değerlendirmek ister misiniz?',
        'Success': 'Başarılı',
    };

    // ─────────────────────────────────────────────────────────────────────────
    // Language detection
    // Priority: localStorage → browser language → 'tr' (deployment default)
    // Only 'en' and 'tr' are supported; anything else falls back to 'tr'.
    // ─────────────────────────────────────────────────────────────────────────
    var _savedLang = (function () {
        try { return localStorage.getItem('mirotalkLanguage'); } catch (e) { return null; }
    })();

    var _browserLang = (function () {
        var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (lang.startsWith('en')) return 'en';
        if (lang.startsWith('tr')) return 'tr';
        return null; // unsupported → fall through to deployment default
    })();

    var _detected = _savedLang || _browserLang || 'tr';
    var _currentLang = (_detected === 'en') ? 'en' : 'tr';

    window.currentLanguage = _currentLang;

    // ─────────────────────────────────────────────────────────────────────────
    // Translation function
    // t('key') → translated string, or key (English) as fallback
    // ─────────────────────────────────────────────────────────────────────────
    window.t = function (key) {
        if (!key || typeof key !== 'string') return key;
        if (_currentLang === 'en') return key;
        return _tr[key] || key;
    };

    // ─────────────────────────────────────────────────────────────────────────
    // DOM auto-translation
    // Translates elements by their text content as the translation key.
    // Only called for non-English locales (no-op for English).
    // ─────────────────────────────────────────────────────────────────────────
    window.applyI18n = function () {
        if (_currentLang === 'en') return;

        // Translate leaf text nodes in these selectors
        var _leafSelectors = [
            '.title p',
            '.buttons p',
            '.msger-menu-action-label',
            '.msger-sidebar-label',
            '#msgerRoomChatItem .msger-chat-item-copy strong',
            '#msgerRoomChatItem .msger-chat-item-copy small',
            '.empty-chat-title',
            '.empty-chat-desc',
            '.empty-participants-title',
            '.empty-participants-desc',
            '.empty-caption-desc',
            '.transcription-switch-label',
            '.msger-conversation-meta',
            '.msger-sidebar-empty',
            'h1',
            'h3',
            'h5',
        ];

        _leafSelectors.forEach(function (sel) {
            document.querySelectorAll(sel).forEach(function (el) {
                if (el.children.length === 0) {
                    var key = el.textContent.trim();
                    if (key) {
                        var translated = window.t(key);
                        if (translated !== key) el.textContent = translated;
                    }
                }
            });
        });

        // Auto-translate all placeholder attributes
        document.querySelectorAll('[placeholder]').forEach(function (el) {
            var key = el.getAttribute('placeholder');
            if (key) {
                var translated = window.t(key);
                if (translated !== key) el.setAttribute('placeholder', translated);
            }
        });

        // Auto-translate <option> text content
        document.querySelectorAll('option').forEach(function (el) {
            if (el.children.length === 0) {
                var key = el.textContent.trim();
                if (key) {
                    var translated = window.t(key);
                    if (translated !== key) el.textContent = translated;
                }
            }
        });

        // Explicit data-i18n attributes (for future use)
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            el.textContent = window.t(el.getAttribute('data-i18n'));
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            el.setAttribute('placeholder', window.t(el.getAttribute('data-i18n-placeholder')));
        });
        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            el.setAttribute('title', window.t(el.getAttribute('data-i18n-title')));
        });

        // Sync language select value
        var langSel = document.getElementById('languageSelect');
        if (langSel) langSel.value = _currentLang;
    };

    // ─────────────────────────────────────────────────────────────────────────
    // Language switcher
    // ─────────────────────────────────────────────────────────────────────────
    window.setLanguage = function (lang) {
        try { localStorage.setItem('mirotalkLanguage', lang); } catch (e) {}
        location.reload();
    };

    // Run after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', window.applyI18n);
    } else {
        window.applyI18n();
    }
})();
