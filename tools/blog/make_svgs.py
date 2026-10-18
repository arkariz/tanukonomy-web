"""Ilustrasi artikel "Uang habis sebelum akhir bulan" (id dan en).

Pakai:  python3 tools/blog/make_svgs.py src/assets/blog

Menulis 8 berkas SVG (4 ilustrasi x 2 bahasa). Warna mengikuti token
src/styles/global.css; mode gelap lewat @media (prefers-color-scheme) di dalam
SVG, jadi tetap bekerja saat dimuat sebagai <img>. Lebar 486 supaya teks tetap
terbaca di ponsel (kanvas lebih lebar akan mengecil dan teksnya tak terbaca).
Untuk artikel baru, salin pola fungsi di sini; jangan menggambar ulang dari nol.
"""
import sys, html
out = sys.argv[1]
CSS = """
.bg{fill:#fff8f5}.card{fill:#ffffff}.edge{stroke:#1e1b19}.sh{fill:#1e1b19}
.tx{fill:#1e1b19}.mu{fill:#57534e}.ac{fill:#c2410c}.inc{fill:#15803d}.exp{fill:#b91c1c}.tr{fill:#1d4ed8}
.f-ac{fill:#c2410c}
.t-ac{fill:#fdf0e8}.t-in{fill:#dcf2e3}.t-ex{fill:#fde8e6}.t-tr{fill:#e3ebfc}.t-mu{fill:#faf2ee}
.ln{stroke:#1e1b19;stroke-width:2;fill:none}.ar{fill:#1e1b19}
text{font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}
.m{font-family:ui-monospace,'SFMono-Regular',Menlo,Consolas,monospace}
@media (prefers-color-scheme:dark){
.card{fill:#2d2823}.edge{stroke:#8a7d6e}.sh{fill:#14120f}
.tx{fill:#f2ece7}.mu{fill:#a8a29e}.ac{fill:#f46b1c}.inc{fill:#22c55e}.exp{fill:#f87171}.tr{fill:#60a5fa}
.f-ac{fill:#f46b1c}
.t-ac{fill:#3d2618}.t-in{fill:#1f3a28}.t-ex{fill:#4a2323}.t-tr{fill:#1f2a44}.t-mu{fill:#1c1916}
.ln{stroke:#8a7d6e}.ar{fill:#8a7d6e}}
"""
def esc(s): return html.escape(s, quote=False)
def svg(w,h,title,desc,body):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-labelledby="t d">'
            f'<title id="t">{esc(title)}</title><desc id="d">{esc(desc)}</desc><style>{CSS}</style>{body}</svg>')
def box(x,y,w,h,cls='card',sh=4):
    return (f'<rect class="sh" x="{x+sh}" y="{y+sh}" width="{w}" height="{h}" rx="6"/>'
            f'<rect class="{cls} edge" x="{x}" y="{y}" width="{w}" height="{h}" rx="6" stroke-width="2"/>')
def T(x,y,s,cls='tx',size=16,weight=600,anchor='start',mono=False):
    c=f'{cls} m' if mono else cls
    return f'<text class="{c}" x="{x}" y="{y}" font-size="{size}" font-weight="{weight}" text-anchor="{anchor}">{esc(s)}</text>'
def money(lang,n):
    s=f'{n:,}'; return 'Rp'+(s.replace(',','.') if lang=='id' else s)
