import 'package:flutter/material.dart';
import '../data/perfumes.dart';
import '../models/perfume.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Kal Perfumes')),
      body: ListView.builder(
        itemCount: PERFUMES.length,
        itemBuilder: (context, i) {
          final Perfume p = PERFUMES[i];
          return ListTile(
            leading: Image.network(p.image, width: 56, height: 56, fit: BoxFit.cover),
            title: Text(p.name),
            subtitle: Text(p.subtitle),
            trailing: Text('\$${p.price.toStringAsFixed(0)}'),
            onTap: () => Navigator.pushNamed(context, '/detail', arguments: p),
          );
        },
      ),
    );
  }
}
