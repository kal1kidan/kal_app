import 'package:flutter/material.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Future.delayed(const Duration(seconds: 1), () => Navigator.pushReplacementNamed(context, '/'));
    return const Scaffold(
      body: Center(child: CircularProgressIndicator()),
    );
  }
}
