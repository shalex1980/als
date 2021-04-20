/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Tonicons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ton-so-AOL': '&#xe600;',
		'ton-so-apple-store': '&#xe601;',
		'ton-so-arrow': '&#xe602;',
		'ton-so-attach': '&#xe603;',
		'ton-so-backpack': '&#xe604;',
		'ton-so-backward': '&#xe605;',
		'ton-so-bag-1': '&#xe606;',
		'ton-so-bag-2': '&#xe60c;',
		'ton-so-bagel': '&#xe60d;',
		'ton-so-basket-1': '&#xe60e;',
		'ton-so-basket-2': '&#xe60f;',
		'ton-so-basket-3': '&#xe610;',
		'ton-so-battery': '&#xe611;',
		'ton-so-beboo': '&#xe612;',
		'ton-so-behance': '&#xe613;',
		'ton-so-bike': '&#xe614;',
		'ton-so-blog': '&#xe615;',
		'ton-so-bluetooth': '&#xe616;',
		'ton-so-box-1': '&#xe617;',
		'ton-so-box-2': '&#xe61b;',
		'ton-so-box-3': '&#xe61c;',
		'ton-so-burger': '&#xe620;',
		'ton-so-cake': '&#xe621;',
		'ton-so-calculator': '&#xe622;',
		'ton-so-calendar-1': '&#xe623;',
		'ton-so-calendar-2': '&#xe624;',
		'ton-so-film-roll': '&#xe625;',
		'ton-so-camera-1': '&#xe626;',
		'ton-so-camera-2': '&#xe627;',
		'ton-so-car': '&#xe628;',
		'ton-so-cart-1': '&#xe629;',
		'ton-so-cart-2': '&#xe62a;',
		'ton-so-suitcase-1': '&#xe62b;',
		'ton-so-suitcase-2': '&#xe62c;',
		'ton-so-cash-resgister': '&#xe62d;',
		'ton-so-chart-1': '&#xe62e;',
		'ton-so-chart-2': '&#xe62f;',
		'ton-so-chart-3': '&#xe630;',
		'ton-so-chart-4': '&#xe631;',
		'ton-so-chart-5': '&#xe632;',
		'ton-so-chart-6': '&#xe633;',
		'ton-so-chart-7': '&#xe634;',
		'ton-so-check': '&#xe635;',
		'ton-so-claket': '&#xe636;',
		'ton-so-clock-1': '&#xe637;',
		'ton-so-clock-2': '&#xe638;',
		'ton-so-clock-tower': '&#xe639;',
		'ton-so-cloud-1': '&#xe63a;',
		'ton-so-cloud-2': '&#xe63b;',
		'ton-so-cloud-3': '&#xe63c;',
		'ton-so-cloud-4': '&#xe63d;',
		'ton-so-cloud-5': '&#xe63e;',
		'ton-so-cloud-6': '&#xe63f;',
		'ton-so-coctail': '&#xe640;',
		'ton-so-compass': '&#xe641;',
		'ton-so-crop': '&#xe642;',
		'ton-so-data-1': '&#xe643;',
		'ton-so-data-2': '&#xe644;',
		'ton-so-data-3': '&#xe645;',
		'ton-so-devianart': '&#xe646;',
		'ton-so-diamond': '&#xe647;',
		'ton-so-digg': '&#xe648;',
		'ton-so-dollar-2': '&#xe649;',
		'ton-so-dollar': '&#xe64a;',
		'ton-so-dont-disturb': '&#xe64b;',
		'ton-so-donut': '&#xe64c;',
		'ton-so-dribbble': '&#xe64d;',
		'ton-so-drink-1': '&#xe64e;',
		'ton-so-drink-2': '&#xe64f;',
		'ton-so-drink-3': '&#xe650;',
		'ton-so-eiffel': '&#xe651;',
		'ton-so-eject': '&#xe673;',
		'ton-so-mail-1': '&#xe674;',
		'ton-so-mail-2': '&#xe675;',
		'ton-so-mail-3': '&#xe676;',
		'ton-so-equalizer-1': '&#xe67f;',
		'ton-so-equalizer-2': '&#xe680;',
		'ton-so-euro': '&#xe681;',
		'ton-so-eye': '&#xe682;',
		'ton-so-facebook': '&#xe683;',
		'ton-so-film-strip': '&#xe684;',
		'ton-so-fire': '&#xe685;',
		'ton-so-flag-1': '&#xe686;',
		'ton-so-flickr': '&#xe687;',
		'ton-so-folder-1': '&#xe688;',
		'ton-so-folder-2': '&#xe689;',
		'ton-so-folder-3': '&#xe68a;',
		'ton-so-folder-4': '&#xe68b;',
		'ton-so-folder-5': '&#xe68c;',
		'ton-so-folder-6': '&#xe68d;',
		'ton-Folder-1': '&#xe68e;',
		'ton-so-folder-10': '&#xe690;',
		'ton-so-folder-11': '&#xe695;',
		'ton-so-file-1': '&#xe69a;',
		'ton-so-file-2': '&#xe69c;',
		'ton-so-file-3': '&#xe69f;',
		'ton-so-file-4': '&#xe6a2;',
		'ton-so-file-5': '&#xe6a5;',
		'ton-so-file-6': '&#xe6a8;',
		'ton-so-file-7': '&#xe6ab;',
		'ton-so-file-8': '&#xe6ae;',
		'ton-so-file-9': '&#xe6b2;',
		'ton-so-file-10': '&#xe6b5;',
		'ton-so-file-11': '&#xe6bd;',
		'ton-so-file-12': '&#xe6c6;',
		'ton-so-file-13': '&#xe6cb;',
		'ton-so-file-14': '&#xe6ce;',
		'ton-so-file-15': '&#xe6d1;',
		'ton-so-file-16': '&#xe6d4;',
		'ton-so-file-17': '&#xe6d7;',
		'ton-so-file-18': '&#xe6da;',
		'ton-so-file-19': '&#xe6dd;',
		'ton-so-umbrella-1': '&#xe6e2;',
		'ton-so-cloud-7': '&#xe6e3;',
		'ton-so-cloud-8': '&#xe6e4;',
		'ton-so-cloud-9': '&#xe6e5;',
		'ton-so-cloud-10': '&#xe6e6;',
		'ton-so-cloud-11': '&#xe6e7;',
		'ton-so-cloud-12': '&#xe6e8;',
		'ton-so-cloud-13': '&#xe6e9;',
		'ton-so-wind-1': '&#xe6ea;',
		'ton-so-wind-2': '&#xe6eb;',
		'ton-so-wind-3': '&#xe6ec;',
		'ton-so-umbrella-2': '&#xe6ed;',
		'ton-so-wind-4': '&#xe6ee;',
		'ton-so-sun': '&#xe6ef;',
		'ton-so-drops': '&#xe6f0;',
		'ton-so-lighting-1': '&#xe6f1;',
		'ton-so-moon-1': '&#xe6f2;',
		'ton-so-rooster': '&#xe6f3;',
		'ton-so-tornado': '&#xe6f4;',
		'ton-so-thermometer': '&#xe6f5;',
		'ton-so-wind-5': '&#xe6f6;',
		'ton-so-fahrenheit': '&#xe6f7;',
		'ton-so-umbrella-3': '&#xe6f8;',
		'ton-so-umbrella-4': '&#xe6f9;',
		'ton-so-degree': '&#xe6fa;',
		'ton-so-cloud-14': '&#xe6fb;',
		'ton-so-cloud-15': '&#xe6fc;',
		'ton-so-cloud-16': '&#xe6fd;',
		'ton-so-cloud-17': '&#xe6fe;',
		'ton-so-cloud-18': '&#xe6ff;',
		'ton-so-fork-knife': '&#xe700;',
		'ton-so-forrst': '&#xe701;',
		'ton-so-forward': '&#xe702;',
		'ton-so-friendfeed': '&#xe703;',
		'ton-so-fries': '&#xe704;',
		'ton-so-gallery-1': '&#xe705;',
		'ton-so-gallery-2': '&#xe706;',
		'ton-so-gallery-3': '&#xe707;',
		'ton-so-gitHub': '&#xe708;',
		'ton-so-glass-2': '&#xe709;',
		'ton-so-glass-3': '&#xe70a;',
		'ton-so-glass-1': '&#xe70f;',
		'ton-so-glasses': '&#xe710;',
		'ton-so-globe': '&#xe711;',
		'ton-so-gong': '&#xe714;',
		'ton-so-google-plus': '&#xe715;',
		'ton-so-gps': '&#xe716;',
		'ton-so-groveshark': '&#xe717;',
		'ton-so-guitar': '&#xe718;',
		'ton-so-handset': '&#xe72e;',
		'ton-so-hat': '&#xe72f;',
		'ton-so-headset-1': '&#xe730;',
		'ton-so-headset-2': '&#xe731;',
		'ton-so-heart': '&#xe732;',
		'ton-so-home': '&#xe733;',
		'ton-so-hot-dog': '&#xe734;',
		'ton-so-HTML5': '&#xe735;',
		'ton-so-ice-cream-1': '&#xe736;',
		'ton-so-ice-cream-2': '&#xe737;',
		'ton-so-is': '&#xe738;',
		'ton-so-inbox-1': '&#xe739;',
		'ton-so-inbox-2': '&#xe73a;',
		'ton-so-inbox-3': '&#xe73b;',
		'ton-so-inbox-4': '&#xe73c;',
		'ton-so-inbox-5': '&#xe73d;',
		'ton-so-info': '&#xe73e;',
		'ton-so-instagram': '&#xe73f;',
		'ton-so-island': '&#xe740;',
		'ton-so-key-1': '&#xe741;',
		'ton-so-key-2': '&#xe742;',
		'ton-so-label': '&#xe743;',
		'ton-so-laptop': '&#xe744;',
		'ton-so-last-fm': '&#xe745;',
		'ton-so-lemon': '&#xe746;',
		'ton-so-like': '&#xe747;',
		'ton-so-link': '&#xe748;',
		'ton-so-share': '&#xe749;',
		'ton-so-linkedin': '&#xe74a;',
		'ton-so-reload': '&#xe74b;',
		'ton-so-lock-1': '&#xe74c;',
		'ton-so-lock-2': '&#xe74d;',
		'ton-so-mag': '&#xe74e;',
		'ton-so-map-pin-1': '&#xe74f;',
		'ton-so-thumbtack-1': '&#xe751;',
		'ton-so-map-pin-3': '&#xe752;',
		'ton-so-map-pin-4': '&#xe753;',
		'ton-so-map-pin-5': '&#xe758;',
		'ton-so-megaphone-1': '&#xe759;',
		'ton-so-megaphone-2': '&#xe75a;',
		'ton-so-microphone-1': '&#xe75b;',
		'ton-so-microphone-2': '&#xe75c;',
		'ton-so-microphone-3': '&#xe75d;',
		'ton-so-mustache': '&#xe75e;',
		'ton-so-myspace': '&#xe75f;',
		'ton-so-network-1': '&#xe760;',
		'ton-so-network-2': '&#xe761;',
		'ton-so-network-3': '&#xe762;',
		'ton-so-new-mail': '&#xe763;',
		'ton-so-new': '&#xe76a;',
		'ton-so-newspaper': '&#xe76b;',
		'ton-so-newsvine': '&#xe76c;',
		'ton-so-nota-1': '&#xe76d;',
		'ton-so-nota-2': '&#xe76e;',
		'ton-so-notification-1': '&#xe76f;',
		'ton-so-notification-2': '&#xe770;',
		'ton-so-notification-3': '&#xe771;',
		'ton-so-notification-4': '&#xe772;',
		'ton-so-on-off': '&#xe773;',
		'ton-so-open': '&#xe774;',
		'ton-so-origami': '&#xe775;',
		'ton-so-paintRoll': '&#xe776;',
		'ton-so-passport': '&#xe777;',
		'ton-so-pause': '&#xe778;',
		'ton-so-pen': '&#xe779;',
		'ton-so-people-1': '&#xe77a;',
		'ton-so-people-2': '&#xe77b;',
		'ton-so-people-3': '&#xe77c;',
		'ton-so-person-1': '&#xe77d;',
		'ton-so-person-2': '&#xe77e;',
		'ton-so-person-3': '&#xe77f;',
		'ton-so-photo-1': '&#xe780;',
		'ton-so-photo-2': '&#xe781;',
		'ton-so-piano': '&#xe782;',
		'ton-so-picassa': '&#xe78a;',
		'ton-so-pie-chart-1': '&#xe78b;',
		'ton-so-pie-chart-2': '&#xe78c;',
		'ton-so-pinterst': '&#xe78d;',
		'ton-so-pizza': '&#xe78e;',
		'ton-so-plane-2': '&#xe78f;',
		'ton-so-plane': '&#xe790;',
		'ton-so-plate': '&#xe791;',
		'ton-so-play': '&#xe792;',
		'ton-so-popcorn': '&#xe793;',
		'ton-so-printer': '&#xe794;',
		'ton-so-pyramids': '&#xe798;',
		'ton-so-quora': '&#xe799;',
		'ton-so-flag-2': '&#xe79a;',
		'ton-so-radio': '&#xe79b;',
		'ton-so-refresh-1': '&#xe79c;',
		'ton-so-refresh-2': '&#xe79d;',
		'ton-so-rss': '&#xe79e;',
		'ton-so-satellite-1': '&#xe79f;',
		'ton-so-satellite-2': '&#xe7a0;',
		'ton-so-scale-1': '&#xe7a1;',
		'ton-so-scale-2': '&#xe7a2;',
		'ton-so-scale-3': '&#xe7a3;',
		'ton-so-scale-4': '&#xe7a4;',
		'ton-so-scissors': '&#xe7a5;',
		'ton-so-scooter': '&#xe7a6;',
		'ton-so-screen-1': '&#xe7a7;',
		'ton-so-screen-2': '&#xe7a8;',
		'ton-so-screen-3': '&#xe7a9;',
		'ton-so-screen-4': '&#xe7aa;',
		'ton-so-upload-1': '&#xe7ab;',
		'ton-so-upload-2': '&#xe7ac;',
		'ton-so-upload-3': '&#xe7ad;',
		'ton-so-upload-4': '&#xe7ae;',
		'ton-so-upload-5': '&#xe7af;',
		'ton-so-equalizer-3': '&#xe7b0;',
		'ton-so-gear-1': '&#xe7b1;',
		'ton-so-gear-2': '&#xe7b2;',
		'ton-so-shareThis': '&#xe7b3;',
		'ton-so-ship': '&#xe7b4;',
		'ton-so-shuffle': '&#xe7b5;',
		'ton-so-skype': '&#xe7b6;',
		'ton-so-smartphone-2': '&#xe7b7;',
		'ton-so-smartphone': '&#xe7b8;',
		'ton-so-soundcloud': '&#xe7b9;',
		'ton-so-speaker': '&#xe7ba;',
		'ton-so-speech-bubble-1': '&#xe7bb;',
		'ton-so-speech-bubble-2': '&#xe7bc;',
		'ton-so-speech-bubble-3': '&#xe7bd;',
		'ton-so-speech-bubble-4': '&#xe7be;',
		'ton-so-speech-bubble-5': '&#xe7bf;',
		'ton-so-speech-bubble-6': '&#xe7c0;',
		'ton-so-speech-bubble-7': '&#xe7c1;',
		'ton-so-speech-bubble-8': '&#xe7c2;',
		'ton-so-speech-bubble-9': '&#xe7c3;',
		'ton-so-speech-bubble-10': '&#xe7c4;',
		'ton-so-sport-ball-1': '&#xe7c5;',
		'ton-so-sport-ball-2': '&#xe7c6;',
		'ton-so-sport-ball-3': '&#xe7c7;',
		'ton-so-sport-ball-4': '&#xe7c8;',
		'ton-so-sport-ball-5': '&#xe7d8;',
		'ton-so-sport-ball-6': '&#xe7d9;',
		'ton-so-sport-ball-7': '&#xe7da;',
		'ton-so-sport-ball-8': '&#xe7db;',
		'ton-so-medal': '&#xe7dc;',
		'ton-so-star': '&#xe7dd;',
		'ton-so-stop': '&#xe7de;',
		'ton-so-stopwatch': '&#xe7df;',
		'ton-so-store': '&#xe7e0;',
		'ton-so-stumbleupon': '&#xe7ec;',
		'ton-so-sunbed': '&#xe7ed;',
		'ton-so-tablet-1': '&#xe7ee;',
		'ton-so-tablet-2': '&#xe7ef;',
		'ton-so-target': '&#xe7f0;',
		'ton-so-tent': '&#xe7f1;',
		'ton-so-test-tube': '&#xe7f2;',
		'ton-so-tool': '&#xe7f3;',
		'ton-so-train': '&#xe7f4;',
		'ton-so-trash': '&#xe7f5;',
		'ton-so-tumblr': '&#xe7f6;',
		'ton-so-turntable': '&#xe7f7;',
		'ton-so-twitter-1': '&#xe7fc;',
		'ton-so-twitter-2': '&#xe7fd;',
		'ton-so-vimeo': '&#xe7fe;',
		'ton-so-voice-mail': '&#xe7ff;',
		'ton-so-volume-1': '&#xe800;',
		'ton-so-volume-2': '&#xe801;',
		'ton-so-volume-3': '&#xe802;',
		'ton-so-wordpress': '&#xe803;',
		'ton-so-yahoo': '&#xe804;',
		'ton-so-youtube': '&#xe805;',
		'ton-so-zerply': '&#xe806;',
		'ton-so-zing': '&#xe807;',
		'ton-so-zoom-in': '&#xe808;',
		'ton-so-zoom-out': '&#xe809;',
		'ton-li-cloud-1': '&#xe80a;',
		'ton-li-cloud-2': '&#xe80b;',
		'ton-li-cloud-3': '&#xe80c;',
		'ton-li-cloud-4': '&#xe80d;',
		'ton-li-cloud-5': '&#xe80e;',
		'ton-li-cloud-6': '&#xe80f;',
		'ton-li-cloud-7': '&#xe810;',
		'ton-li-cloud-8': '&#xe811;',
		'ton-li-cloud-9': '&#xe812;',
		'ton-Fahrenheit': '&#xe813;',
		'ton-Degree': '&#xe814;',
		'ton-li-cloud-10': '&#xe815;',
		'ton-li-cloud-11': '&#xe816;',
		'ton-li-umbrella-1': '&#xe817;',
		'ton-li-umbrella-2': '&#xe818;',
		'ton-li-umbrella-3': '&#xe819;',
		'ton-li-wind-1': '&#xe81a;',
		'ton-li-wind-2': '&#xe81b;',
		'ton-li-tornado': '&#xe81c;',
		'ton-li-thermometer': '&#xe81d;',
		'ton-li-rooster': '&#xe81e;',
		'ton-li-wind-3': '&#xe81f;',
		'ton-li-lightning-1': '&#xe820;',
		'ton-li-drops': '&#xe821;',
		'ton-li-moon-1': '&#xe822;',
		'ton-li-sun': '&#xe823;',
		'ton-li-scisors': '&#xe824;',
		'ton-li-taget': '&#xe825;',
		'ton-li-paint-poll': '&#xe826;',
		'ton-li-key': '&#xe827;',
		'ton-li-test-tube': '&#xe828;',
		'ton-li-lightning-2': '&#xe829;',
		'ton-li-umbrella-4': '&#xe82a;',
		'ton-li-globe': '&#xe82b;',
		'ton-li-knives-forks': '&#xe82c;',
		'ton-li-Glass-1': '&#xe82d;',
		'ton-li-mug-1': '&#xe82e;',
		'ton-li-cup': '&#xe82f;',
		'ton-li-pen': '&#xe830;',
		'ton-li-paper-plane': '&#xe831;',
		'ton-li-open-closed': '&#xe832;',
		'ton-li-store': '&#xe833;',
		'ton-li-box-1': '&#xe834;',
		'ton-li-box-2': '&#xe835;',
		'ton-li-box-3': '&#xe836;',
		'ton-li-bag-1': '&#xe837;',
		'ton-li-bag-2': '&#xe838;',
		'ton-li-bag-3': '&#xe839;',
		'ton-li-basket-1': '&#xe83a;',
		'ton-li-cart-1': '&#xe83b;',
		'ton-li-cart-2': '&#xe83c;',
		'ton-li-label': '&#xe83d;',
		'ton-li-bike': '&#xe83e;',
		'ton-li-car': '&#xe83f;',
		'ton-li-train': '&#xe840;',
		'ton-li-plane': '&#xe841;',
		'ton-li-flag-1': '&#xe842;',
		'ton-li-compass': '&#xe843;',
		'ton-li-map-pin-1': '&#xe844;',
		'ton-li-map': '&#xe845;',
		'ton-li-map-pin-2': '&#xe846;',
		'ton-li-map-pin-3': '&#xe847;',
		'ton-li-map-pin-4': '&#xe848;',
		'ton-li-thumbtack-1': '&#xe849;',
		'ton-li-thumbtack-2': '&#xe84a;',
		'ton-li-mail-1': '&#xe84b;',
		'ton-li-mail-2': '&#xe84c;',
		'ton-li-mail-3': '&#xe84d;',
		'ton-li-mail-4': '&#xe84e;',
		'ton-li-mail-5': '&#xe84f;',
		'ton-li-file-1': '&#xe850;',
		'ton-li-file-2': '&#xe851;',
		'ton-li-file-3': '&#xe852;',
		'ton-li-file-4': '&#xe853;',
		'ton-li-file-5': '&#xe854;',
		'ton-li-file-6': '&#xe855;',
		'ton-li-file-7': '&#xe856;',
		'ton-li-file-8': '&#xe857;',
		'ton-li-mustache': '&#xe858;',
		'ton-li-id': '&#xe859;',
		'ton-li-flag-2': '&#xe85a;',
		'ton-li-thumb-up': '&#xe85b;',
		'ton-li-heart': '&#xe85c;',
		'ton-li-star-1': '&#xe85d;',
		'ton-li-people-1': '&#xe85e;',
		'ton-li-people-2': '&#xe85f;',
		'ton-li-people-3': '&#xe860;',
		'ton-li-people-4': '&#xe861;',
		'ton-li-people-5': '&#xe862;',
		'ton-li-people-6': '&#xe863;',
		'ton-li-people-7': '&#xe864;',
		'ton-li-attach': '&#xe865;',
		'ton-li-photo-1': '&#xe866;',
		'ton-li-photo-2': '&#xe867;',
		'ton-li-lock-1': '&#xe868;',
		'ton-li-lock-2': '&#xe869;',
		'ton-li-crop': '&#xe86a;',
		'ton-li-scale-1': '&#xe86b;',
		'ton-li-scale-2': '&#xe86c;',
		'ton-li-scale-3': '&#xe86d;',
		'ton-li-scale-4': '&#xe86e;',
		'ton-li-new-mail': '&#xe86f;',
		'ton-li-upload-1': '&#xe870;',
		'ton-li-download-4': '&#xe871;',
		'ton-li-upload-2': '&#xe872;',
		'ton-li-download-1': '&#xe873;',
		'ton-li-upload-3': '&#xe874;',
		'ton-li-download-2': '&#xe875;',
		'ton-li-arrow-1': '&#xe876;',
		'ton-li-upload-4': '&#xe877;',
		'ton-li-upload-5': '&#xe878;',
		'ton-li-download-3': '&#xe879;',
		'ton-li-upload-6': '&#xe87a;',
		'ton-li-reload-1': '&#xe87b;',
		'ton-li-refresh-1': '&#xe87c;',
		'ton-li-refresh-2': '&#xe87d;',
		'ton-li-shuffle': '&#xe87e;',
		'ton-li-equalizer-1': '&#xe87f;',
		'ton-li-equalizer-2': '&#xe880;',
		'ton-li-music-forward': '&#xe881;',
		'ton-li-music-backward-1': '&#xe882;',
		'ton-li-music-eject': '&#xe883;',
		'ton-li-music-stop': '&#xe884;',
		'ton-li-music-play': '&#xe885;',
		'ton-li-music-pause': '&#xe886;',
		'ton-li-nota-1': '&#xe887;',
		'ton-li-headset': '&#xe888;',
		'ton-li-volume-1': '&#xe889;',
		'ton-li-volume-2': '&#xe88a;',
		'ton-li-volume-3': '&#xe88b;',
		'ton-li-trash': '&#xe88c;',
		'ton-li-data-1': '&#xe88d;',
		'ton-li-data-2': '&#xe88e;',
		'ton-li-data-3': '&#xe88f;',
		'ton-li-folder-1': '&#xe890;',
		'ton-li-folder-2': '&#xe891;',
		'ton-li-zoom-1': '&#xe892;',
		'ton-li-zoom-2': '&#xe893;',
		'ton-li-voice-mail': '&#xe894;',
		'ton-li-check': '&#xe895;',
		'ton-li-minus': '&#xe896;',
		'ton-li-cross': '&#xe897;',
		'ton-li-plus': '&#xe898;',
		'ton-li-eye': '&#xe899;',
		'ton-li-newspaper': '&#xe89a;',
		'ton-li-info': '&#xe89b;',
		'ton-li-calendar-1': '&#xe89c;',
		'ton-li-calendar-2': '&#xe89d;',
		'ton-li-speech-buble-1': '&#xe89e;',
		'ton-li-speech-buble-2': '&#xe89f;',
		'ton-li-speech-buble-3': '&#xe8a0;',
		'ton-li-speech-buble-4': '&#xe8a1;',
		'ton-li-speech-buble-5': '&#xe8a2;',
		'ton-li-speech-buble-6': '&#xe8a3;',
		'ton-li-speech-buble-7': '&#xe8a4;',
		'ton-li-speech-buble-8': '&#xe8a5;',
		'ton-li-clock-1': '&#xe8a6;',
		'ton-li-clock-2': '&#xe8a7;',
		'ton-li-clock-3': '&#xe8a8;',
		'ton-li-pie-chart-1': '&#xe8a9;',
		'ton-li-pie-chart-2': '&#xe8aa;',
		'ton-li-chart-1': '&#xe8ab;',
		'ton-li-chart-2': '&#xe8ac;',
		'ton-li-chart-3': '&#xe8ad;',
		'ton-li-chart-4': '&#xe8ae;',
		'ton-li-chart-5': '&#xe8af;',
		'ton-li-chart-6': '&#xe8b0;',
		'ton-li-chart-7': '&#xe8b1;',
		'ton-li-suitcase': '&#xe8b2;',
		'ton-li-cloud-12': '&#xe8b3;',
		'ton-li-cloud-13': '&#xe8b4;',
		'ton-li-cloud-14': '&#xe8b5;',
		'ton-li-cloud-15': '&#xe8b6;',
		'ton-li-cloud-16': '&#xe8b7;',
		'ton-li-cloud-17': '&#xe8b8;',
		'ton-li-bluetooth': '&#xe8b9;',
		'ton-li-server-1': '&#xe8ba;',
		'ton-li-server-2': '&#xe8bb;',
		'ton-li-server-3': '&#xe8bc;',
		'ton-li-share': '&#xe8bd;',
		'ton-li-link': '&#xe8be;',
		'ton-li-home': '&#xe8bf;',
		'ton-li-signal': '&#xe8c0;',
		'ton-li-gong': '&#xe8c1;',
		'ton-li-on-off': '&#xe8c2;',
		'ton-li-battery': '&#xe8c3;',
		'ton-li-bulb': '&#xe8c4;',
		'ton-li-radio': '&#xe8c5;',
		'ton-li-printer': '&#xe8c6;',
		'ton-li-satellite-1': '&#xe8c7;',
		'ton-li-satellite-2': '&#xe8c8;',
		'ton-li-satellite-tool': '&#xe8c9;',
		'ton-li-gear-1': '&#xe8ca;',
		'ton-li-gear-2': '&#xe8cb;',
		'ton-li-equalizer-3': '&#xe8cc;',
		'ton-li-megaphone-1': '&#xe8cd;',
		'ton-li-megaphone-2': '&#xe8ce;',
		'ton-li-phone': '&#xe8cf;',
		'ton-li-microphone-1': '&#xe8d0;',
		'ton-li-microphone-2': '&#xe8d1;',
		'ton-li-claket': '&#xe8d2;',
		'ton-li-film-strip-1': '&#xe8d3;',
		'ton-li-film-strip-2': '&#xe8d4;',
		'ton-li-camera-1': '&#xe8d5;',
		'ton-li-camera-2': '&#xe8d6;',
		'ton-li-phone-1': '&#xe8d7;',
		'ton-li-laptop': '&#xe8d8;',
		'ton-li-screen': '&#xe8d9;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ton-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
