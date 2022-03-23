DISTINCT replacement_cost FROM film;

DISTINCT COUNT(replacement_cost)    FROM film;

COUNT(title) FROM film WHERE  title LIKE 'T%' AND rating = 'G';

COUNT(*) FROM country WHERE LIKE '_____';

COUNT(*) FROM    city
WHERE LIKE '%r' OR '%R';
