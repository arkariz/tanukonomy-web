// Titik masuk sementara untuk merender tangkapan layar landing page dari
// aplikasi sungguhan (repo arkariz/Saldough). Salin ke lib/ di repo aplikasi,
// build web, lalu hapus lagi -- JANGAN di-commit ke repo aplikasi.
// Langkah lengkap ada di README.md folder ini.
import 'package:di/di.dart';
import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:saldough/app.dart';
import 'package:saldough/core/di/di.dart';
import 'package:saldough/core/foundation/effect_handler/app_effect_registry.dart';
import 'package:saldough/core/i18n/strings.g.dart';
import 'package:saldough/core/tutorial/tutorial.dart';
import 'package:saldough/features/budget/domain/entities/budget.dart';
import 'package:saldough/features/budget/domain/entities/budget_item.dart';
import 'package:saldough/features/budget/domain/entities/budget_item_kind.dart';
import 'package:saldough/features/budget/domain/entities/budget_period.dart';
import 'package:saldough/features/budget/domain/repositories/budget_repository.dart';
import 'package:saldough/features/freelance/domain/entities/freelance_payment.dart';
import 'package:saldough/features/freelance/domain/entities/freelance_project.dart';
import 'package:saldough/features/freelance/domain/entities/worklog_entry.dart';
import 'package:saldough/features/freelance/domain/repositories/freelance_repository.dart';
import 'package:saldough/shared/transaction/transaction.dart';
import 'package:saldough/shared/wallet/wallet.dart';
import 'package:state_management/state_management.dart';

final GetIt rootGetIt = GetIt.instance;

int rp(int rupiah) => rupiah * 100;

