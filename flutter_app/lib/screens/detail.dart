import 'package:flutter/material.dart';
import '../models/perfume.dart';

class DetailScreen extends StatelessWidget {
  const DetailScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final Perfume p = ModalRoute.of(context)!.settings.arguments as Perfume;
    return Scaffold(
      appBar: AppBar(title: Text(p.name)),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.network(p.image, height: 240, width: double.infinity, fit: BoxFit.cover),
            const SizedBox(height: 12),
            Text(p.subtitle, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w500)),
            const SizedBox(height: 8),
            Text(p.description),
            const SizedBox(height: 12),
            Text('Notes', style: Theme.of(context).textTheme.titleMedium),
            Text('Top: ${p.notes.top}'),
            Text('Heart: ${p.notes.heart}'),
            Text('Base: ${p.notes.base}'),
            const SizedBox(height: 16),
            Text(p.details),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, '/checkout', arguments: p),
              child: const Text('Buy Now'),
            )
          ],
        ),
      ),
    );
  }
}
