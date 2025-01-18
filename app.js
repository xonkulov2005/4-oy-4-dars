// 1-MASALA
// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".
let A = 7;
if (A > 0) {
  console.log("A soni musbat - True");
} else {
  console.log("A soni mubat emas - False !!!");
}

// ====================
// 2-MASALA
// Boolean2. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".
let SON = 7;
if (SON % 2 == 1) {
  console.log("A soni toq - True");
} else {
  console.log("A soni toq emas - False !!!");
}

// ====================
// 3-MASALA
// Boolean3. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".
let a = 3;
let B = 2;
if (a > 2 && B <= 3) {
  console.log("True");
} else {
  console.log("False !!!");
}

// ====================
// 4-MASALA
// Boolean4. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C".
let A1 = 3;
let B1 = 4;
let C = 4;
if (A1 <= B1 && B1 <= C) {
  console.log("True");
} else {
  console.log("False !!!");
}

// ====================
// 5-MASALA
// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".
let A2 = 5;
let B2 = 5;
if ((A2 % 2 == 1 && B2 % 2 == 1) || (A2 % 2 == 0 && B2 % 2 == 0)) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 6-MASALA
// Boolean6. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bolmaganda bittasi musbat".
let A3 = -5;
let B3 = -5;
let C1 = -4;
if (A3 > 0 || B3 > 0 || C1 > 0) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 7-MASALA
// Boolean7. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".
let son = 123;
let birinchi = (son - (son % 100)) / 100;
let ikkinchi = ((son % 100) - (son % 10)) / 10;
let uchinchi = son % 10;
if (son > 99 && son < 1000 && birinchi != ikkinchi && ikkinchi != uchinchi) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 8-MASALA
// Boolean8. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bolmaganda 2 tasi bir biriga teng".
let number = 12;
let number1 = 23;
let number2 = 12;
if (number == number1 || number1 == number2 || number == number2) {
  console.log("True");
} else {
  console.log("False");
}

// 9-MASALA
console.log("9-masala");
console.log(
  'Boolean9. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Farzin bir yurishda bir maydondan ikkinchisiga ota oladi".'
);
console.log("Shaxmat doskasi ekan !!!");

// ====================
// 1-MASALA
// 2-bo'lim 1-masala
// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son".
let a1 = 5;
if (a1 % 2 == 0) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 2-MASALA
// 2-bo'lim 2-masala
// Boolean2. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A >= 0 yoki B <-2."
let a2 = 5;
let b2 = -5;
if (a2 >= 0 && b2 < -2) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 3-MASALA
// 2-bo'lim 3-masala
// Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".
let a3 = 1;
let b3 = 3;
let c3 = 5;
if (a3 < b3 && b3 < c3) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 4-MASALA
// 2-bo'lim 4-masala
// Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
let a4 = 1;
let b4 = 3;
if (a4 % 2 == 1 && b4 % 2 == 1) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 5-MASALA
// 2-bo'lim 5-masala
// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bolmaganda bittasi toq son".
let A4 = 4;
let B4 = 5;
if (A4 % 2 == 1 || B4 % 2 == 1) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 6-MASALA
// 2-bo'lim 6-masala
// Boolean6. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
let A5 = 5;
let B5 = 4;
if ((A5 % 2 == 1 && B5 % 2 == 0) || (A5 % 2 == 0 && B5 % 2 == 1)) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 2-bo'lim 7-masala
// Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
let a5 = 5;
let b5 = -4;
let c5 = 33;
if (a5 > 0 && b5 > 0 && c5 > 0) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 8-MASALA
// 2-bo'lim 8-masala
// Boolean8. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".
let a6 = 5;
let b6 = -4;
let c6 = -33;
if (
  (a6 > 0 && b6 < 0 && c6 < 0) ||
  (a6 < 0 && b6 > 0 && c6 < 0) ||
  (a6 < 0 && b6 < 0 && c6 > 0)
) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 9-MASALA
// 2-bo'lim 9-masala
// Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
let A6 = 5;
let B6 = 4;
let C6 = -33;
if (
  (A6 > 0 && B6 > 0 && C6 < 0) ||
  (A6 < 0 && B6 > 0 && C6 > 0) ||
  (A6 > 0 && B6 < 0 && C6 > 0)
) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 10-MASALA
// 2-bo'lim 10-masala
// Boolean10. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".
let son1 = 12;
if (son1 > 9 && son1 % 2 == 0) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 11-MASALA
// 2-bo'lim 11-masala
// Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
let son2 = 121;
if (son2 > 99 && son2 % 2 == 1) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 12-MASALA
// 2-bo'lim 12-masala
// Boolean12. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
const Son = 121;
const Son1 = 55;
const Son2 = -55;
if (Son + Son1 == 0 || Son + Son2 == 0 || Son2 + Son1 == 0) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 13-MASALA
// 2-bo'lim 13-masala
// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
const NuMber = 123;
const Number = (NuMber - (NuMber % 100)) / 100;
const Number1 = ((NuMber % 100) - (NuMber % 10)) / 10;
const Number2 = NuMber % 10;
if (
  NuMber > 99 &&
  NuMber < 1000 &&
  Number1 == Number + 1 &&
  Number2 == Number1 + 1
) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 14-MASALA
// 2-bo'lim 14-masala
// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
const SoN = 321;
const SoN1 = (SoN - (SoN % 100)) / 100;
const SoN2 = ((SoN % 100) - (SoN % 10)) / 10;
const SoN3 = SoN % 10;
if (
  (SoN > 99 && SoN < 1000 && SoN2 == SoN1 + 1 && SoN3 == SoN2 + 1) ||
  (SoN2 == SoN1 - 1 && SoN3 == SoN2 - 1)
) {
  console.log("True");
} else {
  console.log("False");
}

// ====================
// 15-MASALA
// 2-bo'lim 15-masala
// Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".
const D = 121;
const E = (D - (D % 100)) / 100;
const F = ((D % 100) - (D % 10)) / 10;
const G = D % 10;
if (D > 99 && D < 1000 && E == G) {
  console.log("True");
} else {
  console.log("False");
}
