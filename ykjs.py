#!/usr/bin/env python
# -*- coding: utf-8 -*-
a1 = '4';
a2 = '1';
a3 = 'b4et';
a4 = 'boa4';
a5 = 'o0b';
a6 = 'poz';
a7 = "3d9";
a8 = "b7";
a9 = "ae1";

#functions
def Ba(b):
    if not b:
        return ''
    b = str(b)
    j = [ - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
          - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
          - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,  62, - 1, - 1, - 1,  63,  52,  53,  54,
           55,  56,  57,  58,  59,  60,  61, - 1, - 1, - 1, - 1, - 1, - 1, - 1,   0,   1,   2,
            3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,
           20,  21,  22,  23,  24,  25, - 1, - 1, - 1, - 1, - 1, - 1,  26,  27,  28,  29,  30,
           31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,
           48,  49,  50,  51, - 1, - 1, - 1, - 1, - 1 ]
    i = len(b)
    g = 0
    f = ''
    while g < i:
        while g < i:
            d = j[ord(b[g]) & 255]
            g += 1
            if not (g < i and - 1 == d):
                break
        if - 1 == d or not g < i:
            break
        while g < i:
            c = j[ord(b[g]) & 255]
            g += 1
            if not (g < i and - 1 == c):
                break
        if - 1 == c:
            break
        f += chr(d << 2 | (c & 48) >> 4)
        if  not g < i:
            break
        while g < i:
            d = ord(b[g]) & 255
            g += 1
            if 61 == d:
                return f
            d = j[d]
            if not (g < i and - 1 == d):
                break
        if - 1 == d:
            break
        f += chr((c & 15) << 4 | (d & 60) >> 2)
        if  not g < i:
            break
        while g < i:
            c = ord(b[g]) & 255
            g += 1
            if 61 == c:
                return f
            c = j[c]
            if not (g < i and - 1 == c):
                break
        if - 1 == c:
            break
        f += chr((d & 3) << 6 | c)
    return f

def L(b, d):
    c = list(range(256))
    g = 0
    f = ''
    j = 0
    while j < 256:
        g = (g + c[j] + ord(b[j % len(b)])) % 256
        i = c[j]
        c[j] = c[g]
        c[g] = i
        j += 1
    m = g = j = 0
    while m < len(d):
        j = (j + 1) % 256
        g = (g + c[j]) % 256
        i = c[j]
        c[j] = c[g]
        c[g] = i
        if isinstance(d[m], int):
            f += chr(d[m] ^ c[(c[j] + c[g]) % 256])
        else:
            f += chr(ord(d[m]) ^ c[(c[j] + c[g]) % 256])
        m += 1
    return f

def M(b, d):
    c = []
    g =0
    while g < len(b):
        i = 0
        if 'a' <= b[g] and 'z' >= b[g]:
            i = ord(b[g][0]) -97
        else:
            i = int(b[g]) +26
        f = 0
        while f < 36 and f < len(d):
            if (isinstance(d[f], int) or d[f].isnumeric()) and int(d[f]) == i:
                i = f
                break
            f += 1
        if 25 < i:
            c.append(i-26)
        else:
            c.append(chr(i+97))
        g += 1
    tmp = ''
    for x in c:
        tmp += str(x)
    return tmp

def J(b):
    allchr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    if not b:
        return ''
    b = str(b)
    g = len(b)
    e = 0
    c = ''
    while e < g:
        f = ord(b[e]) & 255
        e += 1
        if e == g:
            c += allchr[f>>2]
            c += allchr[(f&3)<<4]
            c += '=='
            break
        h = ord(b[e])
        e += 1
        if e == g:
            c += allchr[f>>2]
            c += allchr[(f&3)<<4 | (h & 240) >> 4]
            c += allchr[(h & 15) << 2]
            c += '=='
            break
        j = ord(b[e])
        e += 1
        c += allchr[f>>2]
        c += allchr[(f&3)<<4 | (h & 240) >> 4]
        c += allchr[(h & 15) << 2 | (j & 192) >> 6]
        c += allchr[j & 63]
    return c

translate = M
rc4 = L
encode64 = J
decode64 = Ba

def jiemiep():
    sid_create_list = [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26]
    g = M(a7 + a8 + a9, sid_create_list)
    return g

data = jiemiep();
print(data);