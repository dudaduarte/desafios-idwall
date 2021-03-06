/*
 * Calcular o MDC
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que calcula e retorna o MDC
 * (máximo divisor comum) entre dois números.
 * Para isso você pode usar as seguintes informações:
 *
 * 1. O MDC de um número N com 0 é o próprio N.
 *
 * 2. O MDC entre dois números M e N, onde M > N é
 * igual ao MDC de N e do resto da divisão de M por N.
 *
 * Você pode considerar que nas entradas dos testes
 * a > b sempre.
 */

const MDC = (a, b) => {
  if (b === 0) return a

  let n = 2
  let rest = a%b
  const commonDivisors = []

  while (rest > 1 && b > 1) {
    const isBDivisible = b%n === 0
    const isRestDivisible = rest%n === 0

    if (isBDivisible) b = b/n

    if (isRestDivisible) rest = rest/n

    if (isBDivisible && isRestDivisible) commonDivisors.push(n)

    n = b%n === 0 || rest%n === 0 ? n : ++n
  }

  return commonDivisors.reduce((acc, current) => acc * current, 1)
}

module.exports = MDC