Future<void> _seed(GetIt c) async {
  final wallets = c<WalletRepository>();
  final existing = await wallets.listWallets();
  if (existing.fold((_) => false, (w) => w.isNotEmpty)) return;

  for (final w in const [
    Wallet(id: 'bca', name: 'BCA', iconKey: 'walletBank', initialBalance: 720000000, currentBalance: 720000000),
    Wallet(id: 'gopay', name: 'GoPay', iconKey: 'walletEwallet', initialBalance: 25000000, currentBalance: 25000000),
    Wallet(id: 'tunai', name: 'Tunai', iconKey: 'walletCash', initialBalance: 60000000, currentBalance: 60000000),
    Wallet(id: 'tabungan', name: 'Tabungan', iconKey: 'walletSavings', initialBalance: 1050000000, currentBalance: 1050000000),
  ]) {
    await wallets.saveWallet(w);
  }

  final now = DateTime.now();
  DateTime d(int day, [int h = 9]) => DateTime(now.year, now.month, day, h);
  final start = DateTime(now.year, now.month);

  await c<BudgetRepository>().saveBudget(Budget(
    id: 'b1',
    name: 'Belanja ${_month(now.month)}',
    walletId: 'bca',
    period: BudgetPeriod.monthly,
    startDate: start,
    items: [
      BudgetItem(id: 'i-makan', name: 'Makan', enteredAmount: rp(2000000)),
      BudgetItem(id: 'i-transport', name: 'Transportasi', enteredAmount: rp(600000)),
      BudgetItem(id: 'i-kopi', name: 'Kopi', quantity: 20, unitPrice: rp(25000)),
      BudgetItem(id: 'i-listrik', name: 'Listrik', enteredAmount: rp(350000)),
      BudgetItem(id: 'i-internet', name: 'Internet', enteredAmount: rp(400000)),
      BudgetItem(
        id: 'i-tabung',
        name: 'Tabungan',
        enteredAmount: rp(1500000),
        kind: BudgetItemKind.transfer,
        targetWalletId: 'tabungan',
      ),
    ],
  ));

  var n = 0;
  String id() => 't${n++}';
  final txs = <Transaction>[
    IncomeTransaction(id: id(), date: d(1, 8), amount: rp(9500000), note: 'Gaji', walletId: 'bca', categoryKey: 'Gaji'),
    TransferTransaction(id: id(), date: d(1, 10), amount: rp(1500000), note: 'Sisihkan tabungan', fromWalletId: 'bca', toWalletId: 'tabungan', budgetItemId: 'i-tabung'),
    ExpenseTransaction(id: id(), date: d(3), amount: rp(350000), note: 'Token listrik', walletId: 'bca', categoryKey: 'Listrik', budgetItemId: 'i-listrik'),
    ExpenseTransaction(id: id(), date: d(4), amount: rp(400000), note: 'Internet rumah', walletId: 'bca', categoryKey: 'Internet', budgetItemId: 'i-internet'),
    TransferTransaction(id: id(), date: d(5), amount: rp(300000), note: 'Isi saldo GoPay', fromWalletId: 'bca', toWalletId: 'gopay'),
    for (final (day, amt, note) in [
      (6, 185000, 'Belanja sayur'), (9, 92000, 'Makan siang'), (12, 240000, 'Makan malam keluarga'),
      (15, 64000, 'Sarapan'), (18, 310000, 'Belanja bulanan'), (21, 78000, 'Makan siang'),
      (24, 156000, 'Warung'), (27, 45000, 'Jajan'),
    ])
      ExpenseTransaction(id: id(), date: d(day, 12), amount: rp(amt), note: note, walletId: 'bca', categoryKey: 'Makan', budgetItemId: 'i-makan'),
    for (final (day, amt) in [(7, 38000), (11, 52000), (16, 41000), (22, 36000), (26, 47000)])
      ExpenseTransaction(id: id(), date: d(day, 18), amount: rp(amt), note: 'Ojek', walletId: 'gopay', categoryKey: 'Transportasi', budgetItemId: 'i-transport'),
    for (final day in [8, 10, 14, 17, 20, 23, 25, 28])
      ExpenseTransaction(id: id(), date: d(day, 8), amount: rp(28000), note: 'Kopi', walletId: 'tunai', categoryKey: 'Kopi', budgetItemId: 'i-kopi'),
    ExpenseTransaction(id: id(), date: d(19, 15), amount: rp(420000), note: 'Sepatu lari', walletId: 'bca', categoryKey: 'Belanja'),
    IncomeTransaction(id: id(), date: d(20, 10), amount: rp(2250000), note: 'Proyek logo', walletId: 'bca', categoryKey: 'Freelance'),
  ];
  final txRepo = c<TransactionRepository>();
  for (final t in txs) {
    await txRepo.saveTransaction(t);
  }
  await RecomputeWalletBalances(walletRepository: wallets, transactionRepository: txRepo).call();

  final fr = c<FreelanceRepository>();
  await fr.saveProject(const FreelanceProject(id: 'p1', name: 'Redesain Toko Kopi', hourlyRate: 15000000));
  final entries = <WorklogEntry>[
    for (final (i, day, h, note) in [
      (0, 14, 4, 'Riset dan moodboard'), (1, 16, 6, 'Wireframe'), (2, 19, 5, 'Desain halaman menu'),
      (3, 22, 3, 'Revisi klien'), (4, 25, 4, 'Aset media sosial'), (5, 27, 2, 'Rapat mingguan'),
    ])
      WorklogEntry(id: 'w$i', projectId: 'p1', date: d(day), hours: h, hourlyRate: 15000000, note: note, paymentId: i < 4 ? 'pay1' : null),
  ];
  await fr.saveEntries(entries);
  await fr.savePayment(FreelancePayment(
    id: 'pay1',
    projectId: 'p1',
    entryIds: const ['w0', 'w1', 'w2', 'w3'],
    expectedDate: DateTime(now.year, now.month + 1, 5),
  ));

  final tut = c<TutorialProgressRepository>();
  await tut.markOnboardingDone();
  await tut.markStepsSeen(SpotlightKey.values);
}

String _month(int m) => const [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ][m - 1];

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Bloc.observer = AppBlocObserver();
  await LocaleSettings.useDeviceLocale();
  await di.run(rootGetIt);
  await _seed(rootGetIt);
  registerEffectHandlers();
  final router = rootGetIt<GoRouter>();
  runApp(TranslationProvider(child: SaldoughApp(getIt: rootGetIt, router: router)));
  router.go('/home');
  di.warmUp(rootGetIt);
}
