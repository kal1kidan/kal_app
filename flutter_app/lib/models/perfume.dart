class Perfume {
  final String id;
  final String name;
  final String subtitle;
  final double price;
  final String description;
  final String category;
  final double rating;
  final int reviews;
  final String image;
  final Notes notes;
  final String details;

  Perfume({
    required this.id,
    required this.name,
    required this.subtitle,
    required this.price,
    required this.description,
    required this.category,
    required this.rating,
    required this.reviews,
    required this.image,
    required this.notes,
    required this.details,
  });

  factory Perfume.fromMap(Map<String, dynamic> m) => Perfume(
        id: m['id'] as String,
        name: m['name'] as String,
        subtitle: m['subtitle'] as String,
        price: (m['price'] as num).toDouble(),
        description: m['description'] as String,
        category: m['category'] as String,
        rating: (m['rating'] as num).toDouble(),
        reviews: m['reviews'] as int,
        image: m['image'] as String,
        notes: Notes.fromMap(m['notes'] as Map<String, dynamic>),
        details: m['details'] as String,
      );
}

class Notes {
  final String top;
  final String heart;
  final String base;

  Notes({required this.top, required this.heart, required this.base});

  factory Notes.fromMap(Map<String, dynamic> m) => Notes(
        top: m['top'] as String,
        heart: m['heart'] as String,
        base: m['base'] as String,
      );
}