MON={'id':['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'],'en':['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']}
TX={
'id':dict(
 g_title='Tiga kelompok pengeluaran',g_desc='Tiga kartu: tetap, berubah-ubah, dan sesekali, masing-masing dengan contoh.',
 g=[('TETAP',['Nominal hampir','sama'],['Sewa atau kos','Internet','Cicilan'],'Sulit diubah cepat','t-ac'),
    ('BERUBAH-UBAH',['Naik turun','tiap bulan'],['Makan','Transportasi','Pulsa'],'Kebocoran paling sering','t-ex'),
    ('SESEKALI',['Tidak tiap','bulan'],['Servis kendaraan','Hadiah','Langganan tahunan'],'Paling mudah terlupa','t-tr')],
 s_title='Pengeluaran kecil yang berulang',s_desc='Dua puluh kotak, satu per hari kerja, masing-masing Rp25.000, berjumlah Rp500.000.',
 s_days='20 hari kerja',s_mul='× Rp25.000',s_note='Contoh hitungan, bukan patokan',
 y_title='Biaya tahunan dibagi dua belas',y_desc='Langganan tahunan Rp1.800.000 dibagi 12 bulan menjadi Rp150.000 per bulan.',
 y_top='Langganan tahunan',y_div='dibagi 12 bulan',y_each='Rp150.000 per bulan',y_note='Contoh hitungan. Tiap kotak = Rp150.000.',
 tp_title='Transfer bukan pengeluaran',tp_desc='Perbandingan dua cara mencatat transfer Rp500.000 ke GoPay lalu belanja Rp500.000. Salah: transfer dihitung pengeluaran, total Rp1.000.000. Benar: transfer dicatat sebagai transfer, total pengeluaran Rp500.000.',
 wrong='DIHITUNG SALAH',right='DIHITUNG BENAR',acc='Rekening BCA',ew='GoPay',
 w_tr='Pengeluaran',r_tr='Transfer',r_tr_n='tidak dihitung',shop='Belanja',exp='Pengeluaran',tot='Total pengeluaran tercatat'),
'en':dict(
 g_title='Three groups of spending',g_desc='Three cards: fixed, variable, and occasional, each with examples.',
 g=[('FIXED',['About the','same amount'],['Rent','Internet','Installments'],'Hard to change quickly','t-ac'),
    ('VARIABLE',['Goes up','and down'],['Food','Transport','Phone credit'],'Where leaks show up most','t-ex'),
    ('OCCASIONAL',['Not every','month'],['Vehicle service','Gifts','Annual subscription'],'Easiest to forget','t-tr')],
 s_title='Small recurring expenses',s_desc='Twenty squares, one per workday, each Rp25,000, adding up to Rp500,000.',
 s_days='20 workdays',s_mul='× Rp25,000',s_note='Example only, not a benchmark',
 y_title='Annual cost divided by twelve',y_desc='An annual subscription of Rp1,800,000 divided across 12 months is Rp150,000 per month.',
 y_top='Annual subscription',y_div='divided by 12 months',y_each='Rp150,000 per month',y_note='Example only. Each square = Rp150,000.',
 tp_title='A transfer is not spending',tp_desc='Two ways to record a Rp500,000 transfer to GoPay followed by a Rp500,000 purchase. Wrong: the transfer counts as spending, total Rp1,000,000. Right: the transfer is recorded as a transfer, total spending Rp500,000.',
 wrong='COUNTED WRONG',right='COUNTED RIGHT',acc='BCA account',ew='GoPay',
 w_tr='Spending',r_tr='Transfer',r_tr_n='not counted',shop='Purchase',exp='Spending',tot='Total spending recorded')}

def groups(lang):
    t=TX[lang]; W=486; ch=126; gap=14; b=''
    for i,(lab,sub,items,note,tint) in enumerate(t['g']):
        y=6+i*(ch+gap); b+=box(0,y,480,ch)
        b+=f'<rect class="{tint}" x="1" y="{y+1}" width="140" height="{ch-2}" rx="5"/><line class="ln" x1="141" y1="{y+1}" x2="141" y2="{y+ch-1}"/>'
        b+=T(14,y+34,lab,'tx',14,700,mono=True)+T(14,y+62,sub[0],'mu',15,500)+T(14,y+82,sub[1],'mu',15,500)
        for j,it in enumerate(items):
            yy=y+34+j*26; b+=f'<rect class="f-ac" x="158" y="{yy-10}" width="10" height="10"/>'+T(178,yy,it,'tx',17,600)
        b+=T(158,y+ch-14,note,'ac',15,700)
    return svg(W,6+3*ch+2*gap+10,t['g_title'],t['g_desc'],b)

def small(lang):
    t=TX[lang]; W,H=486,214; b=box(0,6,480,196)
    for k in range(20):
        r,c=divmod(k,5); b+=f'<rect class="f-ac" x="{26+c*28}" y="{34+r*28}" width="22" height="22"/>'
    b+=T(200,62,t['s_days'],'tx',22,700)+T(200,92,t['s_mul'],'tx',22,700,mono=True)
    b+=f'<line class="ln" x1="200" y1="108" x2="458" y2="108"/>'
    b+=f'<rect class="t-ex edge" x="200" y="120" width="258" height="44" rx="6" stroke-width="2"/>'
    b+=T(329,150,'= '+money(lang,500000),'exp',26,700,'middle',True)
    b+=T(26,186,t['s_note'],'mu',14,500)
    return svg(W,H,t['s_title'],t['s_desc'],b)

