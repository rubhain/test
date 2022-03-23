SELECT  AVG(rental_rate)
FROM    film;

COUNT(title)
FROM film
WHERE title LIKE 'C%';

SELECT  MAX(length)
FROM    film
WHERE   rental_rate = 0.99;


DISTINCT COUNT(replacement_cost)
FROM     film
WHERE    length > 150;

