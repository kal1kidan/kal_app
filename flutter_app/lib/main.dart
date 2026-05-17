import 'package:flutter/material.dart';
import 'screens/home.dart';
import 'screens/detail.dart';
import 'screens/checkout.dart';
import 'screens/onboarding.dart';
import 'screens/profile.dart';
import 'screens/splash.dart';

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