def yearly(lang):
    t=TX[lang]; m=MON[lang]; W,H=486,362; b=''
    b+=box(110,6,260,72,'t-ac')+T(240,34,t['y_top'],'mu',15,600,'middle')+T(240,66,money(lang,1800000),'ac',28,700,'middle',True)
    b+=f'<line class="ln" x1="240" y1="90" x2="240" y2="116"/><polygon class="ar" points="232,114 248,114 240,128"/>'+T(258,108,t['y_div'],'mu',15,600)
    for i in range(12):
        r,c=divmod(i,6); x=10+c*78; y=146+r*70
        b+=f'<rect class="sh" x="{x+3}" y="{y+3}" width="70" height="58" rx="4"/><rect class="t-in edge" x="{x}" y="{y}" width="70" height="58" rx="4" stroke-width="2"/>'
        b+=T(x+35,y+22,m[i],'mu',13,700,'middle',True)+T(x+35,y+46,'150'+('rb' if lang=='id' else 'K'),'inc',17,700,'middle',True)
    b+=T(240,316,t['y_each'],'inc',22,700,'middle',True)+T(240,342,t['y_note'],'mu',14,500,'middle')
    return svg(W,H,t['y_title'],t['y_desc'],b)

def transfer(lang):
    t=TX[lang]; W=486; ph=268; gap=16; H=6+2*ph+gap+10; b=''
    for ci,(head,wrong) in enumerate(((t['wrong'],True),(t['right'],False))):
        y0=6+ci*(ph+gap); b+=box(0,y0,480,ph)
        b+=f'<rect class="{"t-ex" if wrong else "t-in"}" x="1" y="{y0+1}" width="478" height="38" rx="5"/><line class="ln" x1="1" y1="{y0+39}" x2="479" y2="{y0+39}"/>'
        b+=T(240,y0+26,head,'exp' if wrong else 'inc',15,700,'middle',True)
        b+=f'<rect class="t-mu edge" x="22" y="{y0+54}" width="190" height="38" rx="5" stroke-width="2"/>'+T(117,y0+79,t['acc'],'tx',16,600,'middle')
        b+=f'<rect class="t-mu edge" x="268" y="{y0+54}" width="190" height="38" rx="5" stroke-width="2"/>'+T(363,y0+79,t['ew'],'tx',16,600,'middle')
        b+=f'<line class="ln" x1="216" y1="{y0+73}" x2="250" y2="{y0+73}"/><polygon class="ar" points="248,{y0+66} 262,{y0+73} 248,{y0+80}"/>'
        ct='t-ex' if wrong else 't-tr'; co='exp' if wrong else 'tr'
        b+=f'<rect class="{ct} edge" x="22" y="{y0+106}" width="436" height="50" rx="5" stroke-width="2"/>'
        b+=T(38,y0+137,(t['w_tr'] if wrong else t['r_tr'])+' · '+money(lang,500000),co,16,700)
        b+=T(442,y0+137,('−'+money(lang,500000)) if wrong else t['r_tr_n'],co,15,700,'end',True)
        b+=f'<rect class="t-ex edge" x="22" y="{y0+164}" width="436" height="50" rx="5" stroke-width="2"/>'
        b+=T(38,y0+195,t['shop']+' · '+money(lang,500000),'exp',16,700)+T(442,y0+195,'−'+money(lang,500000),'exp',15,700,'end',True)
        b+=T(22,y0+246,t['tot'],'mu',14,600)+T(458,y0+250,money(lang,1000000 if wrong else 500000),'exp' if wrong else 'inc',26,700,'end',True)
    return svg(W,H,t['tp_title'],t['tp_desc'],b)

for lang in ('id','en'):
    for name,fn in (('tiga-kelompok',groups),('pengeluaran-kecil',small),('ratakan-tahunan',yearly),('transfer-bukan-pengeluaran',transfer)):
        open(f'{out}/{name}-{lang}.svg','w',encoding='utf8').write(fn(lang))
