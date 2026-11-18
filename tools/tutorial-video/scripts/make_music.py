"""Musik latar chiptune buatan sendiri (bebas lisensi): disusun di sini,
bukan diunduh. Menulis public/music/chiptune.wav (mono 44,1 kHz)."""
import math, random, struct, wave

SR = 44100
BPM = 104
BEAT = 60 / BPM
BARS = 18  # sekitar 41 detik
random.seed(7)

def freq(n):  # nomor MIDI -> Hz
    return 440 * 2 ** ((n - 69) / 12)

chords = [(60, 64, 67), (57, 60, 64), (53, 57, 60), (55, 59, 62)]  # C Am F G
melody = [
    [72, None, 76, 79, 76, None, 74, 72], [69, None, 72, 76, 74, None, 72, 69],
    [65, None, 69, 72, 74, 72, 69, None], [67, 71, 74, None, 71, None, 67, None],
]
total = int(BARS * 4 * BEAT * SR)
buf = [0.0] * total

def add(start_s, dur_s, f, vol, kind):
    a = int(start_s * SR); n = int(dur_s * SR)
    for i in range(n):
        if a + i >= total: break
        t = i / SR
        ph = (t * f) % 1
        if kind == 'square': v = 1 if ph < 0.25 else -1
        elif kind == 'tri': v = 4 * abs(ph - 0.5) - 1
        else: v = random.uniform(-1, 1)
        env = min(1, i / 200) * max(0, 1 - i / n) ** (0.6 if kind != 'noise' else 3)
        buf[a + i] += v * vol * env

for bar in range(BARS):
    c = chords[bar % 4]; t0 = bar * 4 * BEAT
    intro = bar < 1
    for b in range(4):  # bas segitiga
        add(t0 + b * BEAT, BEAT * 0.9, freq(c[0] - 12), 0.22, 'tri')
    for k in range(8):  # arpeggio lembut
        add(t0 + k * BEAT / 2, BEAT / 2 * 0.8, freq(c[k % 3] + 12), 0.035, 'square')
    if not intro:
        for k, n in enumerate(melody[bar % 4]):
            if n: add(t0 + k * BEAT / 2, BEAT / 2 * 0.85, freq(n), 0.06, 'square')
        for k in range(8):
            add(t0 + k * BEAT / 2, 0.04, 0, 0.05 if k % 2 else 0.03, 'noise')

peak = max(abs(x) for x in buf) or 1
fade = int(2.5 * SR)
with wave.open('public/music/chiptune.wav', 'w') as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
    out = bytearray()
    for i, x in enumerate(buf):
        g = min(1, i / (0.5 * SR), (total - i) / fade)
        out += struct.pack('<h', int(x / peak * 0.8 * g * 32767))
    w.writeframes(bytes(out))
print('ok', total / SR)
