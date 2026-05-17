import 'package:flutter/material.dart';
import '../models/perfume.dart';

class CheckoutScreen extends StatelessWidget {
  const CheckoutScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final Perfume p = ModalRoute.of(context)!.settings.arguments as Perfume;
    return Scaffold(
      appBar: AppBar(title: const Text('Checkout')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(p.name, style: Theme.of(context).textTheme.headline6),
            const SizedBox(height: 8),
            Text('Price: \$${p.price.toStringAsFixed(0)}'),
            const SizedBox(height: 16),
            ElevatedButton(onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Purchase simulated')));
            }, child: const Text('Confirm Purchase'))
          ],
        ),
      ),
    );
  }
}
