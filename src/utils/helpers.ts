export function getCurrentDate(): number {
  return new Date().getFullYear();
}

export function getMyActualAge(): number {
  const myBirthday = new Date(2004, 5, 6); // ⚠️ Juin = 5 car 0-indexé
  const today = new Date();

  let age = today.getFullYear() - myBirthday.getFullYear();

  // Vérifie si l’anniversaire est déjà passé cette année
  const hasBirthdayPassed =
    today.getMonth() > myBirthday.getMonth() ||
    (today.getMonth() === myBirthday.getMonth() &&
      today.getDate() >= myBirthday.getDate());

  if (!hasBirthdayPassed) {
    age--; // Pas encore eu l'anniversaire cette année
  }

  return age;
}
