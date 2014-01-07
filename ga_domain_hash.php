<?php
/**
* ga_domain_hash.php v1.0.0 - 2014-01-07
* https://github.com/thyngster/ga_domain_hash.php
* (c) 2014 David Vallejo ( @thyng )
* license: www.opensource.org/licenses/mit-license.php
*
* Based on original Urchin's domain hash generation routine
*
*/

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
