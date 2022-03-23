SELECT country FROM country WHERE country LIKE 'A%a';

SELECT country FROM country WHERE country LIKE '____%n';

SELECT title   FROM film    WHERE title   LIKE '%a%' OR '%A%';

SELECT  *      FROM film    
WHERE title    LIKE 'C%' AND length > 90 AND rental_rate = 2.29;