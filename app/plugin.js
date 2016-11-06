(function ( $ ) {
    $.fn.zipPattern = function(country) {
        switch (country) {
            case 'AT':
                return '/^([1-9]{1})(\d{3})$/';
            case 'BG':
                return '/^([1-9]{1}[0-9]{3})$/';
            case 'BR':
                return '/^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/';
            case 'CA':
                return '/^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i';
            case 'CH':
                return '/^([1-9]{1})(\d{3})$/';
            case 'CZ':
                return '/^(\d{3})([ ]?)(\d{2})$/';
            case 'DE':
                return '/^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/';
            case 'DK':
                return '/^(DK(-|\s)?)?\d{4}$/i';
            case 'ES':
                return '/^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/';
            case 'FR':
                return '/^[0-9]{5}$/i';
            case 'IN':
                return '/^\d{3}\s?\d{3}$/';
            case 'IE':
                return '/^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/';
            case 'IT':
                return '/^(I-|IT-)?\d{5}$/i';
            case 'MA':
                return '/^[1-9][0-9]{4}$/i';
            case 'NL':
                return '/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i';
            case 'PL':
                return '/^[0-9]{2}\-[0-9]{3}$/';
            case 'PT':
                return '/^[1-9]\d{3}-\d{3}$/';
            case 'RO':
                return '/^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i';
            case 'RU':
                return '/^[0-9]{6}$/i';
            case 'SE':
                return '/^(S-)?\d{3}\s?\d{2}$/i';
            case 'SG':
                return '/^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i';
            case 'SK':
                return '/^(\d{3})([ ]?)(\d{2})$/';
            case 'US':
                return '/^[0-9]{5}(?:-[0-9]{4})?$/';
            default:
                return '/^\d{4,5}([\-]?\d{4})?$/';
        }
    };
}( jQuery ));

