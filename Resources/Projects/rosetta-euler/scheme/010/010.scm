(define (sieve-of-eratosthenes limit)
  (define (sieve u v)
    (let ((p (car v)))
      (if (> (* p p) limit)
        (let reverse-append ((u u) (v v))
          (if (null? u) v (reverse-append (cdr u) (cons (car u) v))))
        (sieve (cons p u)
          (let wheel ((u '()) (v (cdr v)) (a (* p p)))
            (cond ((null? v) (reverse u))
                  ((= (car v) a) (wheel u (cdr v) (+ a p)))
                  ((> (car v) a) (wheel u v (+ a p)))
                  (else (wheel (cons (car v) u) (cdr v) a))))))))
  (sieve '(2)
    (let range ((v '()) (k (if (odd? limit) limit (- limit 1))))
      (if (< k 3) v (range (cons k v) (- k 2))))))

(display (reduce-left + 0 (sieve-of-eratosthenes 2000000)))

(exit)