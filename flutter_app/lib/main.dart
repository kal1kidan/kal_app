import 'package:flutter/material.dart';
import 'lib/screens/home.dart';
import 'lib/screens/detail.dart';
import 'lib/screens/checkout.dart';
import 'lib/screens/onboarding.dart';
import 'lib/screens/profile.dart';
import 'lib/screens/splash.dart';

void main() {
  runApp(const KalApp());
}

class KalApp extends StatelessWidget {
  const KalApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Kal Perfumes',
      theme: ThemeData(primarySwatch: Colors.brown),
      initialRoute: '/splash',
      routes: {
        '/splash': (c) => const SplashScreen(),
        '/': (c) => const HomeScreen(),
        '/detail': (c) => const DetailScreen(),
        '/checkout': (c) => const CheckoutScreen(),
        '/onboarding': (c) => const OnboardingScreen(),
        '/profile': (c) => const ProfileScreen(),
      },
    );
  }
}
