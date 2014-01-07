<?php
// Google Analytics DomainHash Generator
// David Vallejo ( @thyng )
// Based on original Urchin's domain hash generation routine
// 2k14

function utf8_char_code_at($str, $index) {
    $char = mb_substr($str, $index, 1, 'UTF-8');

    if (mb_check_encoding($char, 'UTF-8')) {
        $ret = mb_convert_encoding($char, 'UTF-32BE', 'UTF-8');
        return hexdec(bin2hex($ret));
    } else {
        return null;
    }
}

function gaDomainHash($domain) {
    $h=0;
    $g=0;
    for ($i=strlen($domain)-1;$i>=0;$i--) {
        $c = (int) preg_replace('/\D/', '',utf8_char_code_at($domain,$i));
        $h=(($h << 6) & 0xfffffff) + $c + ($c << 14);
        if (($g=$h & 0xfe00000)!=0) {
            $h=($h ^ ($g >> 21));
        }
    }
    return $h;
}

echo gaDomainHash("thyngster.com");
?>
